## Quality

<script src="../viewer.js" >
</script>

The Quality parameter defines whether the image should be delivered as:

| Name | Definition  |
| --- | --- |
| Default | The source colour |
| Gray | Grayscale |
| Bitonal | Each pixel is black or white | 
| Color  | The color image. This could be a colorized black and white image | 

This can be useful for some image processing tools like OCR generation. To see what qualities a image server supports you can look into the `info.json` `extraQualities` property:

[https://media.artmuseum.princeton.edu/iiif/3/collection/y1982-103/info.json](https://media.artmuseum.princeton.edu/iiif/3/collection/y1982-103/info.json)

```
{
    "@context": "http://iiif.io/api/image/3/context.json",
    "id": "https://media.artmuseum.princeton.edu/iiif/3/collection/y1982-103",
    "type": "ImageService3",
    
    ...
    
    "extraFormats": [ "jpeg", "tif", "tiff", "webp" ],
    "extraQualities": [ "color", "gray", "bitonal" ],
   
    ...
}
```

See the example below:

<div id="image_api_demo2">
</div>
<script>
   addViewer({
        div: 'image_api_demo2',
        images: [
            'https://media.artmuseum.princeton.edu/iiif/3/collection/y1982-103',
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


