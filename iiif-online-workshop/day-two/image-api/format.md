## Format

<script src="../../extras.js" >
</script>
<script src="../viewer.js" >
</script>

The format of the image for example `jpg` or `png`. The list of image formats supported by the image server is again listed in the `info.json`.

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
            '250,',
            'max',
            '250,',
            ',250',
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
            'format'
        ]
   });
   /*
        'https://dlcs.io/iiif-img/wellcome/5/b14658197.jp2',
            'https://iiif.io/api/image/3.0/example/reference/9ee11092dfd2782634f5e8e2c87c16d5-uclamss_1841_diary_07_02',
            'https://ids.si.edu/ids/iiif/CHSDM-317E001E9E352-000001',
            'https://ids.si.edu/ids/iiif/SAAM-1930.12.50_1'

   */
</script>  


