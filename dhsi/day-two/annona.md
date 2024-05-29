# Annona
Annona only works with images. It also works with IIIF collections and annotations.

## Creating/Embedding an Annona page
1. Create a file called `annona.html`
2. Copy the code into file
```
<html>
  <head>
    <title>Annona viewer</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <script src="https://ncsu-libraries.github.io/annona/dist/annona.js"></script> <link rel="stylesheet" type="text/css" href="https://ncsu-libraries.github.io/annona/dist/annona.css">
 
    <iiif-storyboard url="https://iiif.bodleian.ox.ac.uk/iiif/manifest/748a9d50-5a3a-440e-ab9d-567dd68b6abb.json"></iiif-storyboard>
  </body>
</html>
```
<script src="https://ncsu-libraries.github.io/annona/dist/annona.js"></script> <link rel="stylesheet" type="text/css" href="https://ncsu-libraries.github.io/annona/dist/annona.css">
 
<iiif-storyboard url="https://iiif.bodleian.ox.ac.uk/iiif/manifest/748a9d50-5a3a-440e-ab9d-567dd68b6abb.json"></iiif-storyboard>

3. Open in the browser

## Embedding with a URL
1. Copy the code below into your `annona.html` file

```
<iframe src="replacewithmanifesturl"></iframe>
```

1. Go to [https://ncsu-libraries.github.io/annona/tools/#/tag-builder?url=&viewtype=&manifesturl=&settings=%7B%7D](https://ncsu-libraries.github.io/annona/tools/#/tag-builder?url=&viewtype=&manifesturl=&settings=%7B%7D)
2. Enter your manifest url. https://iiif.bodleian.ox.ac.uk/iiif/manifest/748a9d50-5a3a-440e-ab9d-567dd68b6abb.json
3. Select storyboard
4. Click on the Copy URL button
5. Replace replacewithmanifesturl with that copied url
```
<iframe src="https://ncsu-libraries.github.io/annona/tools/#/display?url=https%3A%2F%2Fiiif.bodleian.ox.ac.uk%2Fiiif%2Fmanifest%2F748a9d50-5a3a-440e-ab9d-567dd68b6abb.json&viewtype=iiif-storyboard&manifesturl=&settings=%7B%22zoom%22%3A%22-2582.666666666666,-475.5555555555557,11841.333333333332,9511.11111111111%22,%22fullpage%22%3Atrue%7D"></iframe>
```
<iframe style="width: 100%; min-height: 300px" src="https://ncsu-libraries.github.io/annona/tools/#/display?url=https%3A%2F%2Fiiif.bodleian.ox.ac.uk%2Fiiif%2Fmanifest%2F748a9d50-5a3a-440e-ab9d-567dd68b6abb.json&viewtype=iiif-storyboard&manifesturl=&settings=%7B%22zoom%22%3A%22-2582.666666666666,-475.5555555555557,11841.333333333332,9511.11111111111%22,%22fullpage%22%3Atrue%7D"></iframe>



## Configuring
1. Go to [https://ncsu-libraries.github.io/annona/tools/#/tag-builder?url=&viewtype=&manifesturl=&settings=%7B%7D](https://ncsu-libraries.github.io/annona/tools/#/tag-builder?url=&viewtype=&manifesturl=&settings=%7B%7D)
2. Enter your manifest url. https://iiif.bodleian.ox.ac.uk/iiif/manifest/748a9d50-5a3a-440e-ab9d-567dd68b6abb.json
3. Select storyboard
4. Update the view to reflect how you would like the page to load.
5. Click Copy Tag (reating/Embedding an Annona page) or Copy URL button (iframe option) and embed.

```
<iiif-storyboard url='https://iiif.bodleian.ox.ac.uk/iiif/manifest/748a9d50-5a3a-440e-ab9d-567dd68b6abb.json' styling='startCanvas: 47;toggleoverlay: true;perpage: 1;continousboard: true;index: 0;fit: vertical;overlaycolor: #2ad222;activecolor: #FFFF00;textposition: right;'></iiif-storyboard>
```

<iiif-storyboard url='https://iiif.bodleian.ox.ac.uk/iiif/manifest/748a9d50-5a3a-440e-ab9d-567dd68b6abb.json' styling='startCanvas: 47;toggleoverlay: true;perpage: 1;continousboard: true;index: 0;fit: vertical;overlaycolor: #2ad222;activecolor: #FFFF00;textposition: right;'></iiif-storyboard>

## String Manifests
Annona allows you to enter your manifests or annotations in [base64 encoded data uri or as raw json.](https://ncsu-libraries.github.io/annona/nourls/)

Additionally the tag builder will take your raw JSON entered into the form element with the value `Annotation JSON to be used instead of annotation URL; Will convert to data URI.` and will take your raw JSON and convert it into base64 encoded dataURI.

