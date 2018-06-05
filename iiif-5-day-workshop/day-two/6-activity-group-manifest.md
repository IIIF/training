## Activity: Building an Example Group Manifest

So usually all of this goes in one ear and out the other until we start building a manifest.

While in production, manifests can get very big and are usually machine generated there is no substitute for making one by hand.

First, we're going to do this together.

Then, we'll send you off to make your own.

### Group Manifest

* Here I've created a bare minimum manifest for us all to share. But you'll notice, it is very sparse.

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

There really is no substitute for reading the documentations and learning to read them is empowering.

Therefore, in this activity, we want you with a partner to look [IIIF documentation](http://iiif.io/api/presentation/2.1/) and hunt for an answers to the following questions.

When you think you've found the answer, add it to your version of the manifest.

Then we're done we will go through the completed manifests together and compare answers.

1. Give the manifest resource the following title "A custom manifest for IIIF Practice".
1. Provide a short description of this manifest.
1. Indicate that manifest resource has a creative commons 4.0 by-nc-sa license.
1. Tell the image viewer that this resource should be explicitly viewed going from left to right.
1. Create a second canvas, with appropriate ids.
1. Indicate that the image for this second canvas has two facing pages and therefore when a viewer shows it in book view, it should not combine this with an image before or after.
1. Give canvas 1 a title "canvas number 1".
1. Give canvas 2 a title "canvas number 2".
1. Add a second image to canvas 1 with a different image format "image/png".
1. Give this second image a title called "alternative image for canvas 1".
