## Activity: Building/modifying a sample manifest

The concepts of the Presentataion API can be difficult to grasp until we actually start building a manifest.

Learning by doing: In production systems (such as a digital library's image collection), manifests can get very big and are usually machine generated, but for getting the basic concepts down, there's no substitute for making a manifest "by hand."

First, we're going to do this together.

Then, we'll send you off to make your own manifest (with some computational assistance).

### Group Manifest

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
1. Create a second canvas, with appropriate ids.
1. Indicate that the image for this second canvas has two facing pages and therefore when a viewer shows it in book view, it should not combine the image with an image before or after it.
1. Give canvas 1 a title: "canvas number 1."
1. Give canvas 2 a title: "canvas number 2."
1. Add a second image to canvas 1 with a different image format, specifically "image/png."
1. Give this second image a title: "alternative image for canvas 1."
