# Add Structure to a Manifest

It is possible to provide information about the structure of the content within the Manifest. For instance, you might want to group Canvases depicting pages of a book by chapter, or of a play by act and scene. The [Range](https://iiif.io/api/presentation/3.0/#54-range) is the Presentation API mechanism for describing this type of structure. In this exercise we will add Range-based navigation to your Manifest.

## Gather Canvas Identifiers

Find the `id` of each Canvas you created in your Manifest.  Your structural mapping will reference the Canvases by their `id`s.

## Create the Structures 

1. Copy the JSON below into your Manifest (`manifest.json`)
1. Replace `$YOUR_CANVAS_ID` with the `id` of your first Canvas
1. Save the file

```
"structures": [
    {
        "id": "http://example.org/iiif/book1/range/top",
        "type": "Range",
        "label": "Table of Content",
        "viewingHint": "top",
        "ranges": [
            {
                "id": "http://example.org/iiif/book1/range/intro",
                "type": "Range",
                "label": "Introduction",
                "canvases": [
                    "$YOUR_CANVAS_ID"
                ]
            }
        ]
    }
]
```

## Verify in the Universal Viewer

Open the Manifest in the [Universal Viewer](http://universalviewer.io).  Assuming you named your Manifest `manifest2.json` , your Manifest URL will be http://127.0.0.1:5500/manifest2.json

## Table of contents notes

You can see an example version 3 table of contents in the IIIF cookbook. Ranges recipes include [Table of Contents for Book Chapters](https://iiif.io/api/cookbook/recipe/0024-book-4-toc/) and [Table of Contents for A/V Content](https://iiif.io/api/cookbook/recipe/0026-toc-opera/).

Note the ranges in IIIF version 2 is much more complicated than in Version 3 where ranges are nested inside each other. To see examples of v2 ranges please see this [note](https://glenrobson.github.io/iiif_stuff/toc/). 
