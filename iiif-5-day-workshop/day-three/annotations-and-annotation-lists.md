# What are annotations

Annotations relate an object ("resource") to another object ("on").
The nature of that relationship can be of various types.
Treating the annotation itself as a resource allows describe and category the nature of that relationship.

## Example Annotation

```json

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

```

## What are annotationsLists?

See Specification Chapter:  [http://iiif.io/api/presentation/2.1/#annotation-list](http://iiif.io/api/presentation/2.1/#annotation-list)

Annotations are simply lists of annotations grouped together.
They can be re-used by any application that wants to retrieve them.

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

That can also be linked to manifests so that a viewer can bring them together in one cohesive experience.

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

## Caveat: Open Annotations vs Web Annotations

