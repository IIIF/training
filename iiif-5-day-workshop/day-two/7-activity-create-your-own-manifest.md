## Building your own manifest

### Manually Build a Personal Manifest (Method 1)

* Now that we have a template manifest, manually make your own manifest with images from the local image server set up the yesterday.
  * Hint, a important change will be changing the "@id" of the service object associated with the image resource.
  The value of the "@id" should be the path of the image on your image service, without any specific IIIF URL parameters.
* Use the manifest we just worked on together as a template.

### Building a Manifest With a GUI (Method 2)

To start navigate to:

http://iiif.bodleian.ox.ac.uk/manifest-editor/

This is a demo/hosted version of the [iiif-manifest-editor](https://github.com/bodleian/iiif-manifest-editor).

1. Click "New Manifest"
1. Click "Add Canvas" and then click on the "Empty Canvas"

  ![add canvas](../images/add_canvas.png)

1. Now we need to add an image to this canvas. Click "Add Image to Canvas"
1. And we want to use an image we already hosting, so we select the "From info.json URI" option, and input our info.json URI from our local IIIF server. Then click "Submit URI"

  `http://127.0.0.1:8182/iiif/2/eddie.jpg/info.json`

  ![info json uri](../images/info_json_uri.png)

1. We should now have an image in our view!
1. Finally, let's download the manifest, by clicking "Save Manifest" at the top of the page, and "Save"

  Great job! You now have created and downloaded a IIIF Presentation API manifest.
