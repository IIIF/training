## Region
<script src="../viewer.js" >
</script>

The region allows you to extract a portion of an image. The format is `/x,y,width,height/` with the origin of the image being the top left. See this simplified version below:

![region example](https://iiif.io/api/image/2.1/img/region_px.png)

This region would be noted as `/125,15,120,140/` which is:
 * x = 125 pixels from the left
 * y = 15 pixels from the top
 * width = 120 pixels
 * heigh = 140 pixels

The pixel dimensions are relative to the full width and height of the image. This generally makes the regions fiddly to work out by hand and there are many cropping tools available which will give you a region:

 * [Jack Reed's Cropping tool](https://bl.ocks.org/mejackreed/6936585f435b60aa9451ae2bc1c199f2)
 * [UCD Image Cropping tool](https://jbhoward-dublin.github.io/IIIF-imageManipulation/index.html?imageID=https://ids.lib.harvard.edu/ids/iiif/25286607)

As well as specifying the exact pixel dimensions there are a couple of short cuts:

 * `full` the full image.  
 * `square` a region where the width and height are equal. The region is positioned by the server. This can be useful for square thumbnails.

Use the region drop down to select different regions of the image:  

<div id="image_api_demo2">
</div>
<script>
   addViewer({
        div: 'image_api_demo2',
        images: [
            'https://ids.lib.harvard.edu/ids/iiif/25286607'
            ],
        sizes: [
            '500,',
        ],
        regions: [
            'full',
            'square',
            '1000,100,3000,2000',
            '2000,3000,2000,2000',
        ],
        highlight: [
            'region'
        ]
   });
   /*
        'https://dlcs.io/iiif-img/wellcome/5/b14658197.jp2',
            'https://iiif.io/api/image/3.0/example/reference/9ee11092dfd2782634f5e8e2c87c16d5-uclamss_1841_diary_07_02',
            'https://ids.si.edu/ids/iiif/CHSDM-317E001E9E352-000001',
            'https://ids.si.edu/ids/iiif/SAAM-1930.12.50_1'

   */
</script>  


