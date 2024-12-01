# Create a Video Manifest

One of the extra features of the Digirati Manifest Editor is the support of Audio or Video resources. This guide will take you through adding a Video from the Internet Archive. For IIIF videos need to be accessible as a URL to the file and the Internet Archive provides the option to download Videos and this is the link we can use.

## Find a video to embed in your Manifest

Navigate to the Internet Archive and find a video from the Movie section:

https://archive.org/details/movies

If you stick to vidoes which are listed as MPEG4 these are more likely to be supported in the current IIIF viewers. I am going to use the following example:

https://archive.org/details/twitter-1407319283122671621

and to get the link to the video I am going to right click on the MPEG4 download option and select copy link:

![Copy Video URL](imgs/ia_video.png)

For this item I get the following URL:

https://archive.org/download/twitter-1407319283122671621/1407319283122671621.mp4

or use this image from the IIIF fixtures:

https://fixtures.iiif.io/video/indiana/parliamentary/high/parliamentary-procedure-in-action.mp4

Other videos are available on the [iiif-fixtures](https://fixtures.iiif.io) site.

Now we will create the Manifest for this video.

## Creating a Video Manifest

Navigate to the editor at https://manifest-editor.digirati.services/ and click on the Create new Manifest option at the top of the page:

![Manifest Editor Splash Screen](imgs/CreateEmptyManifest.png)

Now select "Start adding content" then the Video Annotation.

![Add video annotation](imgs/video-service-option.png)

Paste in the link to your video and scroll to the bottom of the panel and click Add Video.

![Add video](imgs/add-video.png)

Now we can view the Manifest in the Universal Viewer by clicking the Preview button. If you select the down triangle next to the Preview button you can choose a viewer like the Universal Viewer:

![Preview](imgs/preview-video.png)

Once you click the preview button you should see the following in the Universal Viewer:

![Video in UV](imgs/uv.png)

***Note***: the Internet Archive video doesn't work in Mirador due to the file format not being supported. 