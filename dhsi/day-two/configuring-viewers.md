## Configuring Viewers

Now that we've spent the day learning about the IIIF Presentation API and creating our own manifests, we thought it would fun to do a deeper dive on the use of IIIF Image Viewers. 

Specifically, we want to show you how we can not only add our manifests to existing viewers, but we can actually highly customize these viewers in a way tailored to our specific needs. 

For example:

* If you're running museum exhibit, you might want a viewer that provides a guided curation of specific images and limits how the user can interact with the collection
* If you're building a research environment, you might want to use the viewer different to allow users to control every aspect of their environment.
* If you're trying to illustrate a research outcome, you might want to bring the users to a very specific place within a set of images.

There are many options here. We're going to focus on two highly customizable viewers: Mirador and Universal Viewer. First, we're going to look at how to embed a viewer in your own project (to do this, we'll continue to use or "Custom Image Viewers" projects). Then we'll walk through several of the configuration option. Then we'll turn this into a work period, where you can start embedding a viewer into your project and adjust the configuration settings as needed. We'll come around and help you customize your project any way you want.

## Viewers not covered
Tify, IIIF Curation Viewer and Diva.js all have videos and demo pages to play with at [https://iiif.io/guides/using_iiif_resources/#tools-for-viewing-manifests](https://iiif.io/guides/using_iiif_resources/#tools-for-viewing-manifests).

## Mirador

### Embedding Mirador

Embedding mirador within a webpage (either as the entire web page or a component within the web page) is pretty easy.

As you can see the example below, you just need to reference the Mirador code library and then create a `<div>` where Mirador can be instantiated.



```html
<html>
  <head>
    <script src="https://unpkg.com/mirador@latest/dist/mirador.min.js"></script>
  </head>
  <body>
<div id="mirador"></div>
</body>
</html>
```

If you're looking to embed mirador as a smaller piece within another website there multiple ways do this. 

One of the simplest ways to do this is to embed the mirador page as an `<iframe>` within your larger page.

Consider how Stanford library employs this method for some of their catalogue pages. 

[https://exhibits.stanford.edu/black-at-stanford/catalog/vp553qk8514](/Users/jcwitt/Projects/iiif-projects/training/dhsi/day-two/miradoriframe-example.html)

Here's what such an iframe embed might look like: 

```html
<html>
  <head>
  </head>
  <body>
    <div style="width: 1000px; margin: auto;">
      <iframe style="width: 1000px; margin-top: 10vh; height: 80vh" src="https://embed.stanford.edu/iframe?url=https://purl.stanford.edu/vp553qk8514&_v=1716914492&hide_title=true"/>
    </div>
  </body>
</html>
```

But you'll notice that because they've restricted the window size of the mirador view port, they've also decided to "configure" mirador in some specific ways:

* they configured the viewer to take the viewer directly to a specific canvas, rather than to the manifest loading page
* they closed by default some of the information panels in order to remove any unnecessary visual clutter

These options can be configured using the Mirador Configuration Options.

### Configuring Mirador

A full and very long set of configuration options is available [here](https://github.com/ProjectMirador/mirador/blob/master/src/config/settings.js)

Using these settings, you can control 
* how Mirador opens
* the color scheme
* institutional branding

Before we break out into a work period, have a look one example of how I've implemented some customizations.

[https://codepen.io/jeffreycwitt/pen/vYRGdeL](https://codepen.io/jeffreycwitt/pen/vYRGdeL)

Let's look closer at some of the configuration options implemented here:


```html
<html>
  <head>
    <script src="https://unpkg.com/mirador@latest/dist/mirador.min.js"></script>
    <script>

var miradorInstance = Mirador.viewer({
  id: "mirador",
  selectedTheme: 'dark', // i've chosen the light theme, you could try dark
  window: {
    defaultView: "scroll", 
    sideBarOpen: true, // try changing to false
    sideBarPanel: "canvas",
    views: [
      { key: "single", behaviors: ["individuals", "paged"] },
      { key: "book", behaviors: ["individuals"] },
      { key: "scroll", behaviors: ["continuous"] },
      { key: "gallery" }
    ]
  },
  windows: [
    // {
    //   manifestId: "https://scta.info/iiif/plaoulcommentary/sorb/manifest", //add a manifest here that you want to miror to display onload
    //   canvasId: "http://scta.info/iiif/sorb/canvas/S2r" //add a canvas here within the above manifest that you want mirador to open on load
    // },
    {
      manifestId: "https://iiif.harvardartmuseums.org/manifests/object/299843",
      canvasId: "https://iiif.harvardartmuseums.org/manifests/object/299843/canvas/canvas-18737483"
    }
    // if you want into open another canvas, add another block here
  ],
  // list any of the manifest you want your mirador instance to load; any manifest listed above must be included below
  catalog: [
    {
      manifestId: "https://iiif.harvardartmuseums.org/manifests/object/299843"
    },
    {
      manifestId: "https://scta.info/iiif/plaoulcommentary/sorb/manifest"
    }
    // add more manifests here if desired
  ]
});
      </script>
  </head>
  <body>
<div id="mirador"></div>
</body>
</html>
```

Here's an involved [guide on how to "theme mirador"](https://github.com/ProjectMirador/mirador/wiki/M3-Theming-Mirador)

And here are [two example configuration recipes](https://github.com/ProjectMirador/mirador/wiki/M3-Configuration-Recipes)


## Work Period

For this exercise, imagine that your in charge of gallery exhibit kiosk or a library digital catalogue page. 

Your job is to create Mirador viewer instance into your `myViewer` that is in "kiosk" mode

* It should open to a specific image/canvas within a manifest
* Users should be limited to zooming and exploring this image only
* Pop up informational windows should be disabled
* The color and font theming should match your institutional branding

If you can get this working, then we can working on serving this page of http, and "embedding" it within your `myViewer` project via the `<iframe>` method.