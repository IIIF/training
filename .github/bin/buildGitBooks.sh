#!/bin/bash

if [ ! -d "build" ]; then
    mkdir build
fi   
exclude="build css scripts _book"
honkit_dirs="iiif-online-workshop"
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

        if [[ "$honkit_dirs" =~ .*"$(basename $dir)".* ]]; then
            BUILD_CMD="npx honkit"
        else
            BUILD_CMD="gitbook"
        fi

        $BUILD_CMD install
        if [ $? -eq 1 ];then
            failed_build=1
            echo "Failed to install in $dir"
            failure_message="$failure_message $dir"
        fi
        $BUILD_CMD build . "../build/$dir"
        if [ $? -eq 1 ];then
            failed_build=1
            echo "Failed to build in $dir"
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