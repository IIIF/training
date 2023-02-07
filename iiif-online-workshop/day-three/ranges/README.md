# Add Structure to a Manifest

It is possible to provide information about the structure of the content within the Manifest. For instance, you might want to group Canvases depicting pages of a book by chapter, or of a play by act and scene. The [Range](https://iiif.io/api/presentation/2.1/#range) is the Presentation API mechanism for describing this type of structure. In this exercise we will add Range-based navigation to your Manifest.

## Gather Canvas Identifiers

Find the `@id` of each Canvas you created in your Manifest.  Your structural mapping will reference the Canvases by their `@id`s.

## Create the Structures 

1. Copy the JSON below into your Manifest (`manifest.json`)
1. Replace `$YOUR_CANVAS_ID` with the `@id` of your first Canvas
1. Save the file

```
"structures": [
    {
        "@id": "http://example.org/iiif/book1/range/top",
        "@type": "sc:Range",
        "label": "Table of Content",
        "viewingHint": "top",
        "ranges": [
            "http://example.org/iiif/book1/range/intro"
        ]
    },
    {
        "@id": "http://example.org/iiif/book1/range/intro",
        "@type": "sc:Range",
        "label": "Introduction",
        "canvases": [
            "$YOUR_CANVAS_ID"
        ]
    }
]
```

## Verify in the Universal Viewer

Open the Manifest in the [Universal Viewer](http://universalviewer.io).  Assuming you named your Manifest `manifest.json` , your Manifest URL will be http://127.0.0.1:5500/manifest2.json

## Table of contents in notes

Note Table of Contents in IIIF version 2, as is discussed in this course has been simplified in version 3. You can see an example version 3 table of contents in a book [here](https://iiif.io/api/cookbook/recipe/0024-book-4-toc/) and in a AV resource [here](https://iiif.io/api/cookbook/recipe/0026-toc-opera/).

The table of contents (TOC) shown above should work in the latest copy of the Universal Viewer and Mirador but the version 2 of the specification allows a number of different ways to structure a table of contents. For a more in-depth investigation on the ways you can work with structures, including a multi level hierarchical table of contents please see this [note](https://glenrobson.github.io/iiif_stuff/toc/). 
