## Annotations Exercise

Let's try out some of the concepts we talked about previously.

> This example is taken from a manifest and question Ethan Gruber of the American Numismatic Society had in the IIIF Slack.

Here is a manifest we'll use as our starting point for working with annotations (you can also find this file here: https://gist.github.com/hadro/c499d26943c45bf38eacfaed07b0a8ea)

```
{
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@id": "http://localhost:8887/coin-before.json",
  "@type": "sc:Manifest",
  "attribution": "American Numismatic Society",
  "label": "Price 3210",
  "description": "Obverse: Head of beardless Heracles right wearing lion skin headdress\nReverse: ΑΛΕΞΑΝΔΡΟΥ - Zeus seated on stool-throne left, eagle on outstretched right hand, sceptre in left hand",
  "sequences": [
    {
      "@type": "sc:Sequence",
      "label": "Default sequence",
      "canvases": [
        {
          "@id": "http://localhost:8887/coin/canvas",
          "@type": "sc:Canvas",
          "label": "[Monnaie : Tétradrachme, Argent, Damascus, Koïlé Syrie, Alexandre III Le Grand]",
          "height": 2610,
          "width": 2610,
          "images": [
            {
              "@id": "http://gallica.bnf.fr/iiif/ark:/12148/btv1b8499946f/f1",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "on": "http://localhost:8887/coin/canvas",
              "resource": {
                "label": "Obverse",
                "@id": "http://gallica.bnf.fr/iiif/ark:/12148/btv1b8499946f/f1/full/full/0/native.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 2610,
                "width": 2610,
                "service": {
                  "@context": "http://iiif.io/api/image/1/context.json",
                  "@id": "http://gallica.bnf.fr/iiif/ark:/12148/btv1b8499946f/f1",
                  "profile": "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2"
                }
              }
            },
            {
              "@id": "http://gallica.bnf.fr/iiif/ark:/12148/btv1b8499946f/f2",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "on": "http://localhost:8887/coin/canvas",
              "resource": {
                "label": "Reverse",
                "@id": "http://gallica.bnf.fr/iiif/ark:/12148/btv1b8499946f/f2/full/full/0/native.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 2610,
                "width": 2610,
                "service": {
                  "@context": "http://iiif.io/api/image/1/context.json",
                  "@id": "http://gallica.bnf.fr/iiif/ark:/12148/btv1b8499946f/f2",
                  "profile": "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2"
                }
              }
            }
          ]
        }
      ]
    }
  ]
}
```




Try it! 

Copy the manifest above and save it to your dhsi2019 folder with the filename "coin.json".

Now, to be able to view it from our local machine, we'll need a simple web server.

---

## Chrome Web Server

Go here (must do this in Google Chrome): 
https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en

