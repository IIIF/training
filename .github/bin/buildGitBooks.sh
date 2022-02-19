#!/bin/bash

if [ ! -d "build" ]; then
    mkdir build
fi   

exclude="build css scripts _book"
# if this is 1 the build failed
failed_build=0
failure_message="Failed to build: "
for dir in */ ; do
    if [[ ! "$exclude" =~ .*"`basename $dir`".* ]]; then
        cd $dir;
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
        cd ..
    else
        echo "Ignoring $dir"
    fi    
done

if [ $failed_build -eq 1 ];then
    echo "$failure_message"
fi
exit $failed_build
