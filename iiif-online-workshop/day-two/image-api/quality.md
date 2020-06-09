## Quality
<script src="../viewer.js" >
</script>

The Quality parameter defines whether the image should be delivered as:

 * Default - the source colour
 * Gray - grayscale
 * Bitonal - each pixel black or white
 * Color  - color image. This could be a colorized black and white image.  

This can be useful for some image processing tools like OCR generation. To see what types a image server supports you can look into the `info.json` profile section:

[https://ids.lib.harvard.edu/ids/iiif/25286607/info.json](https://ids.lib.harvard.edu/ids/iiif/25286607/info.json)

```
profile": [

    "http://iiif.io/api/image/2/level2.json",
    {
        "supports": [
            "canonicalLinkHeader",
            "profileLinkHeader",
            "mirroring",
            "rotationArbitrary",
            "regionSquare",
            "sizeAboveFull"
        ],
        "qualities": [
            "default",
            "bitonal",
            "gray",
            "color"
        ],
        "formats": [
            "jpg",
            "tif",
            "png",
            "gif",
            "webp"
        ]
    }

],
```

See the example below:

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
            '250,'
        ],
        highlight: [
            'quality'
        ]
   });
   /*
        'https://dlcs.io/iiif-img/wellcome/5/b14658197.jp2',
            'https://iiif.io/api/image/3.0/example/reference/9ee11092dfd2782634f5e8e2c87c16d5-uclamss_1841_diary_07_02',
            'https://ids.si.edu/ids/iiif/CHSDM-317E001E9E352-000001',
            'https://ids.si.edu/ids/iiif/SAAM-1930.12.50_1'

   */
</script>  


