# Create a IIIF Manifest using the Digirati Manifest Editor

The Digirati Manifest editor provides more functionality than the [Bodleian Manifest Editor](../bodleian-editor/README.md) that we used in the previous task. Specifically it supports version 3 of the IIIF specifications which allows you to add Video or Audio items to a canvas. 

## Gather images

First, assemble a list of IIIF `info.json` URLs for your content. They should all be on HTTPS URLs (not unsecure HTTP).

 * Here is a sample image at the [Yale Center for British Art](https://images.collections.yale.edu/iiif/2/ycba:209a98f4-dce8-4948-bade-79a9ab6eb848/info.json)
 * Here's another sample image at [Wellcome](https://iiif.wellcomecollection.org/image/V0037482/info.json)
 * Here are some [book pages from Wellcome](https://digirati-co-uk.github.io/me-testing/03-image-services.html)

## Steps to create your Manifest

### Step 1

Navigate to the editor at https://manifest-editor.digirati.services/ and click on the Create new Manifest option at the top of the page:

![Manifest Editor Splash Screen](imgs/CreateEmptyManifest.png)

### Step 2

We are now going to edit the Manifest metadata to change the label. When you first open the manifest you have access to the Manifest metadata. To change the label of the manifest look to the right hand panel where it says **Blank Manifest** 

![Edit manifest](imgs/edit_manifest.png)

Now edit the Manifest label. Changes are saved automatically. By clicking the tabs above the label i.e. Descriptive, Metadata, Technical and Linking you can add other descriptions and metadata to your manifest. 

### Step 3

Now we are going to add some content to your manifest. To add a canvas click the "start adding content button":

![Add Canvas](imgs/add-canvas.png)

The Manifest Editor has a number of helpers for quickly creating Canvases from different sources. In this case, we're using IIIF Image Services. Select the **IIIF Image** option from the panel.

![Create a Canvas from an Image Service](imgs/image-service-option.png)

Paste the URL of the info.json into the text box and click **Create**.

![Paste the Image Service URL](imgs/paste-image-service-url.png)

Once the image is loaded you should see something similar to the screenshot below. Note it may take a few minutes for the image to load if you are using the Internet Archive.  

![Newly created canvas](imgs/newly-created-canvas.png)

Now edit the Canvas label, replacing the words "Untitled canvas" in the Label field in the right-hand panel:

![Editing the label](imgs/edit-label.png)

Now we are going to add a second canvas. To do this click on the Canvases panel on the left hand side:

![Select canvas panel](imgs/select-canvas-panel.png)

This will show you all of the canvases you have with your manifests. To add a second canvas click the add canvas button highlighted in this image.

![Add second canvas](imgs/add-second-canvas.png)

Then repeat the steps for adding a IIIF image and its info.json.

### Step 4

Now we are going to save and download the Manifest for the next stage. 

In the menu, click **File** -> **Export**.

The Manifest Editor gives you the option of IIIF Presentation 3 or 2. Click the **Download** button for Presentation 3:

![Export a manifest](imgs/export.png)

This will save to your default downloads location.

### Step 5

You should now create a directory to store all of the manifests and other things we create during the course. We suggest you call it `iiif-workshop` and you move the downloaded Manifest to this directory and call it `manifest.json`. 
