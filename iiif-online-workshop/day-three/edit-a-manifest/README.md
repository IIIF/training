# Manually Editing a Manifest
The concepts of the Presentation API can be difficult to grasp until we actually start building a manifest.

Learning by doing: In production systems (such as a digital library's image collection), manifests can get very big and are usually machine generated, but for getting the basic concepts down, there's no substitute for editing a manifest "by hand."

## Back Up Your Manifest
Make a backup copy of the Manifest you created in the last lesson.  That way you'll be sure to have a working version that you can fall back on.

## Edit Your Manifest
There are some important elements of the Manifest that we did not add or edit using the online editor.  The goal of this exercise will be to add them manually.

Use the [IIIF Presentation API documentation](http://iiif.io/api/presentation/2.1/) and hunt for answers to the following questions.

When you think you've found the answer, add it to the manifest you created.  
After each step, reload the Manifest in the Universal Viewer and confirm that the changes appear.

1. Provide a short description of this manifest -- the content is up to you.
1. Add an attribution to the manifest that names the source of the images
1. Indicate that the manifest resource has a Creative Commons 4.0 by-nc-sa license.
1. Indicate that the image for this second canvas has two facing pages and therefore when a viewer shows it in book view, it should not combine the image with an image before or after it.
1. Edit the `metadata` section and add further metadata element(s)
1. Indicate that the viewing direction of the Manifest is right-to-left

