# Ranges

Ranges are great way to provide a navigational aid through your manifest. (It's also a great way for us to continue getting familiar with the JSON and editing the manifest directly.)

IIIF Viewers are designed to understand these ranges and display navigational aids (often a side panel "table of contents" like view)

Here's an example.

![alt text](imgs/range-image.png)

Once you know what a manifest and a canvas is, adding ranges is not too complicated. 

Presentation API specification on [Ranges](https://iiif.io/api/presentation/3.0/#54-range) offers a clear statement about how to get started.

> "Ranges must have URIs and they should be HTTP(S) URIs. Top level Ranges are embedded or externally referenced within the Manifest in a structures property. These top level Ranges then embed or reference other Ranges, Canvases or parts of Canvases in the items property."

So to add a range or series of ranges, we add a `structures` properties on the `manifest object` like so:

```json

{
  "@context": "http://iiif.io/api/presentation/3/context.json",
  "id": "https://example.org/iiif/book1/manifest",
  "type": "Manifest",
  // Metadata here ...

  "items": [
    // Canvases here ...
  ],

  "structures": [
    // your ranges go here
  ]
}
```

Inside the `structures` array is a serious of `range` objects. Each range object can point to a sequences canvases or point to `sub-ranges` that themselves may point to a sequences of canvases or further sub ranges. 

As always, there are some minor differences between how we do this in a v2 and v3 manifest, but the main idea is the same. 

### v2 Example

```json
    "structures": [{
      "@id": "https://scta.info/iiif/plaoulcommentary/reims/range/r1",
      "@type": "sc:Range",
      "label": "Sentences Commentary",
      "viewingHint": "top",
      "ranges": [
        "https://scta.info/iiif/plaoulcommentary/reims/range/r1-1",
        "https://scta.info/iiif/plaoulcommentary/reims/range/r1-2",
        "https://scta.info/iiif/plaoulcommentary/reims/range/r1-3",
        "https://scta.info/iiif/plaoulcommentary/reims/range/r1-4",
        "https://scta.info/iiif/plaoulcommentary/reims/range/r1-5",
        "https://scta.info/iiif/plaoulcommentary/reims/range/r1-6",
        "https://scta.info/iiif/plaoulcommentary/reims/range/r1-7",
        "https://scta.info/iiif/plaoulcommentary/reims/range/r1-8"
      ],
    },
    {
      "@id": "https://scta.info/iiif/plaoulcommentary/reims/range/r1-1",
      "within": "https://scta.info/iiif/plaoulcommentary/reims/range/r1",
      "@type": "sc:Range",
      "label": "Principia",
      "ranges": [
        "https://scta.info/iiif/plaoulcommentary/reims/range/r1-1-1"
      ],
    },
    {
      "@id": "https://scta.info/iiif/plaoulcommentary/reims/range/r1-1-1",
      "within": "https://scta.info/iiif/plaoulcommentary/reims/range/r1-1",
      "@type": "sc:Range",
      "label": "Principium IV",
      "canvases": [
        "http://scta.info/iiif/reims/canvas/R197v",
        "http://scta.info/iiif/reims/canvas/R198r",
        "http://scta.info/iiif/reims/canvas/R198v",
        "http://scta.info/iiif/reims/canvas/R199r",
        "http://scta.info/iiif/reims/canvas/R199v",
        "http://scta.info/iiif/reims/canvas/R200r",
        "http://scta.info/iiif/reims/canvas/R200v",
        "http://scta.info/iiif/reims/canvas/R201r"
      ]
    }
  ]
```
  
  Here's a live example manifest that includes this full range: [https://scta.info/iiif/plaoulcommentary/reims/manifest](https://scta.info/iiif/plaoulcommentary/reims/manifest)

  ### v3 Example

Below I've modified the above example, to comply with the v3 changes. (Can you spot the changes??!!!)

  ```json
    "structures": [{
      "id": "https://scta.info/iiif/plaoulcommentary/reims/range/r1",
      "type": "Range",
      "label": "Sentences Commentary",
      "items": [
        {
          "id": "https://scta.info/iiif/plaoulcommentary/reims/range/r1-1",
          "type": "Range"
        },
        {
          "id": "https://scta.info/iiif/plaoulcommentary/reims/range/r1-2",
          "type": "Range"
        },
        {
          "id": "https://scta.info/iiif/plaoulcommentary/reims/range/r1-3",
          "type": "Range"
        },
        {
          "id": "https://scta.info/iiif/plaoulcommentary/reims/range/r1-4",
          "type": "Range"
        },
        {
          "id": "https://scta.info/iiif/plaoulcommentary/reims/range/r1-5",
          "type": "Range"
        },
        {
          "id": "https://scta.info/iiif/plaoulcommentary/reims/range/r1-6",
          "type": "Range"
        },
        {
          "id": "https://scta.info/iiif/plaoulcommentary/reims/range/r1-7",
          "type": "Range"
        },
        {
          "id": "https://scta.info/iiif/plaoulcommentary/reims/range/r1-8",
          "type": "Range"
        },
      ],
    },
    {
      "id": "https://scta.info/iiif/plaoulcommentary/reims/range/r1-1",
      "type": "Range",
      "label": "Principia",
      "ranges": [
        {
          "id": "https://scta.info/iiif/plaoulcommentary/reims/range/r1-1-1",
          "type": "Range"
        }
      ],
    },
    {
      "id": "https://scta.info/iiif/plaoulcommentary/reims/range/r1-1-1",
      "type": "Range",
      "label": "Principium IV",
      "items": [
        {
          "id": "http://scta.info/iiif/reims/canvas/R197v",
          "type": "Canvas"
        },
        {
        "id": "http://scta.info/iiif/reims/canvas/R198r",
        "type": "Canvas"
        },
        {
        "id": "http://scta.info/iiif/reims/canvas/R198v",
        "type": "Canvas"
        },
        {
        "id": "http://scta.info/iiif/reims/canvas/R199r",
        "type": "Canvas"
        },
        {
        "id": "http://scta.info/iiif/reims/canvas/R199v",
        "type": "Canvas"
        },
        {
        "id": "http://scta.info/iiif/reims/canvas/R200r",
        "type": "Canvas"
        },
        {
        "id": "http://scta.info/iiif/reims/canvas/R200v",
        "type": "Canvas"
        },
        {
        "id": "http://scta.info/iiif/reims/canvas/R201r",
        "type": "Canvas"
        }
      ]
    }
  ]
```