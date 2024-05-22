# Universal Viewer
Documentation on more complex embeddings can be found on the [UV wiki.](https://github.com/UniversalViewer/universalviewer/wiki/UV-Examples)

## Creating a Universal Viewer page
1. Create and open in VSCode a file named `uv.html`.
2. Copy the code below into the file
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Universal Viewer</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/universalviewer@4.0.0/dist/uv.css"
    />
    <script
      type="application/javascript"
      src="https://cdn.jsdelivr.net/npm/universalviewer@4.0.0/dist/umd/UV.js"
    ></script>
    <style>
      #uv {
        width: 924px;
        height: 668px;
      }
    </style>
  </head>
  <body>
    <div class="uv" id="uv"></div>

    <script>
      const data = {
        manifest: "https://wellcomelibrary.org/iiif/b18035723/manifest",
        embedded: true // needed for codesandbox frame
      };

      uv = UV.init("uv", data);
    </script>
  </body>
</html>
```

3. Open the file your browser. `open uv.html`

## Embedding Universal Viewer
1. Create and open in VSCode a file named `uv-embed.html`
2. Copy the code into your browser

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
  </head>
  <body>
    <!DOCTYPE html>
    <html lang="en">
      <body>
        <!-- embeds simple example: https://codesandbox.io/s/uv-simple-example-1p175 -->
        <iframe
          src="https://1p175.csb.app/uv.html#?manifest=https://wellcomelibrary.org/iiif/b18035723/manifest&c=0&m=0&cv=1&config=&locales=en-GB:English (GB),cy-GB:Cymraeg,fr-FR:Français (FR),pl-PL:Polski,sv-SE:Svenska&xywh=190,499,2109,1355&r=0"
          width="560"
          height="420"
          allowfullscreen
          frameborder="0"
        ></iframe>
      </body>
    </html>
  </body>
</html>
```

3. Open the file in your browser. `open uv-embed.html`

## Configuring UV
1. Create a file called uv-config.html
2. Copy code below into file
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Universal Viewer</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/universalviewer@4.0.0/dist/uv.css"
    />
    <script
      type="application/javascript"
      src="https://cdn.jsdelivr.net/npm/universalviewer@4.0.0/dist/umd/UV.js"
    ></script>
    <style>
      #uv {
        width: 924px;
        height: 668px;
      }
    </style>
  </head>
  <body>
    <div class="uv" id="uv"></div>

    <script>
      var urlAdaptor = new UV.IIIFURLAdaptor();

      const data = urlAdaptor.getInitialData({
        manifest: "https://wellcomelibrary.org/iiif/b18035723/manifest",
        embedded: true // needed for codesandbox frame
      });

      uv = UV.init("uv", data);
      urlAdaptor.bindTo(uv);

      // override config using an inline json object
      uv.on("configure", function ({ config, cb }) {
        cb({
          options: { footerPanelEnabled: true }
        });
      });
    </script>
  </body>
</html>
```
3. Open file. `open uv-config.html`
4. Update one of your options to something in this file: https://codesandbox.io/p/sandbox/vibrant-agnesi-7kh4s?file=%2Fuv-config.json
5. Reload the file

## Configuring UV to use browser parameters (optional)
Perhaps you want to have UV load a manifest based on a parameter you pass into the url (uv.html?manifest='urlofmanifest'). This can be set up in UV.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Universal Viewer</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/universalviewer@4.0.0/dist/uv.css"
    />
    <script
      type="application/javascript"
      src="https://cdn.jsdelivr.net/npm/universalviewer@4.0.0/dist/umd/UV.js"
    ></script>
    <style>
      #uv {
        width: 924px;
        height: 668px;
      }
    </style>
  </head>
  <body>
    <div class="uv" id="uv"></div>

    <script>
      var urlAdapter = new UV.IIIFURLAdapter();
      var urlParms = new URLSearchParams(window.location.search);
      const manifest = urlParms.has("manifest") ? urlParms.get("manifest", "") : "https://wellcomelibrary.org/iiif/b18035723/manifest";
      var data = {
        manifest: manifest,
        embedded: true, // needed for codesandbox frame
        collectionIndex:
          urlAdapter.get("c") !== undefined
            ? Number(urlAdapter.get("c"))
            : undefined,
        manifestIndex: Number(urlAdapter.get("m", 0)),
        canvasIndex: Number(urlAdapter.get("cv", 0)),
        rotation: Number(urlAdapter.get("r", 0)),
        rangeId: urlAdapter.get("rid", ""),
        xywh: urlAdapter.get("xywh", ""),
        target: urlAdapter.get("target", "")
      };

      var uv = UV.init("uv", data);

      // normally you would call
      // urlAdapter.bindTo(uv);
      // which then handles events internally
      // but here we're handling them ourselves instead

      uv.on(
        "collectionIndexChange",
        function (collectionIndex) {
          urlAdapter.set("c", collectionIndex);
        },
        false
      );

      uv.on(
        "manifestIndexChange",
        function (manifestIndex) {
          urlAdapter.set("m", manifestIndex);
        },
        false
      );

      uv.on(
        "canvasIndexChange",
        function (canvasIndex) {
          urlAdapter.set("cv", canvasIndex);
        },
        false
      );

      uv.on(
        "rangeChange",
        function (rangeId) {
          urlAdapter.set("rid", rangeId);
        },
        false
      );

      uv.on("targetChange", function (target) {
        urlAdapter.set("xywh", urlAdapter.getFragment("xywh", target));
      });
    </script>
  </body>
</html>

```

