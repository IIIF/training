# What are annotations

See Specification Chapter:  [http://iiif.io/api/presentation/2.1/#annotation-list](http://iiif.io/api/presentation/2.1/#annotation-list)

## Example
```json
{
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@id": "http://example.org/iiif/book1/list/p1",
  "@type": "sc:AnnotationList",

  "resources": [
    {
      "@type": "oa:Annotation",
      "motivation": "sc:painting",
      "resource":{
        "@id": "http://example.org/iiif/book1/res/music.mp3",
        "@type": "dctypes:Sound",
        "format": "audio/mpeg"
      },
      "on": "http://example.org/iiif/book1/canvas/p1"
    },
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
  ]
}
```

## What are annotationsLists?

Annotations are simply lists of annotations grouped together.
They can be re-used by an application that wants to retrieve them.

That can also be linked to manifests so that a viewer can bring them together in one cohesive experience.

## Embedding an annotationsLists in a manifest
```json
{
  // Metadata about this canvas
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@id": "http://example.org/iiif/book1/canvas/p1",
  "@type": "sc:Canvas",
  "label": "p. 1",
  "height": 1000,
  "width": 750,
  "thumbnail" : {
    "@id" : "http://example.org/iiif/book1/canvas/p1/thumb.jpg",
    "@type": "dctypes:Image",
    "height": 200,
    "width": 150
  },
  "images": [
    {
      "@type": "oa:Annotation"
      // Link from Image to canvas should be included here, as below
    }
  ],
  "otherContent": [
    {
      // Reference to list of other Content resources, _not included directly_
      "@id": "http://example.org/iiif/book1/list/p1",
      "@type": "sc:AnnotationList"
    }
  ]

}
```

## Caveat: Open Annotations vs Web Annotations

## Using an annotation Store

What is an annotation store? An annotation store is just a database designed to ingest data structured according to the Open Annotations (or Web Annotations) specifications.

There are lots of them. You can make your own or use one that has been made by someone else.

## Local Storage as an annotation store

Because an annotation store is nothing other than place to store raw data
even your browser's local storage can function as an annotation store.

### Activity

Turning on annotations in Mirador

* Open the index.html page of a mirador instance.

* Add the follow key value pair to the configuration of options of your mirador instance.
  * `"annotationEndpoint": { "name":"Local Storage", "module": "LocalStorageEndpoint" }`
* A module then has to be build (the LocalStorageEndpoint) using distinct set of functions that mirador knows how to call [See https://github.com/ProjectMirador/mirador/blob/develop/js/src/annotations/localStorageEndpoint.js](https://github.com/ProjectMirador/mirador/blob/develop/js/src/annotations/localStorageEndpoint.js).
  * This module includes functions like search, deleteAnnotation, updateAnnotation, createAnnotation, getAnnotationList, etc.
  * Each annotation server might have different ways of deleting, updating, creating an annotation thus mirador needs this extra module to know what kind of action to perform.
* Now that the localstorage module is turned on, go into Mirador and makes some annotations.
* After you've made some annotations, view them in local Storage
  * Open the developer tools in the Chrome Browser
  * Go to "Application"
  * View "Local Storage" in the left hand column.
* Copying the information from you browsers local storage is the most primitive way of *Exporting* your annotations.

### Questions and Reflections

* What are some of the limitations of using your local storage as a store?
* What kind of store/database will allow us to overcome those limitations?

## Setting up a Remote Local Storage

There are several kinds of annotations stores that can be used.

### Activity


* Download the Rails Annotation Server
  * Download from github (git clone ...)

* Run your rails server
  * either with `rails server`
  * `docker compose up` or `docker run rails annotation server`
* Add the annotot module to mirador
* Rebuild mirador
* Update the mirador annotation endpoint configuration
* "annotationEndpoint": {
            "name": 'Annotot',
            "module": 'AnnototEndpoint',
            "options": {
              "endpoint": "http://localhost:3000/annotations"
            }
          },
* Now make some annotations in mirador
* Now view those same annotations apart from mirador at http://localhost:3000/annotations/lists?uri=<cavasid>
* Now you've exported your annotations and free to use them anywhere else.
* So let's use them somewhere else
  * Go to back to your custom project and use jquery to make a request for those annotations
  and display them on your page like so:

  ```javascript
    const annotationList = "http://localhost:3000/annotations/lists?uri=<cavasid>"
    $.get(annotationList, function(data){
    console.log(data);
    //do something with that data
    });
  ```
