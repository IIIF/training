#!/bin/bash

if [ ! -d "build" ]; then
    mkdir build
fi   
# if this is 1 the build failed
failed_build=0
failure_message="Failed to build: "
for dir in */ ; do
    cd $dir;
    count=`ls -1 *.md 2>/dev/null | wc -l`
    if [ $count != 1 ]; then
        echo "Building $dir"
        if [ -d "../build/$dir" ]; then
            rm -rf "../build/$dir";
        fi    
        mkdir "../build/$dir"
        gitbook install 
        if [ $? -eq 1 ];then
            failed_build=1
            echo "Failed to install gitbook in $dir"
            failure_message="$failure_message $dir"
        fi
        gitbook build . "../build/$dir"
        if [ $? -eq 1 ];then
            failed_build=1
            echo "Failed to build gitbook in $dir"
            failure_message="$failure_message $dir"
        fi
    fi    
    cd ..
done

if [ $failed_build -eq 1 ];then
    echo "$failure_message"
fi
exit $failed_build
