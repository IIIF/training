# NLW AV Examples

IIIF works with AV content that is made available in the following ways:

 * It must be made available over https
 * IIIF needs direct access to the video file (i.e. no youtube)
 * For speed of access support for [HTTP range requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests) is recommended 
 * IIIF does support adaptive bitrate streaming via HLS protocol 
 * Provides [CORS headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) 

The examples below are stored on Amazon s3 which supports HTTP range requests, https and the appropriate CORS headers. The width, height and duration in seconds can be worked out by using the following command:

```
ffprobe -v error -select_streams v:0 -show_entries stream=width,height,duration -of json "your-video-file.mp4"
{
    "programs": [

    ],
    "stream_groups": [

    ],
    "streams": [
        {
            "width": 1920,
            "height": 1080,
            "duration": "449.120000"
        }
    ]
}
```

## Interview with Mike England and Ian Rush

 * [video](https://iiif.gdmrdigital.com/nlw/2025/training/aohaa00000132.mp4)
 * [Clip Link](https://clip.library.wales/detail/318292?published=published_public&terms=rush&sorting=DESC&results=12&viewmode=grid)
 * **Duration:** 449.12 
 * **Width:** 1920
 * **Height:**  1080

## Interview with John Neal (Wrexham) and John Charles (Merthyr Tydfil)

 * [video](https://iiif.gdmrdigital.com/nlw/2025/training/aohaa00000133.mp4)
 * [Clip Link](https://clip.library.wales/detail/318293?published=published_public&terms=wrexham&sorting=DESC&results=12&viewmode=grid)
 * **Duration:** 187.00
 * **Width:** 1920
 * **Height:**  1080

## Swansea City – Interview with manager John Toshack

 * [video](https://iiif.gdmrdigital.com/nlw/2025/training/aohaa00000134.mp4)
 * [Clip Link](https://clip.library.wales/detail/318294?published=published_public&terms=football&page=1&sorting=DESC&results=12&viewmode=grid)
 * **Duration:** 130.28
 * **Width:** 1920
 * **Height:**  1080

## Wrecsam yn sicrhau dyrchafiad i'r Ail Adran

 * [video](https://iiif.gdmrdigital.com/nlw/2025/training/aohaa00000135.mp4)
 * [Clip Link](https://clip.library.wales/detail/318295?published=published_public&terms=wrexham&page=1&sorting=DESC&results=12&viewmode=grid)
 * **Duration:** 174.44
 * **Width:** 1920
 * **Height:**  1080

## Wrexham training on the Racecourse ground

 * [video](https://iiif.gdmrdigital.com/nlw/2025/training/aohaa00000136.mp4)
 * [Clip Link](https://clip.library.wales/detail/318296?published=published_public&terms=wrexham&sorting=DESC&results=12&viewmode=grid)
 * **Duration:** 124.76
 * **Width:** 1920
 * **Height:**  1080

## Swansea City promoted to the Third Division

 * [video](https://iiif.gdmrdigital.com/nlw/2025/training/aohaa00000137.mp4)
 * [Clip Link](https://clip.library.wales/detail/318297?published=published_public&terms=swansea&sorting=DESC&results=12&viewmode=grid)
 * **Duration:** 255.32
 * **Width:** 1920
 * **Height:**  1080
