# Image API

<script src="../../extras.js" >
</script>
<script src="viewer.js" >
</script>

## Learning objectives

 * Understand what the Image API provides
 * Be able to change a Image API URL to get access to different parts of an image
 * Understand the different types of Image API implementations (level0, level1 etc)
 * Know the tools that work with the Image API so you can test your Image API server

## Introduction

 * What is it? A contract between the server and a viewing client
 * Its the foundation of all of the IIIF APIs. They all build on top of the Image API.
 * Luckily its one of the easiest to implement 
 * because others have written servers you can install which provide the service

## Terminology
 * __API__ - Application Programming Interface. In this case an agreed standard between the Image API Server and the Image API Client. 
 * __Client__- The software which allows you to view a IIIF Image. As Web Browsers don't support the Image API Natively there are many Javascript viewers that live on webpages that can allow you to view IIIF Images. Examples include OpenSeaDragon, Mirador and Universal Viewer. 
 * __Viewer__ - also known as a IIIF Viewer. This is the same as a Client and lets you view IIIF Images. Examples include OpenSeaDragon, Mirador and Universal Viewer. 
 * __Server__ - Software that runs on a machine at all times and is assessable over the Web. For this workshop I will mostly be referring to Image API Servers but there are other types of servers including Web servers or Email servers. Sometimes they are also know as Services e.g. Image API service, Web Service or Mail Service.  
 * __Image API__ - the agreed standard and specification which forms the contract between Client and Server
 * __Image API Server__ - the running software that provides access to images using the Image API. Sometimes shortened in this context to Image Servers. 
 * __IIIF Image__ - an Image that is made available through a IIIF Image API Server. 

## History

IIIF really started out of the study of Medieval Manuscripts and the difficulty in using Digitised versions. Ben Albritton has written a great blog on the difficulties of working with images at that time and the promise IIIF gives in [Fellow Travelers: The Canterbury Tales and IIIF](https://blalbrit.github.io/2015/07/14/fellow-travelers-the-canterbury-tales-and-iiif). 

Testimonial for Glen Robson on the challenges of serving images at scale before IIIF

> From a more personal perspective and also from a perspective of an institution providing these digital images. When I started work at the National Library of Wales, Manuscripts were digitised and three images were created per page. 

> 1. A thumbnail: 
> 
> ![Example thumbnail](https://damsssl.llgc.org.uk/iiif/2.0/image/4628571/full/90,/0/default.jpg)

> 2. A Web or reference sized image:

> ![Example web copy of image](https://damsssl.llgc.org.uk/iiif/2.0/image/4628571/full/300,/0/default.jpg)

> 3. and a high quality archival Tiff that was only available on request. 

>These were made available through a viewer allowing you to browse around the Manuscript and switch between Thumbnail and Web view: 

> ![Image of a historical digital viewer](img/Chaucer_viewer.png)

> As screens got bigger and the internet got faster the limited size of the Web images became a real barrier to use. Although the Archival Tiff was too big to put on the web, we needed some way to allow access to large images and support new methods of access like mobile browsers and the new uses scholars were making of the collection. The solution many institutions moved to, was to create Zooming viewers like [Zoomify](http://www.zoomify.com/) and [Microsoft's DZI](https://en.wikipedia.org/wiki/Deep_Zoom). These viewers tended to use Flash which was unsupported on Mobile and required proprietary file formats to support. Around this time the JPEG2000 file format started to gain traction as an open file format that could support Zoomable viewers. 

> Enter:

> ![IIIF Logo](img/logo.png)

> Provides:
 > * A standard URL structure for accessing images (easy to support)
 > * Enough information to drive a zoom viewer
 > * Human hackable URLs
 > * Cacheable and Scalable URLs


## The Image Request API 

Before practicing we should spend a little time with the "rules" themselves. 

These rules can be found on the IIIF web page here [https://iiif.io/api/image/3.0/](https://iiif.io/api/image/3.0/)

There's a lot here, so let's not get overwhelmed. 

Let's look first at the most important section: [section 2.1: Image Request URI Syntax](https://iiif.io/api/image/3.0/#21-image-request-uri-syntax)

Notice that there are 5 main parameters that the user can specify when making a request.

* Region
* Size
* Rotation
* Quality
* Format

Once we see, this much of the remaining documentation make sense. If we're interesting in specifying a certain region, then we can scroll down the [Region](https://iiif.io/api/image/3.0/#41-region) section and learn how to request the specific region we want in a way that the IIIF server understands.

* Question: What is the "square" parameter?
* Question: Why do think the "square" parameter exists? What's a use case you can imagine for it.

## Example:

Perhaps the easiest was to learn the basic of the Image API is to practice manipulating images.

So let's do that here, use the demo to play around with the images in a controlled environment. 

<div id="image_api_demo">
</div>
<script>
   addViewer({
        div: 'image_api_demo',
        images: [
            'https://ids.lib.harvard.edu/ids/iiif/25286607',
            'https://dlcs.io/iiif-img/wellcome/5/b14658197.jp2'
            ],
        sizes: [
            '500,',
            '500,500',
            '!500,500'
        ],
        regions: [
            'full',
            'square',
            '1000,100,3000,2000',
            '2000,3000,2000,2000',
        ]
   });
   /*
        'https://dlcs.io/iiif-img/wellcome/5/b14658197.jp2',
            'https://iiif.io/api/image/3.0/example/reference/9ee11092dfd2782634f5e8e2c87c16d5-uclamss_1841_diary_07_02',
            'https://ids.si.edu/ids/iiif/CHSDM-317E001E9E352-000001',
            'https://ids.si.edu/ids/iiif/SAAM-1930.12.50_1'

   */
</script>

Here's another controlled demo where you can experiment: [https://www.learniiif.org/image-api/playground](https://www.learniiif.org/image-api/playground)

Once you're demo playing around with the controlled demo, start playing around with a live image. 

Place the following base url in browser:

https://ids.lib.harvard.edu/ids/iiif/47174896/

How could we modify this url so that it shows us a picture that is...

* ...is 512px wide...is upside down...gray scale...has a format of png

For help, consult the [IIIF Image API documentation](https://iiif.io/api/image/3.0/)

## Image Information Requests

We can spend less time here, but it's important to note that the Image API provides rules not just for how to return the image itself, but how to return information about the image. 

In some cases, a viewing application my want to get prior information about the image before displaying it so that it can decide the best way to display it. 

First the API describes how that information should be requested, namely with a `info.json` appended to the image base url.

For example: [https://ids.lib.harvard.edu/ids/iiif/47174896/info.json](https://ids.lib.harvard.edu/ids/iiif/47174896/info.json)

If you open this link, you will a response of json data.

The structure of that json data, what kind of properties it has and what kind of values can be supplied is governed by the [IIIF Image API: Image Information Request](https://iiif.io/api/image/3.0/#5-image-information)

Take a moment to look at the response above and compare it to the documentation. See if you can answer the following questions

* What does the `maxWidth` property mean?
* What does the `qualities` property tell the client?
* Finally, what does the `sizes` tell the client?