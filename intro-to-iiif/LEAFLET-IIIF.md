# Leaflet-IIIF

[Leaflet-IIIF](https://github.com/mejackreed/Leaflet-IIIF) is a JavaScript library for creating zoomable views of IIIF images. It is a plugin for the popular library [LeafletJS](http://leafletjs.com/).

Here is an example:

<iframe src="https://mejackreed.github.io/Leaflet-IIIF/examples/example.html" frameborder="0" width="100%" height="500px"></iframe>

Leaflet-IIIF allows you to use the expressivity of Leaflet and its plugin ecosystem all at the same time to display IIIF images.

Let's take a look at that Leaflet-IIIF instance and how it works.


<iframe width="100%" height="300" src="//jsfiddle.net/mejackreed/r4gucLb8/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

The Leaflet-IIIF tilelayer is a subclass of [L.Tilelayer](http://leafletjs.com/reference.html#tilelayer) and so it in inherits many of the properties of this class, including instantiation options, methods and events. Not all of these are relevant (or work :))

Some of the reasons why you would use Leaflet-IIIF:

 - It is lightweight (by far the lightest weight IIIF Image API library)
 - Works great on mobile
 - Accessibility minded
 - A huge [community of plugins](http://leafletjs.com/plugins) to integrate with

A drawback of the plugin, is that there is some functionality that is not yet implemented. But it mostly handles the 95% use cases.

[More examples of fun stuff you can do with Leaflet-IIIF](https://bl.ocks.org/mejackreed).
