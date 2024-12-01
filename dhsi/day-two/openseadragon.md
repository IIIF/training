# OpenSeadragon
OpenSeadragon is a zoomable image viewer that will work with almost any kind of image including a IIIF image. It is also used in almost every IIIF viewer we are going to show you in this class.

OpenSeadragon also has a [plethora of plugins](https://openseadragon.github.io/#plugins) which we will not be covering in this class. There is also a [OpenSeadragon codepen](https://codepen.io/collection/APoyjJ/) which displays various configurations and the code to create them.

There are two sets of documents you will want to know in order to work with OpenSeadragon. [https://openseadragon.github.io/docs/](https://openseadragon.github.io/docs/) which has everything from simple to complicated implementation docs for OpenSeadragon and the examples listed on the [homepage](https://openseadragon.github.io/) which will provide different implementations for types of images, etc.

## Implementation
All you need for OpenSeadragon to work is a [IIIF image(s)](https://openseadragon.github.io/examples/tilesource-iiif/). The example below is built to work with both a single image and multiple. Make sure your container has a width and height otherwise it will not render properly.



```
<div id="openseadragoncontainer" style="width: 800px; height: 600px;"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/openseadragon/4.1.1/openseadragon.min.js"></script>
<script type="text/javascript">
    var viewer = OpenSeadragon({
        id: "openseadragoncontainer", //this id matches the container id
        prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/4.1.1/images",
        sequenceMode: true,
        tileSources: [
          "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000001.jp2/info.json",
          "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000002.jp2/info.json",
          "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000003.jp2/info.json",
          "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000004.jp2/info.json",
          "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000005.jp2/info.json",
          "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000006.jp2/info.json",
          "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000007.jp2/info.json"
        ]
    });
</script>
```

<div id="openseadragoncontainer" style="width: 800px; height: 600px;"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/openseadragon/4.1.1/openseadragon.min.js"></script>
<script type="text/javascript">
    var viewer = OpenSeadragon({
        id: "openseadragoncontainer", //this id matches the container id
        sequenceMode: true,
        prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/4.1.1/images/",
        tileSources: ["https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000001.jp2/info.json",
        "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000002.jp2/info.json",
        "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000003.jp2/info.json",
        "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000004.jp2/info.json",
        "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000005.jp2/info.json",
        "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000006.jp2/info.json",
        "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000007.jp2/info.json"]
    });
</script>

## Exercise
Place your images in OpenSeadragon. What are the limitations of this approach?