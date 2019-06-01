## Anatomy of a basic manifest

### Basic Types

[http://iiif.io/api/presentation/2.1/#basic-types](http://iiif.io/api/presentation/2.1/#basic-types)

![manifest basic types](http://iiif.io/api/presentation/2.1/img/objects.png)

#### The Manifest

The most fundamental IIIF resource type is the Manifest. In the IIIF world, you'll often hear people talking at length about manifests, but there's nothing particularly magical about them.

A manifest is a resource that contains or wraps most of the references and data that a viewer will need to present images in a meaningful way.

The IIIF specficiation's definition of a manifest reads as follows:

> Manifest:
The overall description of the structure and properties of the digital representation of an object. It carries information needed for the viewer to present the digitized content to the user, such as a title and other descriptive information about the object or the intellectual work that it conveys. Each manifest describes how to present a single object such as a book, a photograph, or a statue. [http://iiif.io/api/presentation/2.1/#overview-manifest](http://iiif.io/api/presentation/2.1/#overview-manifest)

A manifest is most typically encountered as a file that lives on the internet somewhere.
That file can be given to any IIIF compliant viewer. This viewer, because it knows what to do with data structured according to the IIIF rules, can do stuff with that information; specifically it can provide a viewing experience.

So what kinds of resources does a manifest contain? Well, potentially a lot of them, but let's focus on the few central resource types we'll need to get started.

#### Sequences

As the specification states, a manifest must contain at least one sequence (helfully listed after the "sequences" keyword) that sepcify an order for the individual image resources in the manifest.

The specification describes a sequence like this:

>The order of the views of the object. Multiple sequences are allowed to cover situations when there are multiple equally valid orders through the content, such as when a manuscript’s pages are rebound or archival collections are reordered. [http://iiif.io/api/presentation/2.1/#overview-sequence](http://iiif.io/api/presentation/2.1/#overview-sequence)

In most manifests, you will find only one object within the sequences array. Note also that sequences are being removed in the next major iteration of the IIIF Presentation API (v3.0), replaced by a property called "items."

For the moment, what is important is that an individual sequence (or "item") encompasses a list of "canvases."

#### A Canvas

The specification defines a canvas as follows:

>Canvas: A virtual container that represents a page or view and has content resources associated with it or with parts of it. The canvas provides a frame of reference for the layout of the content. The concept of a canvas is borrowed from standards like PDF and HTML, or applications like Photoshop and Powerpoint, where the display starts from a blank canvas and images, text and other resources are “painted” on to it. [http://iiif.io/api/presentation/2.1/#overview-canvas](http://iiif.io/api/presentation/2.1/#overview-canvas)

Why not just call this an image?

The canvas is an important abstraction. In most advanced viewers, it is not enough just to see the image; we want do more things with that image like adding notes, translations, links, and references that pertain to various areas of an image.

But think for a minute: what do these various kinds of notes (aka "annotations") actually point to? If I want to note than an object, say a vase, appears in an image, am I making this note about a specific set of pixels in a color JPEG image with specific dimensions, or about a black-and-white PNG image with a different set of dimensions?  Generally, it's neither; instead I'm commenting on a conceptual "image idea" that can be digitally encoded and represented in lots of different ways. I want this annotation to be applicable to any possible representation of the image, whether it's in the form of a giant TIFF or a small PNG thumbnail. To do this, I need a higher level of abstraction. This abstraction is the Canvas.

Annotations can be associated with a canvas, and then different image resources can be interchangeably associated with that same canvas. In each case, the annotation's coordinates and content remain applicable to each image.

#### Content Resources

The last step that our presentation data model requires is the association of a "content" resource with a canvas. The content is most often an image, but it can be other things, like text, or even a sound recording.

Content resources are associated with a canvas through "privileged annotation," which will be discussed more tomorrow. [http://iiif.io/api/presentation/2.1/#overview-content](http://iiif.io/api/presentation/2.1/#overview-content)
