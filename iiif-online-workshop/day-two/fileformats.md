# File formats

The IIIF specification makes no mention of the source format of an image and the type of image you can use is driven by the IIIF Image Server you choose. Most support the common file formats like jpeg, png, tiff or gif. To get the fastest experience it is advised to use a special kind of image format that supports tilling. Examples of these include JPEG2000 and special types of Tiff files called Pyramid Tiffs. 

The reason for this can be demonstrated in the following interactive image zoom tool:

<iframe width="100%" height="652" frameborder="0"
  src="https://observablehq.com/embed/@allmaps/tile-pyramid?cells=viz"></iframe>

When you zoom into a image the viewer only shows you the tiles that are in your view as are highlighted in the viewer above. This means a very large image can be viewed but the viewer never downloads all of the images. Only the ones that are required. The JPEG2000 and Pyramid Tiff format have these tiles and levels pre-generated into the file format. A Image server just needs to read and extract the correct tiles. This makes them much faster particularly for larger images. Of course if a custom region is requested then the Image server would need to stitch the images together. 

The are various methods (or recipes) to create JPEG2000 and Pyramid Tiffs but to give a few examples the Bodleian method for creating JPEG2000s is detailed here:

https://image-processing.readthedocs.io/en/latest/jp2_profile.html

and a method for creating Pyramid Tiffs is detailed on the Serverless IIIF image server:

https://github.com/samvera/serverless-iiif/blob/da49fc34bfb054cd8d6ddfaea58d622f33f6d8ee/README.md#creating-tiled-tiffs

There are also the following scripts to create JPEG2000s, Pyramid tiffs and HTJ2K images that were developed by the IIIF community as part of their investigation into [testing different image formats](https://journal.code4lib.org/articles/17596). 

https://github.com/IIIF/htj2k/tree/main/convert