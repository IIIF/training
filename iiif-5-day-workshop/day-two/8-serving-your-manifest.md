## Serve your manifest from a web service

### Method 1: Serve your manifest locally

* If you have the Web Server for Chrome running on your computer, simply drop the manifest into its root folder (`dhsi2019/`). The manifest should be accessible at http://127.0.0.1:8887/manifest.json
* Alternative: Use the HTTP server for node (this requires that npm is installed on your computer): 
  * Install http-server, `npm install -g http-server`, or live-server, `npm install -g live-server`
  * Then in the directory with the manifest, run `http-server --cors` or `live-server --cors`

### Method 2: Serve your manifest via an online service

* Using myjson:
  1. Copy and paste the contents of the manifest into http://myjson.com/
  1. Click "Save"; the link will be listed under "URI to access this JSON directly."

* Using Github gist:
  1. Navigate to https://gist.github.com
  1. Drag and drop your `manifest.json` file into the window and click "Create Secret Gist" (or public if you like, it doesn't matter).

    ![gist](../images/gist.png)

  1. After the gist is created, click the "Raw" button to get the raw file url.
