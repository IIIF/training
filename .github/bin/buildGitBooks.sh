#!/bin/bash

mkdir build
for dir in */ ; do
    cd $dir;
    count=`ls -1 *.md 2>/dev/null | wc -l`
    if [ $count != 0 ]; then
        echo "$dir"
        mkdir "../build/$dir"
        gitbook install && gitbook build "../build/$dir"
    fi    
    cd ..
done

ls build
