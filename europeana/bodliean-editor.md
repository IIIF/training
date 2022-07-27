# Create a IIIF Manifest using the Bodleian Manifest Editor

<iframe src="https://player.vimeo.com/video/716824994?h=29d36a5e00#t=4m20s" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

## Gather images
First, assemble a list of IIIF `info.json` URLs for your content. Ideally you should use an image from the previous Image API step but you could also use one of these:
 * Here is a tractor image from the Internet Archive [Tractor from the Internet Archive](https://iiif.archivelab.org/iiif/img-0353/info.json)
 * Here is a sample image at the [Yale Center for British Art](https://images.collections.yale.edu/iiif/2/ycba:9e08d901-a26b-4acb-a768-28f90a062adf/info.json)
   
## Use the Bodleian Manifest Editor to create a manifest
   1. Navigate to the editor.  
      - HTTPS version at [the Bodleian](https://digital.bodleian.ox.ac.uk/manifest-editor/)
      
   1. Add a Canvas to your Manifest.  The option to add a Canvas is below the main image preview, to the left.
      - Click the "Canvas Metadata" expander in the right-hand column.  
      - Click "Add an Image".  Choose the option to supply the `info.json` URL and enter the URL for your first image
      - Edit the Canvas Label and provide an appropriate label for your immage
      - Repeat these steps to add additional Canvases and images as desired
   1. Click the "Manifest Metadata" header in the right-hand column.  Edit the Label.  Supply a label for your manifest.
   1. Click "Save Manifest" at the top of the right hand column.  Click "Download Manifest" in the dialog box.
 

<iframe src="https://player.vimeo.com/video/716825026?h=1387ee0b57" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
