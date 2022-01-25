# Manually Editing a Manifest
The concepts of the Presentation API can be difficult to grasp until we actually start building a manifest.

Learning by doing: In production systems (such as a digital library's image collection), manifests can get very big and are usually machine generated, but for getting the basic concepts down, there's no substitute for editing a manifest "by hand."

## Required Software

We have tested the following bits of software and they seem to be relatively easy to install even on work machines where you do not have admin privileges. 

The first bit of software we recommend is called [Atom](https://atom.io/) and we use this to edit the JSON in the instructions below. You are welcome to use any text editor but we prefer AtoM as it has some features which makes it easier to work with JSON. 

The second bit of helpful software to install is a plugin to your browser that will format JSON so it is easier to read. The following are available for Chrome and Firefox:

 * [Firefox JSON View](https://addons.mozilla.org/en-US/firefox/addon/jsonview/)
 * [Chrome JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/aimiinbnnkboelefkjlenlgimcabobli)

## Save a Copy
Save a copy of the Manifest you created in the last lesson as `manifest2.json`.  Edit `manifest2.json` for this section.

That way you'll be sure to have a working version that you can fall back on.

## View the Manifest Copy
Load the Manifest in the [Universal Viewer](http://universalviewer.io).  The URL of the copied Manifest for this section should be http://127.0.0.1:8887/manifest2.json

## Edit Your Manifest
There are some important elements of the Manifest that we did not add or edit using the online editor.  The goal of this exercise will be to edit or add them manually.  Each task is linked to the specification for the property that you will need to edit or add to the Manifest.

1. Provide a short [description](https://iiif.io/api/presentation/2.1/#description) of this manifest -- the content is up to you.
1. Modify the [attribution](https://iiif.io/api/presentation/2.1/#attribution) to the manifest that names the source of the images
1. Add the [viewingHint](https://iiif.io/api/presentation/2.1/#viewinghint) to indicate that the item is paged (i.e., should display in two-up book reader mode)
1. Assert a Creative Commons 4.0 by-nc-sa [license](https://iiif.io/api/presentation/2.1/#license).
1. Add properties to the [metadata](https://iiif.io/api/presentation/2.1/#metadata) following the pattern described in [Language of Property Values](https://iiif.io/api/presentation/2.1/#language-of-property-values). 

Hints:
  - After each step, reload the Manifest in the [Universal Viewer](http://universalviewer.io) and confirm that the changes appear.  Remember that the URL of the Manifest for this section is http://127.0.0.1:8887/manifest2.json because you are editing the copy.
  - Consult the [sample Manifest](https://iiif.io/api/presentation/2.1/#c-example-manifest-response) in the specification to find examples of these properties.
  - If your Manifest doesn't load, first check for missing quotes or commas.
