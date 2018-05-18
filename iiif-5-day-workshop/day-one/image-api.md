# IIIF Image API

## Overview

The Image API provides for a standardized way to request and deliver images. Having this standardization allows both browser and server applications to reuse software and provide a consistent experience for requesting images.

Here is an example of requesting an image with the Image API:

`https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/full/pct:10/0/default.jpg`

[![](https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/full/pct:10/0/default.jpg)](https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/full/pct:10/0/default.jpg)

This IIIF Image API request is asking for the `full` image from our server, at `pct:10` (10%) of its original size.

Now lets say we just want to return a certain part of that image, a crop. The IIIF Image API lets us do that too.

`https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/1015,1460,799,824/pct:25/0/default.jpg`

[![](https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/1015,1460,799,824/pct:25/0/default.jpg)](https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/1015,1460,799,824/pct:25/0/default.jpg)

That IIIF Image API request looks similar to the first one, but we now are requesting a specified pixel region `1015,1460,799,824` instead of the full image and we increased the size returned to `pct:25` (25%).

```diff
- https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/full/pct:10/0/default.jpg
+ https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/1015,1460,799,824/pct:25/0/default.jpg
```

If you want to play around with changing these parameters, check out the [IIIF Image API Playground](https://www.learniiif.org/image-api/playground).
