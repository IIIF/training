## Identifier
<script src="../viewer.js" >
</script>
<script src="../../extras.js" >
</script>

The identifier is highlighted below. Everything to the right of the identifier is controlled by the Image API and is predictable. In the viewer below a full IIIF image URL is shown. One thing to watch out for with a image URL is that it uses _https_ rather than _http_. With _http_ URLs you will not be able to open the image in a _https_ hosted viewer.

You can see some different image examples by changing the identifier.  
<div id="image_api_demo2">
</div>
<script>
   addViewer({
        div: 'image_api_demo2',
        images: [
            'https://ids.lib.harvard.edu/ids/iiif/25286607',
            'https://dlcs.io/iiif-img/wellcome/5/b14658197.jp2',
            'https://ids.si.edu/ids/iiif/CHSDM-317E001E9E352-000001'
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
        ],
        highlight: [
            'identifier'
        ]
   });
   /*
        'https://dlcs.io/iiif-img/wellcome/5/b14658197.jp2',
            'https://iiif.io/api/image/3.0/example/reference/9ee11092dfd2782634f5e8e2c87c16d5-uclamss_1841_diary_07_02',
            'https://ids.si.edu/ids/iiif/CHSDM-317E001E9E352-000001',
            'https://ids.si.edu/ids/iiif/SAAM-1930.12.50_1'

   */
</script>  

## Info.json

As well as images there is special file accessible from the Identifier and this is the `info.json`:

[https://ids.si.edu/ids/iiif/CHSDM-317E001E9E352-000001/info.json](https://ids.si.edu/ids/iiif/CHSDM-317E001E9E352-000001/info.json)

This is a small JSON file that gives information to a viewer on the makeup of the image and what the server supports. For example the `info.json` gives the full width and height of the source image. A simple example `info.json` is below:

```
{
  "@context": "http://iiif.io/api/image/2/context.json",
  "@id": "https://ids.si.edu/ids/iiif/CHSDM-317E001E9E352-000001",
  "protocol": "http://iiif.io/api/image",
  "width": 5471,
  "height": 3757,
  "tiles": [
    {
      "width": 512,
      "scaleFactors": [
        1,
        2,
        4,
        8
      ]
    }
  ],
  "profile": [
    "http://iiif.io/api/image/2/level2.json",
    {
      "formats": [
        "jpg"
      ],
      "supports": [
        "sizeByH",
        "sizeByW",
        "sizeByForcedWh"
      ]
    }
  ]
}
```

The `profile` element advertises what the image server supports. In this example it only supports the `jpg` image format and a few features. These features are defined in the [Image API specification](https://iiif.io/api/image/2.1/compliance/).
