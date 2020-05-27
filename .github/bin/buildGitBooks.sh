#!/bin/bash

for dir in */ ; do
    cd $dir;
    count=`ls -1 *.md 2>/dev/null | wc -l`
    if [ $count != 0 ]; then
        echo "$dir"
        gitbook install && gitbook build
    fi    
    cd ..
done
