# Image API Internals

## Image Request Parameters
We saw in the previous examples that we could request an image using a defined URL syntax. This syntax is a significant part of how the IIIF Image API works.

Images are requested using URI templates that have the following syntax:

```html
{scheme}://{server}{/prefix}/{identifier}/{region}/{size}/{rotation}/{quality}.{format}
``` 

Here is a quick example of how modifying these parameters can change the image that is delivered back to you.

[![transformation](../images/transformation.png)](http://iiif.io/api/image/2.1/#order-of-implementation)
```
region=125,15,120,140 size=90, rotation=!345 quality=gray
.../125,15,120,140/90,/!345/gray.jpg
# Source: http://iiif.io/api/image/2.1/#order-of-implementation
```

If you went and visited the [IIIF Image API Playground](https://www.learniiif.org/image-api/playground) you would have seen a form that allowed you to change these parameters.

## Image Information
IIIF Image API software often times need to know what types of requests the server can support. A [Image Information](http://iiif.io/api/image/2.1/#image-information) response from the IIIF Image server is used for this purpose. This response is used by IIIF Image API clients to determine what types of image requests it can make.

An example of a Image Information response:

`https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json`

```javascript
{
  "@context": "http://iiif.io/api/image/2/context.json",
  "@id": "https://stacks.stanford.edu/image/iiif/hg676jb4964%252F0380_796-44",
  "protocol": "http://iiif.io/api/image",
  "width": 5426,
  "height": 3820,
  "sizes": [
    {
      "width": 170,
      "height": 119
    },
    {
      "width": 339,
      "height": 239
    },
    {
      "width": 678,
      "height": 478
    },
    {
      "width": 1357,
      "height": 955
    },
    {
      "width": 2713,
      "height": 1910
    },
    {
      "width": 5426,
      "height": 3820
    }
  ],
  "tiles": [
    {
      "width": 2713,
      "height": 1910,
      "scaleFactors": [
        1,
        2,
        4,
        8,
        16,
        32
      ]
    }
  ],
  "profile": "http://iiif.io/api/image/2/level2"
}
```
