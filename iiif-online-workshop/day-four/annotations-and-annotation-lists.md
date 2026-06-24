# What are annotations?

We have seen many examples of annotations during the course and they have many uses including:

 * Transcribing documents
 * Commenting or analysis of content
 * Highlighting areas of the item like hand written annotations on a printed book
 * Teaching or explaining content (Storiiies and Exhibit)

and we also saw yesterday that annotations are fundamental to how a IIIF Manifests work with images and video painted on to a canvas with annotations. 

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

Things to take note of are:

 * motivation is `commenting` 
 * Annotations should have an `id`

In this example the body or resource is the text `Zeus seated on stool-throne`. The canvas id in this example is `http://localhost:8887/coin/canvas` and the `#xywh=3706,208,522,522` denotes we are looking at a rectangle starting `3706` pixels from the left, `208` pixels from the top and with dimensions `522` pixels wide and `522` pixels high. The image mentioned in this annotation is:

![Coin image](https://ronallo.com/iiif-workshop-new/images/coin-side-by-side.png)

## Caveat: Open Annotations vs Web Annotations

For this workshop we will be focusing on Web Annotations which are part of IIIF version 3. In IIIF version 2 the precursor Open Annotations was used. The concepts are the same but the JSON is slightly different. The transcription example using Open Annotation looks like:

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

The changes are:
 * `id` becomes `@id` 
 * `type` becomes `@type` and `Annotation` becomes `oa:Annotation`
 * `body` becomes `resource` 
 * `target` becomes `on` 
 * The body type changes from `TextualBody` to `cnt:ContentAsText`.

Quite a few changes but Web Annotation is clearer to understand.  

## Grouping annotations

In IIIF version 3 we use [AnnotationPages](https://iiif.io/api/presentation/3.0/#55-annotation-page) to group all the annotations for a single canvas together. These can be linked into [AnnotationCollections](https://iiif.io/api/presentation/3.0/#58-annotation-collection) to group together annotations from multiple pages which might form a translation of the text of a book. Note annotation pages are usually resolvable which means if you take the `id` and put it into a Web Browser you should get the annotation page back. 

An example AnnotationPage is shown below:

```json
{
  "@context": "http://iiif.io/api/presentation/3/context.json",
  "id": "http://localhost:8887/coin/canvas/AnnotationPage",
  "type": "AnnotationPage",
  "items": [
    {
      "id": "http://localhost:8887/coin/anno/1",
      "type": "Annotation",
      "motivation": "commenting",
      "body": {
        "type": "TextualBody",
        "format": "text/plain",
        "chars": "Zeus seated on stool-throne"
      },
      "target": "http://localhost:8887/coin/canvas#xywh=3706,208,522,522"
    },
        {
      "id": "http://localhost:8887/coin/anno/2",
      "type": "Annotation",
      "motivation": "commenting",
      "body": {
        "type": "TextualBody",
        "format": "text/plain",
        "chars": "Zeus seated on stool-throne"
      },
      "target": "http://localhost:8887/coin/canvas#xywh=0,208,522,522"
    }
  ]
}
```

IIIF Version 2 used an [AnnotationList](http://iiif.io/api/presentation/2.1/#annotation-list) as a way to group annotations and are often at a Canvas or Page level. Examples might be a transcription of a page or the OCR of a single page in annotation format. We will come back to this in the exercises but for now there is an example below. Note annotation lists are usually resolvable which means if you take the `@id` and put it into a Web Browser you should get the annotation list back. 




