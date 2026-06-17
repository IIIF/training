#!/bin/bash
# Scans directories and outputs honkit or gitbook dirs based on package.json
# Usage: findDirs.sh --honkit | --gitbook

exclude="build css scripts _book"
honkit_dirs=""
gitbook_dirs=""

for dir in */ ; do
    dirname=$(basename "$dir")
    if [[ "$exclude" =~ .*"$dirname".* ]]; then
        continue
    fi
    if [ -f "$dir/package.json" ] && grep -q "honkit" "$dir/package.json"; then
        honkit_dirs="$honkit_dirs $dir"
    else
        gitbook_dirs="$gitbook_dirs $dir"
    fi
done

case "$1" in
    --honkit)
        echo $honkit_dirs
        ;;
    --gitbook)
        echo $gitbook_dirs
        ;;
    *)
        echo "Usage: $0 --honkit | --gitbook" >&2
        exit 1
        ;;
esac
