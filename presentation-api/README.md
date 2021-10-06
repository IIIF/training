# IIIF Presentation API

<iframe width="560" height="315" src="https://www.youtube.com/embed/2mFbzjjK6ns" title="Original Zoom Presentation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In the previous session we discussed the Image API and the three different methods of implementing:

 * IIIF using hosting iiifhosting.com (National Museum of Sweden)
 * IIIF using a commercial supplier - Luna (University of Edinburgh)
 * IIIF using open source tools (IIPImage)

The recording of this call is available [here](https://stanford.zoom.us/rec/share/GxLcXF0z7LW8_5UwPL-xs53TwlNO1bns6QLLQFjvHGXsoCuEvuWsPavQcPO10Q4H.LlhRUId7OsMjfpfq?startTime=1593521774000). 

The next step is to introduce the [Presentation API](https://iiif.io/api/presentation/3.0/). The presentation API allows you to tie IIIF Images together to create a digital presentation of the resource. It allows you to:

 * Link multiple images in a particular order e.g. a Book, Newspaper or Manuscript
 * Add Basic descriptive Metadata
 * Add Rights information
 * Link to other digital objects
 * Add Table of Contents etc.
 * Based on the linked data vocabulary [Shared Canvas](https://iiif.io/model/shared-canvas/1.0/) 

In the presentation we looked at the following manifest:

[http://dams.llgc.org.uk/iiif/2.0/4642022/manifest.json](http://dams.llgc.org.uk/iiif/2.0/4642022/manifest.json)

This has examples of Structures, Sequences and Canvases. Note it is a version 2.0 manifest.

Other presentation links:
 * [John Dee performing for Queen Elizabeth I](http://resources.digirati.com/iiif/an-introduction-to-iiif/dee-sbs.html)
 * [BNF illustration example](http://demos.biblissima-condorcet.fr/chateauroux/osd-demo/)
 * [Fire IIIF A/V Example](https://tomcrane.github.io/fire/)
 * [National Library of Wales Journal using IIIF Collections example](https://journals.library.wales)
 * [Presentation API generation tools](https://github.com/IIIF/awesome-iiif#presentation-manifest-tools)
 * [Bodleian Manifest Editor](https://digital.bodleian.ox.ac.uk/manifest-editor)


## IIIF 3.0 Cookbook
To help people make the move to IIIF version 3.0 the community has been working on creating recipes or examples for different use cases. You can see the full list of available recipes at:

 * [IIIF 3.0 Cookbook](https://iiif.io/api/cookbook/)

These are being actively worked on and one of the recipes I am going to show is yet to be released.  

### Basic Image Recipe
[https://iiif.io/api/cookbook/recipe/0001-mvm-image/](https://iiif.io/api/cookbook/recipe/0001-mvm-image/)

Things to note:
 * Label - multi-lingual
 * `items` replace `sequence`
 * Body is a flat image

### Basic IIIF Image Recipe
[https://preview.iiif.io/cookbook/0005-image-svc-single-image/recipe/0005-image-service/](https://preview.iiif.io/cookbook/0005-image-svc-single-image/recipe/0005-image-service/)

Things to note:
 * How to define a IIIF Service in the body:

``` 
"service": [{
    "id": "https://iiif.io/api/image/3.0/example/reference/918ecd18c2592080851777620de9bcb5-gottingen",
    "profile": "level1",
    "type": "ImageService3"
}]
```
### Basic Audio Recipe
[https://iiif.io/api/cookbook/recipe/0002-mvm-audio/](https://iiif.io/api/cookbook/recipe/0002-mvm-audio/)

Things to note:
 * Canvas duration:

```
{
  "id": "https://iiif.io/api/cookbook/recipe/0002-mvm-audio/canvas",
  "type": "Canvas",
  "duration": 1985.024,
  "items": [
    {
      "id": "https://iiif.io/api/cookbook/recipe/0002-mvm-audio/canvas/page",
      "type": "AnnotationPage",
      "items": [
        {
          "id": "https://iiif.io/api/cookbook/recipe/0002-mvm-audio/canvas/page/annotation",
          "type": "Annotation",
          "motivation": "painting",
          "body": {
            "id": "https://fixtures.iiif.io/audio/indiana/mahler-symphony-3/CD1/medium/128Kbps.mp4",
            "type": "Sound",
            "format": "audio/mp4",
            "duration": 1985.024
          },
          "target": "https://iiif.io/api/cookbook/recipe/0002-mvm-audio/canvas/page"
        }
      ]
    }
  ]
}
```

### Basic Video Recipe
[https://iiif.io/api/cookbook/recipe/0003-mvm-video/](https://iiif.io/api/cookbook/recipe/0003-mvm-video/)

Things to note:

 * Canvas has duration and height and width:

```
{
  "id": "https://iiif.io/api/cookbook/recipe/0003-mvm-video/canvas",
  "type": "Canvas",
  "height": 360,
  "width": 640,
  "duration": 1801.055,
  "items": [
    {
      "id": "https://iiif.io/api/cookbook/recipe/0003-mvm-video/canvas/page",
      "type": "AnnotationPage",
      "items": [
        {
          "id": "https://iiif.io/api/cookbook/recipe/0003-mvm-video/canvas/page/annotation",
          "type": "Annotation",
          "motivation": "painting",
          "body": {
            "id": "https://fixtures.iiif.io/video/indiana/30-minute-clock/medium/30-minute-clock.mp4",
            "type": "Video",
            "height": 360,
            "width": 640,
            "duration": 1801.055,
            "format": "video/mp4"
          },
          "target": "https://iiif.io/api/cookbook/recipe/0003-mvm-video/canvas"
        }
      ]
    }
  ]
}
```
