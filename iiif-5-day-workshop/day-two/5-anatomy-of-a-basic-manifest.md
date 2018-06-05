## Anatomy of a Basic Manifest

### Basic Types

[http://iiif.io/api/presentation/2.1/#basic-types](http://iiif.io/api/presentation/2.1/#basic-types)

![manifest basic types](http://iiif.io/api/presentation/2.1/img/objects.png)

#### The manifest

The most fundamental resource type is the Manifest. In the IIIF world you will often here people talking about "manifests".

But there is nothing too magical about a manifest.

A manifest is a resource that contains or wraps most of the resources and data that a viewer will need.

The IIIF Spec Definition reads as follows:

> Manifest
The overall description of the structure and properties of the digital representation of an object. It carries information needed for the viewer to present the digitized content to the user, such as a title and other descriptive information about the object or the intellectual work that it conveys. Each manifest describes how to present a single object such as a book, a photograph, or a statue. [http://iiif.io/api/presentation/2.1/#overview-manifest](http://iiif.io/api/presentation/2.1/#overview-manifest)

A manifest is most typically encountered as a file that lives on the internet somewhere.
That file can be given to any IIIF compliant viewer. This viewer, because it know what to do with data structured according to the IIIF rules, can do stuff with that information; specifically it can provide a viewing experience.

So what kind of resources does a manifest contain? Well lots, but let's focus on the main one's we need to get started.

#### Sequences

A manifest contains a "sequences" property which contains an array of sequences that order individual image resources.

The Spec States:

>The order of the views of the object. Multiple sequences are allowed to cover situations when there are multiple equally valid orders through the content, such as when a manuscript’s pages are rebound or archival collections are reordered. [http://iiif.io/api/presentation/2.1/#overview-sequence](http://iiif.io/api/presentation/2.1/#overview-sequence)

In most manifests, you will find only one object within the sequences array.

NOTE: Sequences is removed in the 3.0 spec and is replaced by a property called "items"

For the moment, what is important is that an individual sequence (or in 3.0 the items property) takes a list of "canvases"

#### Canvas

The Spec defines a canvas as follows:

Canvas

>A virtual container that represents a page or view and has content resources associated with it or with parts of it. The canvas provides a frame of reference for the layout of the content. The concept of a canvas is borrowed from standards like PDF and HTML, or applications like Photoshop and Powerpoint, where the display starts from a blank canvas and images, text and other resources are “painted” on to it. [http://iiif.io/api/presentation/2.1/#overview-canvas](http://iiif.io/api/presentation/2.1/#overview-canvas)

Why not just call this the image?

The canvas is an important abstraction. In most advanced viewers, it is not enough just to see the image, we want do things with that image. We want make notes, translations, links, references that connect to various areas of an image.

But think for a minute. To what do these various kinds of annotations apply? When I make a note about a figure in an image, am I making a annotation about of set of bits unique to a jpeg image with fixed dimensions, or to a black and white .png image with a different set of dimensions? Generally no. I'm making an annotation about part of an "image idea" that can be digitally encoded and represented in a lots of different ways. If I want my annotation to show up when I'm viewing a .tiff, .jpg, .png, all with wildly different dimensions, I need a higher level of abstraction. This abstraction is the Canvas.

Annotations can be associated with a canvas, and then different image resources can be interchangeably associated to that same canvas. In each case, the annotation coordinates and content remain applicable to each image.

#### The Content Resources

The last step requires is this association of an image resource with a canvas.

>Content resources such as images or texts that are associated with a canvas. [http://iiif.io/api/presentation/2.1/#overview-content](http://iiif.io/api/presentation/2.1/#overview-content)

This is done through privileged annotation.
