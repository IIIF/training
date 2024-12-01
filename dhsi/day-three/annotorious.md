# Annotorious
Annotorious is a JS library you can easily build into a browser. Slightly different from Mirador because it doesn't save annotations to the localStorage (however it can be set to up to do so if you want). The JS library assumes you are going to set up your own way of saving annotations. 

## Using Annotorious
This view is making use of three plugins (toolbar, georeference and extended shapes beyond polygon and rectangle). Configuration is VERY well documented for the [out of the box Annotorious](https://annotorious.github.io/api-docs/osd-plugin/) including configuration and custom events and the [plugins](https://annotorious.github.io/plugins/). 



```
<!-- CSS stylesheet -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@recogito/annotorious-openseadragon@2.7.14/dist/annotorious.min.css">

<!-- JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/openseadragon/4.1.1/openseadragon.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@recogito/annotorious-openseadragon@2.7.14/dist/openseadragon-annotorious.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@recogito/geotagging-widget@latest"></script>
<script src="https://cdn.jsdelivr.net/npm/@recogito/annotorious-toolbar@latest/dist/annotorious-toolbar.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@recogito/annotorious-selector-pack@latest/dist/annotorious-selector-pack.min.js"></script>
<div id="my-toolbar-container"></div>
<div id="openseadragon1" style="height: 600px"></div>

<script>
  window.onload = function() {
    var viewer = OpenSeadragon({
      id: "openseadragon1",
      prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/4.1.1/images/",
      tileSources: [
        "https://stacks.stanford.edu/image/iiif/cg881nm5421/cg881nm5421_0001/info.json"
      ]
    });

    var config = {widgets:  [{widget: 'COMMENT', editable: 'MINE_ONLY', purposeSelector: true},
            {widget: 'TAG', vocabulary: ['example', 'list', 'tags']},
            {widget: recogito.GeoTagging({defaultOrigin: [ 48, 16 ]})}], allowEmpty: true};
    var anno = OpenSeadragon.Annotorious(viewer, config);
    Annotorious.SelectorPack(anno);
    Annotorious.Toolbar(anno, document.getElementById('my-toolbar-container'), {'withMouse': true});
  }
</script>
```
<a href="annotorious-embed.html" target="_blank">Annotorious page</a>

<iframe src="annotorious-embed.html" style="width: 100%; height: 600px">


