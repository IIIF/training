# What are annotations

Annotations relate an object ("resource") to another object ("on").
The nature of that relationship can be of various types.
Treating the annotation itself as a resource allows describe and category the nature of that relationship.

For more, we'll go through the slides here:
https://slides.com/hadro/dhsi-workshop-day-3-annotations

## Example Annotation

```json

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

```

## What are annotationsLists?

See Specification Chapter:  [http://iiif.io/api/presentation/2.1/#annotation-list](http://iiif.io/api/presentation/2.1/#annotation-list)

Annotations are simply lists of annotations grouped together.
They can be re-used by any application that wants to retrieve them.

```json
{
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@id": "http://localhost:8887/coin/canvas/AnnotationList",
  "@type": "sc:AnnotationList",
  "resources": [
    {
      "@id": "http://localhost:8887/coin/list/1",
      "@type": "oa:Annotation",
      "motivation": "sc:painting",
      "resource": {
        "@type": "cnt:ContentAsText",
        "format": "text/plain",
        "chars": "Zeus seated on stool-throne"
      },
      "on": "http://localhost:8887/coin/canvas#xywh=3706,208,522,522"
    },
        {
      "@id": "http://localhost:8887/coin/list/1",
      "@type": "oa:Annotation",
      "motivation": "sc:painting",
      "resource": {
        "@type": "cnt:ContentAsText",
        "format": "text/plain",
        "chars": "Zeus seated on stool-throne"
      },
      "on": "http://localhost:8887/coin/canvas#xywh=3706,208,522,522"
    }
  ]
}
```

That can also be linked to manifests so that a viewer can bring them together in one cohesive experience.

## Caveat: Open Annotations vs Web Annotations

## Annotations Exercise

Go on to the [Annotations Exercise](exercise.html) to try out some cases where annotations come into play.

## Using an annotation Store

What is an annotation store? An annotation store is just a database designed to ingest data structured according to the Open Annotations (or Web Annotations) specifications.

There are lots of them annotation stores. You can make your own or use one that has been made by someone else.


## Local Storage as an annotation store

Because an annotation store is nothing other than place to store raw data,
even your browser's local storage can function as an annotation store.

<!-- ### Activity: Configuring and Running Mirador

To begin working with annotations, we're going to start going a little bit deeper the image viewer. We're going to begin look at how to download Mirador and configure your personal instance of Mirador so that it supports advanced features, like annotations.

1. Download the Mirador Zip File to your Desktop [https://github.com/ProjectMirador/mirador/releases](https://github.com/ProjectMirador/mirador/releases)
  * Or download directly from here [https://github.com/ProjectMirador/mirador/releases/download/v2.6.0/build.zip](https://github.com/ProjectMirador/mirador/releases/download/v2.6.0/build.zip)
1. Unzip the Mirador Package. It will probably be a folder called "build".
1. Change the name of the folder to "Mirador"
  * `$ cd ~/Desktop`
  * `$ mv build Mirador`
1. Now open the Mirador Directory in Atom.
1. Open the file called `example.html`
  * The example.html provides a basic example of a html that runs the Mirador applications.
  * Line 19 loads in the core application
  * Line 23 begins the configuration of this mirador instance
  * For example lines 27-71 indicate the manifests that Mirador should load with on default
  * With respect to annotations, lines 73-76 are the subject of our current interest.
  * The proper `annotationEndpoint` tells Mirador where it should save annotations.
1. Double check to make sure your instance of Mirador has the following configuration at lines 73-76
  * `"annotationEndpoint": { "name":"Local Storage", "module": "LocalStorageEndpoint" }`
  * Note: A module then has to be build (the LocalStorageEndpoint) using distinct set of functions that mirador knows how to call [See https://github.com/ProjectMirador/mirador/blob/develop/js/src/annotations/localStorageEndpoint.js](https://github.com/ProjectMirador/mirador/blob/develop/js/src/annotations/localStorageEndpoint.js).
  * This module includes functions like search, deleteAnnotation, updateAnnotation, createAnnotation, getAnnotationList, etc.
  * Each annotation server might have different ways of deleting, updating, creating an annotation thus mirador needs this extra module to know what kind of action to perform.
1. Now that the localstorage module is configured, open Mirador in your browser
  * In your Mirador directory run `$ http-server` and then navigate to http://localhost:8080/example.html
  * Or in your browser, open the example file directly, Files->OpenFile-> locate the example.html file
1. Tell Mirador you want to see Annotations by click the "comment bubble" near the top left corner.
1. Make some annotations
1. Now export your annotations from your browsers local storage.
  * Open the developer tools in the Chrome Browser
  * Go to "Application"
  * View "Local Storage" in the left hand column.
1. Copy the information from you browsers local storage and past it in Atom.
  * This is the most primitive way of *Exporting* your annotations.

### Questions and Reflections

* What are some of the limitations of using your local storage as a store?
* What kind of store/database will allow us to overcome those limitations?

## Configuring Mirador to Use a Remote Annotation Store

There are several kinds of remote annotations stores that can be used. We're going to use a Rails based annotation store called "Annotot" developed by Jack Reed.

### Activity

1. Update the mirador annotation endpoint configuration to following:
    ```json

    "annotationEndpoint": {
      "name": "Annotot",
      "module": "AnnototEndpoint",
      "options": {
        "endpoint": "http://ras.scta.info/annotations"
      }
    }
    ```
1. Since this annotation store works differently than localstorage, we can expect that Mirador out of the box knows how to talk to it. So we have to provide Mirador with API hook, just as we saw above was supplied for local storage.
1. Download the Annotot API Hook  
  * [https://github.com/mejackreed/annotot/blob/master/app/assets/javascripts/annotot/annotot_endpoint.js](https://github.com/mejackreed/annotot/blob/master/app/assets/javascripts/annotot/annotot_endpoint.js)
  * or directly from here [https://raw.githubusercontent.com/mejackreed/annotot/master/app/assets/javascripts/annotot/annotot_endpoint.js](https://raw.githubusercontent.com/mejackreed/annotot/master/app/assets/javascripts/annotot/annotot_endpoint.js)
1. Save the file in your Mirador Directory
1. Import the file into your example.html file
  * add `<script src="annotot_endpoint.js"></script>` below `<script src="mirador/mirador.min.js"></script>` (this should be found around line 19)
1. Refresh Mirador
1. Now make some annotations in mirador.
  * Because we are all using the same remote server, we should be able to see each others annotations. Let's try it.
1. Open the the following manifest with a picture of our class.
1. Annotate yourself in the image.
1. Navigate away and then back to the image to refresh the annotations. As other make annotations, you should see their annotations as well. -->


<!-- ## Reusing your annotations from an annotation store

1. Now view those same annotations apart from mirador at http://ras.scta.info/annotations/lists?uri=<cavasid>
1. Now you've exported your annotations and free to use them anywhere else.
1. So let's use them somewhere else
  * Go to back to your custom project and use jquery to make a request for those annotations
  and display them on your page like so:

  ```javascript
    const annotationList = "http://localhost:3000/annotations/lists?uri=<cavasid>"
    $.get(annotationList, function(data){
    console.log(data);
    //do something with that data
    });
  ``` -->