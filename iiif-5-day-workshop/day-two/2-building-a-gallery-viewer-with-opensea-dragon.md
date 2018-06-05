# Building a Gallery Viewer With Open Seadragon

## Activity Description

In this activity we want to start combining IIIF we re-usable libraries that allow us to do more advanced things. In this activity we are going to add the library openseadragon.js to a basic webpage and provide it with information from a IIIF server that it can use to display images.

#### Instructions

1. Download open seadragon into your `MyIIIFGallery` Project folder from [https://openseadragon.github.io/#download](https://openseadragon.github.io/#download)
1. In one of your image viewing pages (e.g. "image1.html" add the Seadragon Library
  * `<script src="openseadragon-bin-2.3.1" type="text/javascript"></script>`
1. Replace your `<img>` tag with an empty div for the openseadragon library to create a view port
  * `<div id="myImage" style="width: 400px"></div>`
1. Create a basic openseadragon object

    ```javascript
      const imageurl = //path to info.json file, e.g. http://myimageserver/myimage/info.json
      var viewer = OpenSeadragon({
        id: "myImage",
        prefixUrl: "openseadragon-bin-2.3.1/images/",
        tileSources: [infojson]
      });

    ```
