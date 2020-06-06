# Create a IIIF Manifest using the Bodleian Manifest Editor

## Gather images
First, assemble a list of IIIF `info.json` URLs for your content.  
 * Here is a sample image at [Klokan](http://free.iiifhosting.com/iiif/f9a02a80bf76333f50ffcf0f0c17aa58f9ebf6a1510c9801bde50f565ac0a936/info.json)
 * Here is a sample image at the [Yale Center for British Art](https://images.britishart.yale.edu/iiif/2/9e08d901-a26b-4acb-a768-28f90a062adf/info.json)
   
## Use the Bodleian Manifest Editor to create a manifest
   - Navigate to the editor.  If *any* of your `info.json` URLs begin with HTTP, use the HTTP version:
     - HTTP version at [text and bytes](http://iiif-manifest-editor.textandbytes.com/)
     - HTTPS version at [the Bodleian](https://digital.bodleian.ox.ac.uk/manifest-editor/)
   - Add a Canvas.  This option is below the main image preview, to the left.
      - Click the "Canvas Metadata" expander in the right-hand column.  
      - Click "Add an Image".  Choose the option to supply the `info.json` URL and enter the URL for your first image
      - Edit the Canvas Label and provide an appropriate label for your immage
      - Repeat these steps to add additional Canvases and images as desired
   - Click the "Manifest Metadata" header in the right-hand column
   - Edit the Label.  Supply a label for your manifest.
   - Click "Save Manifest" at the top of the right hand column.  Click "Donwload Manifest" in the dialog box.
 
## Copy the Manifest to the Web Server Folder
Copy the downloaded Manifest to the folder you created in step 1 above.  Name the file `manifest.json`

## View the Manifest JSON
Visit the URL http://127.0.0.1:8887/manifest.json  You should see the Manifest's JSON.

## View the Manifest in Universal Viewer
Navigate to the [Universal Viewer](https://universalviewer.io) web page.  Scroll down to "View a IIIF Manifest". Paste the URL above into the text box and click "View".   You should see your manifest in the Universal Viewer.
