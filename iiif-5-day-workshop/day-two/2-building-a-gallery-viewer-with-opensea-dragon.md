# Building a Gallery Viewer With Open Seadragon

## Activity Description

In this activity we want to start combining IIIF we re-usable libraries that allow us to do more advanced things. In this activity we are going to add the library openseadragon.js to a basic webpage and provide it with information from a IIIF server that it can use to display images.

#### Instructions

1. Download open seadragon into your `MyIIIFGallery` Project folder from [https://openseadragon.github.io/#download](https://openseadragon.github.io/#download)

1. In one of your image viewing pages (e.g. "image1.html" add the Seadragon Library
  * `<script src="openseadragon-bin-2.3.1" type="text/javascript"></script>`
1. Add jquery library (so you can easily request other files, such as info.json file)
  * `<script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>`
* Replace your `<img>` tag with an empty div for the openseadragon library to create a view port
  * `<div id="myImage" style="width: 400px"></div>`
* Create a basic openseadragon object

```javascript
  const imageurl = //path to info.json file
  $.get(imageUrl, function(infojson){
    var viewer = OpenSeadragon({
      id: "myImage",
      prefixUrl: "openseadragon-bin-2.3.1/images/",
      tileSources: [infojson.tiles]
    });
  });
```


### Leaflet

#### Activity Description

In this activity, we're going to repeat the above task with a different library called leaflet-iiif.js

#### Instructions
