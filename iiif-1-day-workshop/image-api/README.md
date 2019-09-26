# IIIF Image API

## Overview

The Image API provides for a standardized way to request and deliver images. Having this standardization allows both browser and server applications to reuse software and provide a consistent experience for requesting images.

Presentation available on [SlideShare](https://www.slideshare.net/GlenRobson/iiif-image-api-glen).

## Presenter

Glen Robson, IIIF Technical Coordinator

National Library of Wales links:
 * [Digitisation](http://bit.ly/2zPFx8a)
 * [Newspapers](http://newspapers.library.wales/)

## Pre-IIIF Viewers

Example from Ben Albritton's blog [Fellow Travelers: The Canterbury Tales and IIIF](http://stanford.io/1PW789d)

## Image API

Latest version of the Image API is available at [http://iiif.io/api/image/2.1/](http://iiif.io/api/image/2.1/).

## Image API demonstration

Many of these examples are from Tom Crane's [excellent blog series](http://resources.digirati.com/iiif/an-introduction-to-iiif/).

 * [Original oil painting from the Wellcome Trust](http://wellcomelibrary.org/item/b14658197)
 * [Example API calls](https://tomcrane.github.io/the-long-iiif/image-api.html)
 * [Tile Explorer](http://tomcrane.github.io/presentations/tile-exploder.html)
 * [Example info.json](https://dlcs.io/iiif-img/3/2/04fbbb28-d5a7-4408-b7da-800c4e65eda3/info.json)

### Image API Exercises

Look at the following and play around with the parameters:
 * [Jason Ronallo's detailed example](http://ronallo.com/iiif-workshop/image/detailed-example.html)
 * [Tom Cranes example](https://tomcrane.github.io/the-long-iiif/image-api.html)
 * [UCD image cropper](https://jbhoward-dublin.github.io/IIIF-imageManipulation/index.html?imageID=https://iiif.ucd.ie/loris/ivrla:10408)

### Questions
In pairs answer the following questions:
    
 1. Given the following image URL: [https://iiif.lib.ncsu.edu/iiif/mc00198-008-ff0051-000-001_0001/full/512,/0/default.jpg](https://iiif.lib.ncsu.edu/iiif/mc00198-008-ff0051-000-001_0001/full/512,/0/default.jpg) what would be the URL for the `info.json`?
 2. What is the width and height of the biggest size image?
 3. Construct a URL that:
    * Shows the full image
    * is 512px wide
    * is upside down
    * gray scale
    * has a format of `png`
 4. What formats can you request for this image?

Looking at the IIIF API Specification [https://iiif.io/api/image/2.1/](https://iiif.io/api/image/2.1/)

 5. What status code should be returned if you ask for a format the image server doesn't support?
 6. What does `max` image size mean? How does it differ to `full`? When might you use this?

Given the following info.json:

```
{
    "@context": "http://iiif.io/api/image/2/context.json",
    "@id": "http://example.com/iiif/image/2",
    "@type": "iiif:Image",
    "protocol": "http://iiif.io/api/image",
    "width": 400,
    "height": 400,
}
```
and image:

![image](../images/4_Quadrants.jpg)    

**HINT**: remember 0,0 is the top left of the image. 

 5. What would the URL be to cut out the green quarter?
 6. What would the URL be to cut out the white quarter? 

### Bonus points:

Given the following info.json: https://iiif.lib.ncsu.edu/iiif/mc00198-008-ff0051-000-001_0001/info.json 

 7. How many tiles would you need to show the full image? 

If you finish have a look at [http://puzzle.mikeapps.me/](http://puzzle.mikeapps.me/)


