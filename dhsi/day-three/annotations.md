# What are annotations?

Annotations have multiple use cases when used in conjunction with IIIF:

 * Transcribing documents
 * Commenting or analysis of content
 * Highlighting areas of the item like hand written annotations on a printed book
 * Teaching or explaining content
 * Captions for A/V materials

Also as we have seen annotations are fundamental to how a IIIF Manifests work with images and video painted on to a canvas with annotations. 

Annotations in IIIF follow the [W3C annotation model](https://www.w3.org/TR/annotation-model/) and its precursor [Open Annotations](http://www.openannotation.org/). I will go through the differences briefly later but the model is conceptionally similar:

![Web Annotation model](https://www.w3.org/TR/annotation-model/images/intro_model.png)

The annotation is made up of two parts. The body which is the **resource** you want to annotate **on** to something and the target which is the thing you are annotating. Examples of bodies might be:

 * Text transcription of a line
 * Video giving background to a painting
 * IIIF Image painted on to a canvas

A target might be:
 * A whole canvas
 * A part of a canvas (maybe a line in the transcription example above)

## Example Annotation
A simple commenting annotation looks like the following:

```json
{
    "@id": "http://localhost:8887/coin/list/1",
    "@type": "oa:Annotation",
    "motivation": "commenting",
    "resource": {
        "@type": "cnt:ContentAsText",
        "format": "text/plain",
        "chars": "Zeus seated on stool-throne"
    },
    "on": "http://localhost:8887/coin/canvas#xywh=3706,208,522,522"
}
```

This is using Open annotations and the keys map as follows:

 * Body -> resource
 * Target -> on

Other things to take note of are:

 * motivation is `commenting` 
 * Annotations should have an `@id`

In this example the body or resource is the text `Zeus seated on stool-throne`. The canvas id in this example is `http://localhost:8887/coin/canvas` and the `#xywh=3706,208,522,522` denotes we are looking at a rectangle starting `3706` pixels from the left, `208` pixels from the top and with dimensions `522` pixels wide and `522` pixels high. The image mentioned in this annotation is:

![Coin image](https://ronallo.com/iiif-workshop-new/images/coin-side-by-side.png)

## Open Annotations vs Web Annotations
 One of the changes with IIIF version 3.0 is that we are moving to the W3C Web Annotations model. The concepts are the same but the JSON is slightly different. The transcription example now looks like:

```json
{
    "id": "http://localhost:8887/coin/list/1",
    "type": "Annotation",
    "motivation": "commenting",
    "body": {
        "type": "TextualBody",
        "format": "text/plain",
        "chars": "Zeus seated on stool-throne"
    },
    "target": "http://localhost:8887/coin/canvas#xywh=3706,208,522,522"
}
```

The changes are:
 * `@id` becomes `id`
 * `@type` becomes `type` and `oa:Annotation` becomes `Annotation`
 * `resource` becomes `body`
 * `on` becomes `target`
 * The body type changes from `cnt:ContentAsText` to `TextualBody`.
 * Moving of type (oa:Tag) to purpose for individual annotations

 ```json

 {
  "@context": "http://www.w3.org/ns/anno.jsonld",
  "id": "http://example.org/anno15",
  "type": "Annotation",
  "motivation": "bookmarking",
  "body": [
    {
      "type": "TextualBody",
      "value": "readme",
      "purpose": "tagging"
    },
    {
      "type": "TextualBody",
      "value": "A good description of the topic that bears further investigation",
      "purpose": "describing"
    }
  ],
  "target": "http://example.com/page1"
}

 ```

Quite a few changes but it is defiantly clearer to understand.  

## What are annotations lists?

See Specification Chapter:
- [V2 Annotation List](http://iiif.io/api/presentation/2.1/#annotation-list)
- [V3 Annotation Page](https://iiif.io/api/presentation/3.0/#55-annotation-page)

Annotation lists/pages are ways to group annotations and are often at a Canvas or Page level. Examples might be a transcription of a page or the OCR of a single page in annotation format. We will come back to this in the exercises but for now there is an example below. Note annotation lists are usually resolvable which means if you take the `@id` and put it into a Web Browser you should get the annotation list back. 

Additionally, you should never have an Annotation Page/List that has annotations on multiple images. They should only refer to a single image. To tie multiple image annotations together you use the manifest (we will show how to do this later in the workshop) or using an [Annotation Collection](https://iiif.io/api/presentation/3.0/#58-annotation-collection).

```json
{
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@id": "http://localhost:8887/coin/canvas/AnnotationList",
  "@type": "sc:AnnotationList",
  "resources": [
    {
      "@id": "http://localhost:8887/coin/list/1",
      "@type": "oa:Annotation",
      "motivation": "commenting",
      "resource": {
        "@type": "cnt:ContentAsText",
        "format": "text/plain",
        "chars": "Zeus seated on stool-throne"
      },
      "on": "http://localhost:8887/coin/canvas#xywh=3706,208,522,522"
    },
        {
      "@id": "http://localhost:8887/coin/list/1",
      "@type": "commenting",
      "motivation": "sc:painting",
      "resource": {
        "@type": "cnt:ContentAsText",
        "format": "text/plain",
        "chars": "Zeus seated on stool-throne"
      },
      "on": "http://localhost:8887/coin/canvas#xywh=0,208,522,522"
    }
  ]
}
```


