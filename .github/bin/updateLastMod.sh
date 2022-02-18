#!/bin/bash

resolveLink() {
    local filename="$1"
    cwd=`pwd`
    cd `dirname $filename`
    fullpath=`pwd -P`/`basename $filename`

    cd $cwd
    retval="$fullpath"
}

updateFile() {
    local filename="$1"
    local sourceFilename=""
    if [[ "$filename" == *"index.html"* ]]; then
      sourceFilename="${filename/index.html/README.html}"
    else
      sourceFilename="$filename"
    fi
    noBuild="${sourceFilename/build\//}"
    # If html version exists use that one
    if test -f "$noBuild"; then
        mdFile="$noBuild"
    else
        mdFile="${noBuild/.html/.md}"
    fi
    resolveLink $mdFile
    mdFile="$retval"

    modification=`git log -1 --pretty="format:%cd" --date local $mdFile `
    echo "Filename $filename lastmod: $modification sourceFile: $mdFile"
    if [ -n "$modification" ];then
        if [[ $OSTYPE == 'darwin'* ]]; then
            touchFormat=`date -jf "%a %b %e %T %Y" "$modification" +"%FT%T"`
        else    
            touchFormat=`date -d "$modification" +"%FT%T"`
        fi
        echo "touch -d \"$touchFormat\" $filename "
        touch -d "$touchFormat" $filename
    else
        echo "NO_DATE"
    fi    
}

export -f updateFile
export -f resolveLink
find build -name "*.html" -exec bash -c "updateFile {}" \;
