## Size

<script src="../../extras.js" >
</script>
<script src="../viewer.js" >
</script>

The size governs the size of the output image. A full list of options is available in the [Image API specification](https://iiif.io/api/image/3.0/#42-size). Some of the more common ones:

| Form | Description |
| -- | -- |
| max | The max size for the image (this is named `full` in 2.0) |
| w, | Only the width is specified and the server works out the correct height to keep the aspect ratio. Example `500,`|
| ,h | The alternative only specifying the height. Example `,250`|
| w,h | Explicit width and height. Note this will distort the image. Example: `250,250` |
| !w,h | Fit in a box width by height but don't distort the image. Example `!250,250`  |

__Note:__ In IIIF Image API __version 2__, `full` meant the full size of the image. `max` was added to mean the largest size the server is willing to return (which may be smaller than `full` if the server imposes a size limit).

In IIIF Image API __version 3__, `full` was removed and replaced entirely by `max`. So in v3, `max` means the full/maximum size the server will return.

See the examples below: 

<div id="image_api_demo2">
</div>
<script>
   addViewer({
        div: 'image_api_demo2',
        images: [
            'https://media.artmuseum.princeton.edu/iiif/3/collection/y1982-103',
            'https://ids.lib.harvard.edu/ids/iiif/25286607',
            ],
        sizes: [
            '500,',
            '250,',
            ',250',
            'max',
            '250,250',
            '!250,250'
        ],
        regions: [
            'full',
            'square',
            '201,399,250,250',
            '376,162,280,202',
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


