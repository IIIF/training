# Getting started with the Image API

There are many ways to make a IIIF Image available which is both a big advantage but also can add complexity. The decision on which option to go for depends on your institution or personal use case. IIIF is able to be used by single researchers up to National institutions and so there are setups to handle each individual case. Below is a list of options with benefits and issues. 

In a 2018 survey we asked what people were using to provide the Image API and these were the results:

<img src="day-two/image-servers/imgs/img_server_use.png" alt="Use of image servers" class="standout-image"/>

Respondents were mostly from within the IIIF community and there is a weighting to larger institutions. Most respondents had installed one of the Image Servers but others are using hosted and DAMS solutions. 

## British Library Image Server
The British Library uses a Image Server which has been developed by the BL but is available open source and is called [TremendousIIIF](https://github.com/britishlibrary/TremendousIIIF). It is the only .NET IIIF Image Server available and it looks like it supports 3.0 of the Image API. As was seen in the detailed look at the Image API the TremendousIIIF image server supports many of the advanced features of the IIIF Image API. 



## Other options
For the purposes of this workshop we will be using the BL image server but it may be useful to know that there are other options as well. This workshop includes instructions on using the Internet Archive, guides on installing Cantaloupe and a level0 image server but these are all optional extensions. Cantaloupe can be thought of as equivalent to TremendousIIIF apart from it is written in Java rather than .NET. 

### Vendor / DAMS
For an institution, the best solution is probably to use existing software that you already have. If you have a DAMS system or repository this may already implement IIIF and if it doesn't the best solution maybe to talk them into implementing. This reduces the duplication of images between your image management system and your IIIF Image Server. This solution may not be suitable to individual researchers or institutions who don't have these kind of systems. 

 * Where are your images stored now?
 * Examples of IIIF supporting Vendors include:
  * [OCLC ContentDM](https://www.oclc.org/en/contentdm/iiif.html), 
  * [GallerySystems](https://www.gallerysystems.com/iiif-what-is-it-and-what-does-it-do/),
  * [NeTx](https://www.netx.net/blog/iiif_museums_dams),
  * [ResourceSpace](https://www.resourcespace.com/knowledge-base/api/iiif)
  * [Rosetta](https://knowledge.exlibrisgroup.com/Rosetta/Training/What%27s_New_Videos/Rosetta_5-3/IIIF_Image_Viewing)
  * [Veridian](https://veridiansoftware.com/news/veridian-joins-iiif-community/) and many others.

### Hosted
Hosting allows you to upload your images to a service that provides a IIIF Image API. These hosting providers run the IIIF Image Servers mentioned below for you and provide interfaces for uploading and managing images. These are good solutions for individual researchers who want to make a few images available and for the commercial providers they also provide a good solution for mid to large sized institutions. For the commercial providers there are costs involved and you will have to weigh up the costs against the costs of running and supporting the Open Source Image servers in the next section. 

 * Free hosting from the Internet Archive - [Guide](iiif-hosting-ia.md)

 * Commercial hosting:
  * [Klokan iiifhosting.com](https://www.iiifhosting.com/) - ([Guide from another workshop](https://training.iiif.io/iiif-1-day-workshop/image-api/iiif-hosting-saas.html)) if its of interest.
  * [Digirati DCLS platform](https://dlcs.info/)

### IIIF Image server
There are many Open Source IIIF Image servers available. These are free to use but require infrastructure and staff time to setup and maintain. The three main ones in use are detailed below. They can be setup to serve 10s to millions of images. For the individual researcher or small institution the overhead with installing and maintaining these services may be too much. 

 * https://github.com/IIIF/awesome-iiif#image-servers
 * Main ones: 
   * [IIP Image](https://iipimage.sourceforge.io/) - written in C
   * [Loris](https://github.com/loris-imageserver/loris) - python
   * [Cantaloupe](https://cantaloupe-project.github.io/) - Java

### Static tiles
The final option is to use a feature of the Image API where all of the derivative images can be extracted and made available without an image server. There are many ways to get access to free or cheap web hosting. This solution has many steps but can provide a very low cost option for providing access to IIIF Images for researchers and smaller institutions. One thing it doesn't support is custom regions so for example the following level0 image:
 
 [https://glenrobson.github.io/iiif/welsh_book/page002/full/212,/0/default.jpg](https://glenrobson.github.io/iiif/welsh_book/page002/full/212,/0/default.jpg)

 ![Level0 image example](https://glenrobson.github.io/iiif/welsh_book/page002/full/212,/0/default.jpg)

Only has a limited number of sizes and regions defined. Enough to work in a zoomable viewer but it won't work with things like the UCD Image Cropper which can select any region. 

<iframe src="https://iiif.gdmrdigital.com/openseadragon/index.html?image=https://glenrobson.github.io/iiif/welsh_book/page002/info.json" width="100%" height="500px"></iframe>

You can see the [generated files on github](https://github.com/glenrobson/glenrobson.github.io/tree/master/iiif/welsh_book/page002/). There is also a blog on how to use IIIF level 0 images. [IIIF from Scratch](https://glenrobson.github.io/iiif/2018/01/12/iiif-from-scrtach.html). 

You can optionally follow this guide to create your own level 0 images. [Workshop Guide](day-two/image-servers/level0-workbench.md)

Once you have created your level 0 images you can make them available with the following example services:

Free:
 * [GitHub Pages](https://pages.github.com/) - ([Workbench Guide](day-two/image-servers/level0-workbench.md))

Paid for:
 * [Amazon s3 web hosting](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html)

For an idea of costs, the Amazon S3 costs are available [here](https://aws.amazon.com/s3/pricing/). For a ball park figure 2,000 images would cost around a $1 a month. 

Once the images are generated there is little maintenance required and the solution scales to millions of users. 
