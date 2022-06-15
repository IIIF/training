# Annotations

There are many uses of annotations they can be:

 * Transcribing documents either by hand or using automated methods like [Transkribus](https://readcoop.eu/transkribus/) for hand written material or OCR for printed works. 
 * Created as part of a Crowdsourcing project
 * Created through research for example tagging common features in art works or identifying hand written annotations in a printed book
 * Created for teaching or explaining content.
 * A way of discussing content maybe in a classroom setting as an assignment 

Annotations in IIIF follow the [W3C annotation model](https://www.w3.org/TR/annotation-model/) and its precursor [Open Annotations](http://www.openannotation.org/). I won't go into too much detail but the overall structure looks as follows:

![Web Annotation model](https://www.w3.org/TR/annotation-model/images/intro_model.png)

Where:

 * The annotation contains links to the body and target and metadata like an ID and motivation (the reason for the annotation e.g. commenting, transcribing etc.)
 * The body is the content of the annotation for example a tag or the text of a line
 * The target is what the annotation is pointing to for example a page in a book or a region of an artwork.

As with a Manifest this is also encoded in JSON and you can see an example below:

```
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

For the following image:

![Coin image](https://ronallo.com/iiif-workshop-new/images/coin-side-by-side.png)

The other terminology we may come across is an Annotation List or Annotation Page in IIIF 3.0. These are as you might expect are a list of annotations and are generally at a page level. 
