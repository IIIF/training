# Adding annotations to a manifest
In order for **SOME** viewers to be able to view annotations you need to add them to your manifest. This is done manually. 

# How to link your manifest to annotations
Open up your manifest in VS Code. 

Then find the canvas your annotations point to then add the following:

## For V2 Manifest
```json
"otherContent": [
    {
        "@id": "https://iiif-test.github.io/BLJan2022/annotations/ce1d6509b5ec52275691847dd08d36b5.json",
        "@type": "sc:AnnotationList",
        "label": "My fantastic annotations"
    }
]
```

## For V3 Manifest
```json
"annotations": [
    {
      "id": "https://iiif.io/api/cookbook/recipe/0269-embedded-or-referenced-annotations/annotationpage.json",
      "type": "AnnotationPage"
    }
]
```

after the images array. Replace the URL after the `@id` with the URL of your annotation. A full V2 canvas example is below:

```json
{
    "@id": "http://dams.llgc.org.uk/iiif/2.0/4004562/canvas/4004563.json",
    "@type": "sc:Canvas",
    "label": "1r",
    "height": 5584,
    "width": 3744,
    "images": [
        {
            "@id": "http://dams.llgc.org.uk/iiif/2.0/4004562/annotation/4004563.json",
            "@type": "oa:Annotation",
            "motivation": "sc:painting",
            "resource": {
                "@id": "http://dams.llgc.org.uk/iiif/2.0/image/4004563/full/1024,/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "service": {
                    "@context": "http://iiif.io/api/image/2/context.json",
                    "@id": "http://dams.llgc.org.uk/iiif/2.0/image/4004563",
                    "profile": "http://iiif.io/api/image/2/level1.json"
                },
                "height": 5584,
                "width": 3744
            },
            "on": "http://dams.llgc.org.uk/iiif/2.0/4004562/canvas/4004563.json"
        }
    ],
    "otherContent": [
        {
            "@id": "https://iiif-test.github.io/BLJan2022/annotations/ce1d6509b5ec52275691847dd08d36b5.json",
            "@type": "sc:AnnotationList",
            "label": "My fantastic annotations"
        }
    ]
},

```

Save the manifest. Watch out for JSON typing errors. Common JSON issues include:

 * Make sure that all the brackets match up
 * Lines that are not the last line in a list or array must have a `,` at the end of the line. 

To make this easier you may want to use a JSON aware editor like VS Code which will tell you if you are missing brackets or commas. You can also copy and paste your JSON to:

https://jsonlint.com/

which will tell you if the JSON is valid and if not where the error is. 
