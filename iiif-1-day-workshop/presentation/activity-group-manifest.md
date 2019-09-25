## Building/modifying a sample manifest

The concepts of the Presentation API can be difficult to grasp until we actually start building a manifest.

Learning by doing: In production systems (such as a digital library's image collection), manifests can get very big and are usually machine generated, but for getting the basic concepts down, there's no substitute for making a manifest "by hand."

First, we're going to do this together.

Then, we'll send you off to make your own manifest (with some computational assistance).

### Shared Manifest

Here I've created a basic manifest for all of us to share. As you'll notice, it is rather terse.

```json

{
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@id": "https://example.com/my-manifest",
  "@type": "sc:Manifest",
  "sequences": [
    {
      "@context": "http://iiif.io/api/presentation/2/context.json",
      "@id": "https://example.com/my-sequence",
      "@type": "sc:Sequence",
      "canvases": [
        {
          "@id": "https://example.com/my-canvas/1",
          "@type": "sc:Canvas",
          "height": 5000,
          "width": 3573,
          "images": [
            {
              "@id": "https://example.com/annotation-1",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "on": "https://example.com/my-canvas/1",
              "resource": {
                "@id": "https://example.com/res/1",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 5000,
                "width": 3573,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "http://image-server.com/image1.tiff",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              }
            }
          ]
        }
      ]
    }
  ]
}

```

There's also no substitute for reading the documentation behind a specification like this and actually using it to build something -- it can be quite empowering!

Therefore, in this activity, we want you with a partner to look at the [IIIF Presentation API documentation](http://iiif.io/api/presentation/2.1/) and hunt for answers to the following questions.

When you think you've found the answer, add it to the manifest above -- you'll need to copy and paste it into a text editor or, better yet, a JSON editor.

When we're done, we'll go through the completed manifests together and compare answers.

1. Give the manifest resource the following title: "A custom manifest for IIIF practice."
1. Provide a short description of this manifest -- the content is up to you.
1. Indicate that the manifest resource has a Creative Commons 4.0 by-nc-sa license.
1. Tell the image viewer that this resource should be viewed from left to right.
1. Add some metadata, give this resource an author
1. Create a second canvas, with appropriate ids.
1. Give canvas 1 a title: "canvas number 1."
1. Give canvas 2 a title: "canvas number 2."
1. Add a second image to canvas 1 with a different image format, specifically "image/png."
1. Give this second image a title: "alternative image for canvas 1."

## Manually build a manifest in a JSON Editor 

Now that we have a sample manifest and understand a bit better how it fits together, let's manually make our own manifest with images from the local image server we set up yesterday.

  * Hint: an important change will be modifying the "@id" of the service object associated with the image resource.
  The value of the "@id" should be the path of the image on your image service, without any specific IIIF URL parameters.

*Short activity:* Using the manifest we just worked on together as a template (and the examples in the Presentation API specification for reference) try to work out which elements you should edit to replace the dummy images from the template with actual images available via the image service we set up yesterday.


