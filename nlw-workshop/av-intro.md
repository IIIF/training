# Introduction to AV

## Canvas deep dive

The canvas is a core feature of IIIF. For images the canvas is usually equivalent to a page in a book. For AV material the distinction can be more complicated. It is sometimes thought of as a empty powerpoint slide where images or audio are `painted` on to the slide at particular positions. 

In the image below you can see the canvas has a height and a width. The example image is `painted` on to the full canvas so that the canvas width and height match the image width and height. This is the most common use case for IIIF images.

![Diagram showing painting of an image on to a canvas.](day-three/BL-Audio/imgs/IIIF_AV_EuropeanWorkingGroup1.png)

In the following example you can see two images are painted onto one canvas. One image is the background manuscript and the second image is the illustration. The background manuscript image is `painted` on to the canvas and matches the canvas height and width. The Illustration is `painted` on to a particular region of the canvas so that it appear in the correct place. 

![Alt text](day-three/BL-Audio/imgs/IIIF_AV_EuropeanWorkingGroup2.png)

The support for AV in IIIF entailed the addition of duration to the canvas. Now a canvas can have a height, width and duration. Different dimensions are needed for different content types i.e:

 * Images required width and height
 * Audio only files require duration
 * Video files required width, height and duration

![Alt text](day-three/BL-Audio/imgs/IIIF_AV_EuropeanWorkingGroup3.png)

With the canvas example below we have an canvas duration of 10 seconds. We can now `paint` an image on to the canvas and set it for a duration of 10 seconds so it will show for the full duration of the canvas. 

![Alt text](day-three/BL-Audio/imgs/IIIF_AV_EuropeanWorkingGroup4.png)

We can also `paint` a video on to the canvas and in the example below it is painted on a particular region of the canvas and set to play starting at second 4 and finishing at second 7. 

![Alt text](day-three/BL-Audio/imgs/IIIF_AV_EuropeanWorkingGroup5.png)

You can keep on adding images, videos and text to create a complicated canvas. The examples above where developed during the discussions on adding AV and a prototype presentation of this canvas can be seen at the following URL:

https://tomcrane.github.io/fire/

The method for `painting` an image, audio or video resource on to a IIIF canvas is done through an annotation. If we look at the following example where we can assume the body of the annotation is an audio recording. We can see the `target` points to the canvas ID and adds `#t=00.00,182.88` to the end of the canvas id. This means the body (audio resource) is painted on to the canvas from the start (second 00.00) to the end (second 182.88). In this case the `target` points to the full duration of the canvas so the addition of the `#t=00.00,182.88` isn't necessary as if the target points to the canvas id then it is assumed to cover the full duration of the canvas. 

```
{
    "id": "https://api-beta.bl.uk/metadata/iiif/ark:/81055/vdc_100140656320.0x000004/anno1/1",
    "type": "Annotation",
    "motivation": "painting",
    "target": "https://api-beta.bl.uk/metadata/iiif/ark:/81055/vdc_100140656320.0x000004#t=00.00,182.88",
    "body": [ ... ]
}
```

Note if the audio resource in the body is longer than the time specified in the canvas it should be played faster and if the audio resource is shorter than the target region then it should be played slower to fit the desired duration. 

## Working example

Using one of the example NLW video files I created a manifest using the Digirati Manifest editor and then added a few fields that weren't supported by the editor. You can see the manifest below:

[Example AV Manifest](av-manifest.json)

Important features:
 * Bilingual metadata
 * Navdate: `"navDate": "1982-11-21T00:00:00Z",`
 * requiredStatement and rights
 * homepage pointing to Clip website
 * provider linking to NLW
 * VTT files

To view this in a number of viewers you can click on the following links:

 * [Universal Viewer](https://uv-v4.netlify.app/#?c=&m=&s=&cv=&manifest=https://training.iiif.io/nlw-workshop/av-manifest.json)
 * [Mirador](https://projectmirador.org/embed/?iiif-content=https://training.iiif.io/nlw-workshop/av-manifest.json)
 * [Clover](https://samvera-labs.github.io/clover-iiif/docs/viewer/demo?iiif-content=https://training.iiif.io/nlw-workshop/av-manifest.json)
 * [Ramp](https://ramp.avalonmediasystem.org/?iiif-content=https://training.iiif.io/nlw-workshop/av-manifest.json)
 * [Avery](https://iiif.aviaryplatform.com/player?manifest=https://training.iiif.io/nlw-workshop/av-manifest.json)
 * [Theseus](https://theseusviewer.org/?iiif-content=https://training.iiif.io/nlw-workshop/av-manifest.json)