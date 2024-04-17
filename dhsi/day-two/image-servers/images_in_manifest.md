<script src="../canvas_finder.js">
</script>

# Finding images in Manifests

Some IIIF tools work with IIIF Image URLs rather than manifests. This is less common than it used to be but for tools like Omeka and basic region image generators getting the URL for the image you want is useful.

Once you have a Manifest URL you can use the tool below to extract the Image URL. We could do this by looking through the Manifest JSON but this requires a deeper dive in to the Presentation API. 

## Stage 1: Find IIIF Image URL

If you paste your Manifest URL in the box below and click Load it should show all of the images which are part of your Manifest. You can use the filter to search for a page label and then click `Copy Image URL` to copy the link to the IIIF Image.

<script src="https://kit.fontawesome.com/0060d53ddc.js" crossorigin="anonymous"></script>
<div id="canvas_finder" style="border: 1px solid black; padding: 5px;">
<div id="manifest_enter" style="padding: 5px;">
    <form>
        <label for="exampleInputEmail1"><b>Manifest URL:</b></label>
        <input type="text" id="manifest_uri" style="width:70%"/>
        <button onclick=loadManifest(event)>Load</button>
        <button onclick=clearManifest(event)>Clear</button>
    </form>
</div>
<div id="manifest_content">
</div>
</div>

## Stage 2: Experiment

Now you have a IIIF Image URL you can plug it into the following IIIF Tools:

Check it works with a zooming viewer like OpenSeaDragon:

  [https://iiif.gdmrdigital.com/openseadragon/index.html?image=https://api.bl.uk/image/iiif/ark:/81055/vdc_100104087143.0x000011/info.json](https://iiif.gdmrdigital.com/openseadragon/index.html?image=https://api.bl.uk/image/iiif/ark:/81055/vdc_100104087143.0x000011/info.json)

![Open seadragon](imgs/bl_osd.png)

Pull out regions using the UCD selector tool:

  [https://jbhoward-dublin.github.io/IIIF-imageManipulation/index.html?imageID=https://api.bl.uk/image/iiif/ark:/81055/vdc_100104087143.0x000011](https://jbhoward-dublin.github.io/IIIF-imageManipulation/index.html?imageID=https://api.bl.uk/image/iiif/ark:/81055/vdc_100104087143.0x000011)

![TCD Image cropper](imgs/bl_image_cropping.png)
