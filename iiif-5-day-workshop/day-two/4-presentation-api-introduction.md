# Presentation API Deep Dive

## Introduction

Let's consider a couple of points that hopefully came to mind during yesterday's experiments with image viewers. They'll help to explain why something like the IIIF Presentation API exists:

1) Image viewers need more than just images.
Specific kinds of metadata are needed to orchestrate a user's interaction with a set of images; otherwise the experience is the same as running a slideshow from your photo app on shuffle. It's important to be able to specify things like the order of the images, the ways individual images should be used, metadata about the object(s) represented by a set of images, metadata about individual images, etc.

2) Image viewers are hard to build and can be difficult to configure, especially if every viewer has a different way of being "hooked up" to a specific set of images. This was pretty much the way things were before IIIF. The IIIF community recognized this problem and proposed standardizing the data that any image viewer would need. Because viewer applications and the actual images/metadata they work with can be separated, it's possible to re-use the same image viewer on many different image sets, as long as the image metadata is structured according to a standard (i.e., a set of rules) that the image viewer understands. The IIIF Presentation API is precisely this standard, and a IIIF compliant viewer is an image viewer that understands and knows how to display data that is structured according to these rules.

Today, we're going to look at the "guts" of this standard to learn how to structure our data according to the rules of the IIIF Presentation API.

First, let's look at the conceptual model of the IIIF Presentation API. After that, we'll begin building a "manifest" -- IIIF's main presentation metadata container.
