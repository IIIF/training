# Add Structure to a Manifest

It is possible to provide information about the structure of the content within the Manifest. 

For instance, you might want to group Canvases depicting pages of a book by chapter, or of a play by act and scene.

The  [Range](https://iiif.io/api/presentation/2.1/#range) is the Presentation API mechanism for describing this type of structure.

In this exercise we will add Range-based navigation to your Manifest.

## Gather Canvas Identifiers

Find the `@id` of each Canvas you created in your Manifest.  Your structural mapping will reference the Canvases by their `@id`s.

## Create the Structures 

1. Copy this JSON into your Manifest
1. Replace `$YOUR_CANVAS_ID` with the `@id` of your first Canvas
1. Save the file

```
	"structures": [
		{
		  "@id": "http://example.org/iiif/book1/range/r0",
		  "@type": "sc:Range",
		  "label": "Table of Contents",
		  "members": [
				{
				  "@id": "http://example.org/iiif/book1/range/r1",
				  "@type": "sc:Range",
				  "label": "Introduction"
				}
		  ]
		},
		{
			  "@id": "http://example.org/iiif/book1/range/r1",
			  "@type": "sc:Range",
			  "label": "Introduction",
			  "canvases": ["$YOUR_CANVAS_ID"]
		}
	]
```

## Verify in the Universal Viewer

Open the Manifest in the [Universal Viewer](http://universalviewer.io)

Assuming you named your Manifest `manifest.json` , your Manifest URL will be http://127.0.0.1:8887/manifest.json
