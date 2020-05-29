#!/bin/bash

cp -r css build/

marked -i index.md -o build/content.html

echo "<html><head><title>IIIF Training</title>" > build/index.html
echo '<link rel="stylesheet" href="" >' >> build/index.html
echo '</head><body>' >> build/index.html
cat build/content.html >> build/index.html
echo "</body></html>" >> build/index.html

rm build/content.html
