# What are annotations

See Specification Chapter:  [http://iiif.io/api/presentation/2.1/#annotation-list](http://iiif.io/api/presentation/2.1/#annotation-list)

## Example
```json
{
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@id": "http://example.org/iiif/book1/list/p1",
  "@type": "sc:AnnotationList",

  "resources": [
    {
      "@type": "oa:Annotation",
      "motivation": "sc:painting",
      "resource":{
        "@id": "http://example.org/iiif/book1/res/music.mp3",
        "@type": "dctypes:Sound",
        "format": "audio/mpeg"
      },
      "on": "http://example.org/iiif/book1/canvas/p1"
    },
    {
      "@type": "oa:Annotation",
      "motivation": "sc:painting",
      "resource":{
        "@id": "http://example.org/iiif/book1/res/tei-text-p1.xml",
        "@type": "dctypes:Text",
        "format": "application/tei+xml"
      },
      "on": "http://example.org/iiif/book1/canvas/p1"
    }
  ]
}
```

## What are annotationsLists?

## Embedding an annotationsLists in a manifest
```json
{
  // Metadata about this canvas
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@id": "http://example.org/iiif/book1/canvas/p1",
  "@type": "sc:Canvas",
  "label": "p. 1",
  "height": 1000,
  "width": 750,
  "thumbnail" : {
    "@id" : "http://example.org/iiif/book1/canvas/p1/thumb.jpg",
    "@type": "dctypes:Image",
    "height": 200,
    "width": 150
  },
  "images": [
    {
      "@type": "oa:Annotation"
      // Link from Image to canvas should be included here, as below
    }
  ],
  "otherContent": [
    {
      // Reference to list of other Content resources, _not included directly_
      "@id": "http://example.org/iiif/book1/list/p1",
      "@type": "sc:AnnotationList"
    }
  ]

}
```

## Using an annotation Store

## Turning on annotations in Mirador

## Caveat: Open Annotations vs Web Annotations



## ACTIVITY: Hands on Practice

* Download Simple Annotation Store
  * TODO: Glen will look into java binary build. Other option is to use http://swib.gdmrdigital.com which is hosted SAS.
* Annotation Practice
  * Download Mirador, Configure to point at Annotation Store
  * Configure to show Annotation Side Panel
  * Create annotations first
  * Export them
  * Adjust manifest to use export annotations Lists instead of annotation end-point
