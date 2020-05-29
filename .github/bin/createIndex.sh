#!/bin/bash

cp -r css build/

marked -i index.md -o build/content.html

echo "<html><head><title>IIIF Training</title>" > build/index.html
echo '<link rel="stylesheet" href="css/style.css" >' >> build/index.html
echo '</head><body>' >> build/index.html >> build/index.html

echo '<div class="container-lg px-3 my-5 markdown-body">' >> build/index.html
cat build/content.html >> build/index.html
echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.1.0/anchor.min.js" integrity="sha256-lZaRhKri35AyJSypXXs4o6OPFTbTmUoltBbDCbdzegg=" crossorigin="anonymous"></script>
    <script>anchors.add();</script>' >> build/index.html
echo "</div></body></html>" >> build/index.html

rm build/content.html
