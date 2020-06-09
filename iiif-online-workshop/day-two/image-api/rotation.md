## Rotation
<script src="../viewer.js" >
</script>

Rotating the image in degrees up to 360. You can also use the `!n` to mirror and rotate the image. Note not all image server support rotation and there are the following levels of support known as [compliance levels](https://iiif.io/api/image/2.1/compliance/):

| Feature | Level |
| --- | --- |
| No rotation supported | Level 0 |
| Only 90 degree rotation supported | Optional in Level 1 mandatory in level 2 |
| Arbitrary rotation | Optional at all levels |
| Mirroring | Optional at all levels |

The Harvard image service supports all rotation parameters and is known as a Level 2 implementation. 

<div id="image_api_demo2">
</div>
<script>
   addViewer({
        div: 'image_api_demo2',
        images: [
            'https://ids.lib.harvard.edu/ids/iiif/25286607'
            ],
        sizes: [
            '500,'
        ],
        regions: [
            'full',
            'square',
            '1000,100,3000,2000',
            '2000,3000,2000,2000',
        ],
        rotation: [
            '90',
            '45',
            '135',
            '!135'
        ],
        highlight: [
            'rotation'
        ]
   });
   /*
        'https://dlcs.io/iiif-img/wellcome/5/b14658197.jp2',
            'https://iiif.io/api/image/3.0/example/reference/9ee11092dfd2782634f5e8e2c87c16d5-uclamss_1841_diary_07_02',
            'https://ids.si.edu/ids/iiif/CHSDM-317E001E9E352-000001',
            'https://ids.si.edu/ids/iiif/SAAM-1930.12.50_1'

   */
</script>  


