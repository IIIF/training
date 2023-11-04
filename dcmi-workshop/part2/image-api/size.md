## Size

<script src="../../extras.js" >
</script>
<script src="../viewer.js" >
</script>

The size portion of the URL governs the size of the output image, possibly scaling the selected region. A full list of options is available in the [Image API specification](https://iiif.io/api/image/2.1/#size). Some of the more common ones:

| Form | Description |
| -- | -- |
| full | The full image (this is renamed `max` in 3.0) |
| w, | Only the width is specified and the server works out the correct height to keep the aspect ratio. Example `500,`|
| ,h | The alternative only specifying the height. Example `,250`|
| w,h | Explicit width and height. Note this will distort the image. Example: `250,250` |
| !w,h | Fit in a box width by height but don't distort the image. Example `!250,250`  |

See the examples below:

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
            '250,',
            ',250',
            'full',
            'max',
            '250,250',
            '!250,250'
        ],
        regions: [
            'full',
            'square',
            '1000,100,3000,2000',
            '2000,3000,2000,2000',
        ],
        highlight: [
            'size'
        ]
   });
   /*
        'https://dlcs.io/iiif-img/wellcome/5/b14658197.jp2',
            'https://iiif.io/api/image/3.0/example/reference/9ee11092dfd2782634f5e8e2c87c16d5-uclamss_1841_diary_07_02',
            'https://ids.si.edu/ids/iiif/CHSDM-317E001E9E352-000001',
            'https://ids.si.edu/ids/iiif/SAAM-1930.12.50_1'

   */
</script>  
