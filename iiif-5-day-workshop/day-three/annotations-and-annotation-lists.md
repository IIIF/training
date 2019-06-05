# What are annotations

Annotations relate an object ("resource") to another object ("on").
The nature of that relationship can be of various types.
Treating the annotation itself as a resource allows describe and category the nature of that relationship.

For more, we'll go through the slides here:
https://slides.com/hadro/dhsi-workshop-day-3-annotations

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
  "@id": "http://localhost:8887/coin/canvas/AnnotationList",
  "@type": "sc:AnnotationList",
  "resources": [
    {
      "@id": "http://localhost:8887/coin/list/1",
      "@type": "oa:Annotation",
      "motivation": "sc:painting",
      "resource": {
        "@type": "cnt:ContentAsText",
        "format": "text/plain",
        "chars": "Zeus seated on stool-throne"
      },
      "on": "http://localhost:8887/coin/canvas#xywh=3706,208,522,522"
    },
        {
      "@id": "http://localhost:8887/coin/list/1",
      "@type": "oa:Annotation",
      "motivation": "sc:painting",
      "resource": {
        "@type": "cnt:ContentAsText",
        "format": "text/plain",
        "chars": "Zeus seated on stool-throne"
      },
      "on": "http://localhost:8887/coin/canvas#xywh=3706,208,522,522"
    }
  ]
}
```

That can also be linked to manifests so that a viewer can bring them together in one cohesive experience.

## Caveat: Open Annotations vs Web Annotations

## Annotations Exercise

Go on to the [Annotations Exercise](exercise.html) to try out some cases where annotations come into play.

<<<<<<< HEAD
=======
## Using an annotation Store

What is an annotation store? An annotation store is just a database designed to ingest data structured according to the Open Annotations (or Web Annotations) specifications.

There are lots of them annotation stores. You can make your own or use one that has been made by someone else.


## Local Storage as an annotation store

Because an annotation store is nothing other than place to store raw data,
even your browser's local storage can function as an annotation store.
