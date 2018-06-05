## Viewing your manifest with IIIF Image Viewer

NOTE: If your viewing images from your local image server, you'll need be running a local instance of mirador or universal viewer

### Viewing in a local Mirador Instance

1. Download the most recent release from here: [https://github.com/ProjectMirador/mirador/releases](https://github.com/ProjectMirador/mirador/releases)
1. Unzip the package
1. In Chrome open the file in the downloaded package called example.html
  * File->Open File->example.html
1. Now drop in your custom manifest

### Viewing Online in UniversalViewer

1. Copy that URL, navigate to [http://universalviewer.io/uv.html?manifest=](http://universalviewer.io/uv.html?manifest=) and past the hosted manifest url after the `=` in the url.

  Hopefully you see your images in the [UniversalViewer](http://universalviewer.io/).

### Viewing Online in Mirador

Let's also view this in [Mirador](projectmirador.org)

1. Navigate to [http://projectmirador.org/demo/](http://projectmirador.org/demo/).
1. Click the `x` box in both windows to close the windows.
1. Hover over the icon to the right of the `x` and click "Replace Object"

  ![mirador replace object](../images/mirador_replace.png)

1. Paste in your manifest url to the text box "Add new object from URL:"
1. Click "Load" - You should see your manifest loaded there. Click on one of your images.

You should see one of your images now in the view next to a van Gogh

![eddie in Mirador](../images/eddie_mirador.png)
