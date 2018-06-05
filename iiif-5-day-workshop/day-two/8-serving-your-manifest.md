## Serve your manifest

### Method 1: Serve your Manifest Locally

* Serving manifest locally
  * Install http-server, `npm install -g http-server`, or live-server, `npm install -g live-server`
  * Then in the directory with the manifest, run `http-server --cors` or `live-server --cors`

### Method 2: Serve Your Manifest with github gist

1. Navigate to https://gist.github.com

1. Drag and drop your `manifest.json` file into the window and click "Create Secret Gist" (or public if you like, it doesn't matter).

  ![gist](../images/gist.png)

1. After the gist is created, click the "Raw" button to get the raw file url.
