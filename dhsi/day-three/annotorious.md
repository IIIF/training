# Annotorious
Annotorious is a JS library you can easily build into a browser. T

## 


<!-- CSS stylesheet -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@recogito/annotorious-openseadragon@2.7.14/dist/annotorious.min.css">

<!-- JS -->
<script src="https://cdn.jsdelivr.net/npm/@recogito/annotorious-openseadragon@2.7.14/dist/openseadragon-annotorious.min.js"></script>
<div id="openseadragon1"></div>

<script>
  window.onload = function() {
    var viewer = OpenSeadragon({
      id: "openseadragon1",
      tileSources: {
        type: "image",
        url: "https://gallica.bnf.fr/ark:/12148/btv1b84999488/info.json"
      }
    });

    var config = {};
    var anno = OpenSeadragon.Annotorious(viewer, config);
    // Load annotations in W3C WebAnnotation format
    anno.loadAnnotations('annotations.w3c.json');
  }
</script>