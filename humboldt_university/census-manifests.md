# Deep dive into Census Manifests

In this section we are going to have a look at one of the easyDB manifests to see whats there and possible improvements. We will be using the following Manifest:

https://database.census.de/api/v1/objects/uuid/4b3714d5-6112-47b3-ba6e-97f816e3fa41/format/iiif/v3/manifest.json

while doing this we will also have a look at the item in Mirador so we can see where the content comes from:

https://projectmirador.org/embed/?iiif-content=https://database.census.de/api/v1/objects/uuid/4b3714d5-6112-47b3-ba6e-97f816e3fa41/format/iiif/v3/manifest.json

The first part we will look at is the top level of the manifest particularly the following sections:

```
{
    "@context": "http://iiif.io/api/presentation/3/context.json",
    "id": "https://database.census.de/api/v1/objects/uuid/4b3714d5-6112-47b3-ba6e-97f816e3fa41/format/iiif/v3/manifest.json",
    "label": { },
    "metadata": [ ],
    "provider": [ ],
    "rendering": [ ],
    "requiredStatement": {},
    "seeAlso": [ ],
```

## Label

The label is the title of the item and you can see this prominently displayed in Mirador. In the example item it has the label of 'inv. 405 A v' and the language is set to US English: 
```
"label": {
    "en-US": [
            "inv. 405 A v"
    ]
  },
```
## Metadata

