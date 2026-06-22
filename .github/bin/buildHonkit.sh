#!/bin/bash
# Builds HonKit directories. Pass list of dirs as arguments, or auto-detects via findDirs.sh.

if [ ! -d "build" ]; then
    mkdir build
fi

failed_build=0
failure_message="Failed to build: "

# Use passed args or auto-detect
if [ $# -gt 0 ]; then
    dirs="$@"
else
    dirs=$(.github/bin/findDirs.sh --honkit)
fi

for dir in $dirs; do
    cd "$dir"
    echo "Building $dir with HonKit"
    if [ -d "../build/$dir" ]; then
        rm -rf "../build/$dir"
    fi
    mkdir -p "../build/$dir"

    npx honkit build . "../build/$dir"
    if [ $? -eq 1 ]; then
        failed_build=1
        echo "Failed to build HonKit in $dir"
        failure_message="$failure_message $dir"
    fi

    cd ..
done

if [ $failed_build -eq 1 ]; then
    echo "$failure_message"
fi
exit $failed_build