Click "Launch App" if it says that in the top right (that means it's already installed, we just have to configure it); Click "Add to Chrome" if it's not installed already. Once it's installed, click the link and then click "Launch App"

Where it says "Choose Folder", use that dialog window to select your "dhsi2019" folder on your computer. Once that's done, the Chrome Web Server console should read "Current: /dhsi2019"

Click "Advanced Settings", and make sure "Set CORS headers" has a blue check next to it.

Now the Web Server running in chrome should be all set up. 

## Viewing our coin manifest

If you click this link, you should then see a web page that lists the contents of that folder in the browser:
http://127.0.0.1:8887/

Make sure you copied the [above manifest](https://gist.githubusercontent.com/hadro/c499d26943c45bf38eacfaed07b0a8ea/raw/0962500ab9d0d220d7177c5155ef9eccd0095f40/coin-before.json) into a file named “coin.json” in your "dhsi2019" folder, wich you’re using for your web server.

Make sure you can open the JSON at http://localhost:8887/coin.json

Open this link in a new tab: [LINK](./mirador.html) 
This is a hosted version of Mirador that will work well with our annotations exercise. Keep this tab open with Mirador in it as we work through manifest and annotation exercises below (you may need to refresh the tab when loading a new manifest, or if you've changed the manifest since you last loaded it).

Copy the link to your coin manifest: http://localhost:8887/coin.json
In the Mirador tab, click "AddItem". In the top right, where it says "addNewObject", paste the URL to your coin manifest there. You should see it added to the top of the list just below. Click on the coin thumbnail. 

This manifest already has two images on the single canvas. When you view it in Mirador only one shows up. The last image annotated onto the canvas covers over the the first image.

To see the other side of the coin open up the layers panel in Mirador and turn off the visibility of the second image. The layers panel is the icon to the left of where it says "Price 3210", the three horizontal lines.

Here’s a video of what this ought to look like:
http://ronallo.com/iiif-workshop-new/video/coin-before.mp4

## Modifying the Manifest

We now want these to show up side-by-side on the same canvas. As you make changes you may need to reload the Mirador page and re-add the coin.json manifest back into Mirador.

To make the coin faces side by side, you’ll need to do two things:

- Change the dimensions of the canvas so that it can hold two images that are each 2610 pixels wide by 2610 pixels high.

> What’s the width of the canvas needed to hold both images side-by-side?
> Where in the coin.json manifest do you need to change that value for the canvas?

- Annotate each image onto a region of the canvas.

> Change the `on` property to include information for where on the canvas the image ought to be placed. A fragment needs to be added to this URI to indicate the right portion of the canvas.

>Consider taking a piece of paper to sketch out the layout and do the math. Note that counting pixels starts a zero.


## Answer

> The width of the final canvas should be 5220 pixels wide.

> The first image should be off to the left and the second image to the right using these values at the end of the on parameter for each image.
- first image: #xywh=0,0,2610,2610
- second image: #xywh=2610,0,2610,2610

Compare your coin manifest to the [final manifest here](
https://gist.githubusercontent.com/hadro/ccccd581071e948086c8a6200f951d9f/raw/dd0a1b80c9387e5391e8d433b569d306c136bc67/coin-after.json
). If you like, copy that JSON and save it as “coin.json” and load it into Mirador again (remember that you will have to turn on the layers to see the images, but now, when you turn each one on in turn, they should appear side by side)

In the end you ought to see something like the following:

![Full coin example](http://ronallo.com/iiif-workshop-new/images/coin-side-by-side.png)


## Adding an Annotation List

Copy the text of this annotation list template and save it as a new file called "annotation-list.json" in your dhsi2019 folder:
https://gist.github.com/hadro/4c6f2eab360813f7f9eb59eac4393b62

This annotation list contains just one text annotation at this point, and specifies a box around Zeus's head.

We need to do one more thing to get this annotation list to work -- add in a reference to it in our coin manifest.

We do this via an element called "otherContent", which is a way of including annotations that are not additional images we're painting onto the canvas.

An example looks like this:

```json
          "otherContent": [
            {
              "@id": "http://localhost:8887/annotation-list.json",
              "@type": "sc:AnnotationList"
            }
          ]
```

This goes after line 60 if you're using our coin manifest; make sure you add a comma after the end of the "images" list. What that does is simply tell the viewer that there is additional information in the form of an annotation list, and that it should look for the list at the URI identified in "@id".

Look at your coin manifest here, and see if the "otherContent" appears in the right place (after the "images" section): 
http://localhost:8887/coin.json

(If that isn't working, try comparing to this finalized coin manifest and see if you can diagnose: https://gist.github.com/hadro/5ae8fbae0301c6589e5f8db42ef25681 or copy and paste that manifest content to continue to the next part.)


If that looks right, try adding that manifest again into the Mirador tab you have open ([Here's the link](./mirador.html) if you need it again). Now, after you turn on the layers again, click the icon that looks like speech bubbles in the upper left side of the screen. You should see an annotation box appear aroun Zeus's head on the right side of the image!

## Adding Annotations

Now we're going to extend that annotation list to add another one or more text annotations to our canvas. 

We've already got an annotation box around Zeus's head. Next, we're going to create an annotation around the eagle in Zeu's right hand.

To start, we need to add another resource to our resource list in the annotation-list.json file. 

From that file, copy lines 6-16 to your clipboard.

Then add a comma line 16, and hit return for a new line. 

Paste the contents of your clipboard. You should now have two identical sections within the "resources" element.

Now that we've done that, think through what we need to change in this second annotation resource section to accomplish this.

Make a note of the line numbers you think need to be updated to make a new annotation work. 

Answer: At the least, we need to update: 
- Line 18 (the "id" of the new annotation)
- Line 24 (the "chars" or character content of the annotation)
- Line 26 (the fragment at the end of the "on" resource which tells Mirador where to draw the box)

Line 18 needs to have a unique "id", so you can just update the last character to 2 instead of 1. 

Line 24 should describe our new annotation (maybe "Eagle in Zeus's hand")

Line 26 needs new coordinates for the fragment.

To do this, you can use this tool which will show you the x, y, width, and height you need for the fragment:
https://bl.ocks.org/hadro/raw/3c0f539d61345aa6fdb6fe7a4625f161/
(Or if you want to try it on 'expert' mode, you can do it via manipulating the crop portion of the [IIIF Image API URL](https://gallica.bnf.fr/iiif/ark:/12148/btv1b8499946f/f2/full/full/0/native.jpg) directly until you find the right section you want :) )

But remember, since we've doubled the size of our canvas to include both sides of the coin, you'll have to do some math to make the numbers right for the fragment in the context of our canvas (hint: add 2610 to the x coordinate part of the fragment)

Further work to think through:

- What would you have to change to associate annotation lists with a multipage item or other kinds of manifest with more complex sequences?
- Can you have more than one annotation list? (Hint: read through what the specs say about including annotation lists)

Finally, if that's all working for you, think through then how you might incorporate annotation lists into your own manifest and projects, and in what whay they might be useful to you.