The [metadata section](https://iiif.io/api/presentation/3.0/#metadata) is an open list of metadata about the item. This is shown in the side panel of Mirador and should give the user enough context to understand what they are looking at if they open the Manifest in a viewer which isn't on your site. 

In the example Manifest there are a number of fields but we are going to focus on the first one 'Label Name'. In the metadata section you have a 'label' and a 'value' so for example 'author' maybe a label and the value could be 'Charles Dickens'. Both the label and the value can be translated into multiple languages. In the example below the label has both a English label and a German Label (but note the actual text 'Label Name' is in English for both cases). The value doesn't have a language associated with it so its label as `none`.

The value contains HTML which is valid but not strictly necessary in this case and does lead to some strange formatting in Mirador.  

```
metadata": [
    {
        "label": {
            "de-DE": [
                    "Label Name"
            ],
            "en-US": [
                    "Label Name"
            ]
        },
        "value": {
            "none": [
                    "<span class=\"value\">\n            inv. 405 A v</span>"
            ]
        }
    },
```
The value of Creator in particular would be better formatted as separate fields. Currently it has:

```
<span class="record">
    <span class="value">
        <span class="label">
            <i>Creation Date</i>
        </span>
        <span class="nested">
            <span class="record">
                <span class="value">
                    <span class="label">
                        <i>Date</i>
                    </span>
                    <a href="https://database.census.de/api/v1/objects/uuid/e1ef905b-c756-41f2-8b2e-e9207ed469a3/format/html">post 1504-ante 1536</a>
                </span>
                <span class="value">
                    <span class="label"> 
                        <i>Earliest Date</i>
                    </span>
                    1505-01-01 00:00:00
                </span>
                <span class="value">
                    <span class="label">
                        <i>Latest Date</i>
                    </span>
                    1536-01-05 00:00:00
                </span>
            </span>
        </span>
    </span>
    <span class="value">
        <span class="label">
            <i>Actors Involved in Creation</i>
        </span>
        <span class="nested">
            <span class="record">
                <span class="value">
                    <span class="label">
                        <i>Actor</i>
                    </span>
                    <a href="https://database.census.de/api/v1/objects/uuid/c2112528-5760-4e1b-b2d4-c015ff1d0a2a/format/html">Peruzzi, Baldassare</a>
                </span>
                <span class="value">
                    <span class="label">
                        <i>Actor Role</i>
                    </span>
                    <a href="https://database.census.de/api/v1/objects/uuid/dc1f3d3e-755c-4cbd-b8bd-d69facc885c3/format/html">artist/author</a>
                </span>
            </span>
        </span>
    </span>
</span>
```

For example:
```
   {
        "label": {
            "en-US": [
                    "Creation Date"
            ]
        },
        "value": {
            "none": [
                    "post 1504-ante 1536"
            ]
        }
    }, 
```

## provider

This is where you can link back to the institution that is publishing the resource. In this case the Census website. Unfortunately this property isn't well supported by Viewers currently (see: https://iiif.io/api/cookbook/recipe/0234-provider/)

```
"provider": [
    {
        "id": "https://database.census.de",
        "label": {
            "de-DE": [
                    ""
            ],
            "en-US": [
                    "Census Database"
            ]
        },
        "logo": [
            {
                    "format": "image/jpeg",
                    "height": 720,
                    "id": "https://database.census.de/api/v1/eas/download/215665/870edd2273b3393e9aaea88baeb6b077fb3bfa32472a88218fcfb04f870d5984/original.jpg",
                    "service": {
                        "id": "https://database.census.de/api/v1/eas/iiif/215665/870edd2273b3393e9aaea88baeb6b077fb3bfa32472a88218fcfb04f870d5984/original.jpg",
                        "profile": "level1",
                        "type": "ImageService3"
                    },
                    "type": "Image",
                    "width": 586
            }
        ],
        "type": "Agent"
    }

],
```

## rendering

Rendering is where you advertise different versions of the resource you are currently looking at. Typically these are things like a PDF version of a resource. In this manifest there is a HTML version of the resource. Note if you are linking back to the conical location of the item you would use a `homepage` property. 

```
rendering": [
    {
        "format": "text/html",
        "id": "https://database.census.de/api/v1/objects/uuid/4b3714d5-6112-47b3-ba6e-97f816e3fa41/format/html",
        "label": {
            "da-DK": [
                    "HTML representation"
            ],
            "de-DE": [
                    "HTML Representation"
            ],
            "en-US": [
                    "HTML representation"
            ],
            "fi-FI": [
                    "HTML-esitys"
            ],
            "fr-FR": [
                    "Représentation HTML"
            ],
            "it-IT": [
                    "Rappresentazione HTML"
            ],
            "ru-RU": [
                    ""
            ],
            "sv-SE": [
                    "HTML representation"
            ],
            "uz-UZ": [
                    ""
            ]
        },
        "type": "Text"
    }
],
```

## requiredStatement
In the example this is empty but this is where you would put attribution or mention where the material comes from. You can see a populated version of this rights statement in this [cookbook recipe](https://iiif.io/api/cookbook/recipe/0008-rights/).

```
requiredStatement": {
    "label": {
            "de-DE": [
                ""
            ],
            "en-US": [
                ""
            ]
    },
    "value": {
            "de-DE": [
                ""
            ],
            "en-US": [
                ""
            ]
    }
},
```

## seeAlso

See Also is where you can link out to Machine Readable metadata about the item. This is particularly useful for aggregators like Europeana which requires structured metadata to be able to accept items into their collection.

In the example manifest it links out to some easydb XML metadata. 

```
seeAlso": [
    {
        "id": "https://database.census.de/api/v1/objects/uuid/4b3714d5-6112-47b3-ba6e-97f816e3fa41/format/xml_easydb",
        "type": "Dataset",
        "format": "text/xml",
        "label": {
            "da-DK": [
                    "XML (easydb)"
            ],
            "de-DE": [
                    "XML (easydb)"
            ],
            "en-US": [
                    "XML (easydb)"
            ],
            "fi-FI": [
                    "XML (easydb)"
            ],
            "fr-FR": [
                    "XML (easydb)"
            ],
            "it-IT": [
                    "XML (easydb)"
            ],
            "ru-RU": [
                    ""
            ],
            "sv-SE": [
                    "XML (easydb)"
            ],
            "uz-UZ": [
                    ""
            ]
        }
    }
],
```

## Other sections

The other parts of the manifest are the `items` where the different pages of the manuscript live and the `structures` element which is where you setup a table of contents. You can see the following table of contents for a Vatican manifest:

https://projectmirador.org/embed/?iiif-content=https://digi.vatlib.it/iiif/MSS_Pal.lat.957/manifest.json

The table of contents for the easyDb manifest looks a but confused and doesn't work in mirador. It looks like the metadata has been incorrectly copied into the Structures element. 