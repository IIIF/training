
## Exercise

Now that we've had a chance to talk about the image API, we're going to start building.

The goal here is to use simple `html` to build a web page(s) that display your images and provide your user with a way to navigate those images.

### Capturing Some Demo Images

Since we haven't yet placed any of our images on a IIIF server, we're going to use some demo image to start with. 

For the time being, pick 5 images from the following that you want to use as your demo images: 

* https://iiif.archive.org/image/iiif/3/100-3222%2F100_3222.jpg/full/max/0/default.png
* https://loris2.scta.info/sorb/S100r.jpg/full/full/0/default.jpg/full/full/0/default.jpg
* https://iiif.archive.org/image/iiif/3/GadoImages63465%2Ftoupload.jpg/full/max/0/default.png
* https://iiif.archive.org/image/iiif/3/PLAN-PIA00123%2FPIA00123.jpg/full/max/0/default.png
* https://ids.lib.harvard.edu/ids/iiif/43182083/full/full/0/default.jpg
* https://iiif.bodleian.ox.ac.uk/iiif/image/e58b8c60-005c-4c41-a22f-07d49cb25ede/full/full/0/default.jpg
* https://iiif.irht.cnrs.fr/iiif/France/Ch%C3%A2teauroux/Bibliotheque_municipale/B360446201_MS0005/DEPOT/B360446201_MS0005_0008/full/full/0/default.jpg
* https://iiif.durham.ac.uk/iiif/trifle/32150/t1/m4/q7/t1m4q77fr328/ad595a0a804a6eba1a7428f8ad89cfb3.jp2/full/256,/0/default.jpg
* https://iiif.archive.org/image/iiif/3/dr_atlantic-ocean-00104014%2F00104014.jpg/full/max/0/default.png
* https://iiif.archive.org/image/iiif/3/3110282571_8297688a9c_o%2F3110282571_8297688a9c_o.jpg/full/max/0/default.jpg
* https://iiif.archive.org/image/iiif/3/5530700036_ce54cf64b6_o%2F5530700036_ce54cf64b6_o.jpg/full/max/0/default.jpg
* https://iiif.archive.org/image/iiif/3/5229658490_619b3580ed_o%2F5229658490_619b3580ed_o.jpg/full/max/0/default.jpg

Once we've put our own images on a IIIF server, you can replace the URLs for these demo images with your own. 

* Advanced Pro Tip

Every image on archive.org is available via IIIF. See [https://iiif.io/guides/guides/archive.org/](https://iiif.io/guides/guides/archive.org/). 

If you're interested in using an image from archive.org, find the resource ID in the URL (see the example ID in bold below)

https://archive.org/details/**dr_atlantic-ocean-00104014**

Take that ID and insert it into the following url pattern 

https://iiif.archive.org/iiif/3/**dr_atlantic-ocean-00104014**/manifest.json

In the json response, scroll down to find the item service block and copy the value of the id property. In the example below, the relevant image base url is: **https://iiif.archive.org/image/iiif/3/dr_atlantic-ocean-00104014%2F00104014.jpg**


```
"service": [
            {
              "id": "https://iiif.archive.org/image/iiif/3/dr_atlantic-ocean-00104014%2F00104014.jpg",
              "type": "ImageService3",
              "profile": "level2"
            }
          ],
```

(We will learn how to navigate this file in more detail tomorrow, so don't worry if this is confusing right now. That's with this method is a "advanced pro tip")

### 1. Creating an Image Table of Contents Page

1. Let's create a folder called `myProject`
2. Open this folder in vscode
3. Inside this folder create a file called `index.html`
4. Inside `index.html` let's add some dummy content to make sure things are working. Like so:
    ```html
      <html>
        <head>
        </head>
        <body>
          <h1>Hello world. Welcome to my custom image viewer.</h1>
        </body>
      </html>
    ```
5. To see that this is working, open the index.html page in your browser.
   1. (You can right click on the file in vscode, copy full path, and then past that path in your browser).
6. Your index page is going to be your inventory, catalogue, or table of contents page. 
   * From here your users can get an overview of the collection and then navigate to other pages dedicated to each picture.
7. So let's start modifying our index page with a simple list of our images
    ```html
        <body>
          <h1>Table of contents</h1>
          <ul><!-- <ul> stands for unordered list -->
            <li>Image1</li> <!-- li is use for each item in the list-->
            <li>Image2</li>
            <li>Image3</li>
            <li>Image4</li>
            <li>Image5</li>
          </ul>
        </body>
    ```
8. Right away we can use the IIIF image API and our understanding of the URL schema to send our users directly to our images by adding link tags with a target url.
    ```html
        <body>
          <h1>Table of contents</h1>
          <ul>
            <li>
              <a href="https://loris2.scta.info/sorb/S100r.jpg/full/full/0/default.jpg">
                Image2
              </a>
            </li>
            <li>
              <a href="https://loris2.scta.info/sorb/S100v.jpg/full/full/0/default.jpg">
                Image2
              </a>
            </li>
            <li>
              <a href="https://loris2.scta.info/sorb/S101r.jpg/full/full/0/default.jpg">
                Image3
              </a>
            </li>
            <li>
              <a href="https://loris2.scta.info/sorb/S101v.jpg/full/full/0/default.jpg">
                Image4
              </a>
            </li>
            <li>
              <a href="https://loris2.scta.info/sorb/S102r.jpg/full/full/0/default.jpg">
                Image5
              </a>
            </li>
          </ul>
        </body>
    ```
9.  After adding links, refresh your browser page. Do you see the list of links? When you click on the link, are you taken to the IIIF image? If so great!
10. Let's start thinking about how we can do more. 
   1. Before a user leaves an index page, it's nice to give them a preview of where the link takes them. 
   2. In this case, it might be nice to give them a preview of the image before they decide to use leave the main index page.
   3. This a great use case for the IIIF Image API.
   4. So instead of just providing links, let's provide image thumbnails.
11. As we add the image element inside the link, notice that we need to change the image size. We don't want the user have to load the entire image from the server just to see a tiny preview. Instead let's just request size we need.
    ```html
      <li>
        <a href="https://loris2.scta.info/sorb/S100r.jpg/full/full/0/default.jpg">
          <img src="https://loris2.scta.info/sorb/S100r.jpg/full/100,/0/default.jpg">
          Image1
        </a>
      </li>
    ```
12. If you want to view a working example at this point, see my <a href="custom-viewer-demos/example1.html" target="_blank">index example</a>

That's a great start. There's a ton more we can do here, but let's pause and create a pages to display our individual images.

### 2. Creating an Image Table of Contents Page

1. In the same `myProject` directory, let's create a file called `image1.html`
   1. This is meant to be something like the "resource" page where user can learn about or experience the object the selected from the index page.
2. Let's set it up similar to the way we did before.
    ```html
      <html>
        <head>
        </head>
        <body>
          <h1>Image 1</h1>
          <img src="https://loris2.scta.info/sorb/S100r.jpg/full/full/0/default.jpg">
        </body>
      </html>
    ```
3. That was easy! Now we've got a page with a title that embeds the IIIF Image.
4. But now let's reflect a bit. How could you make this a more interesting and engaging page?
   1. Could you offer multiple perspectives on this image? 
   2. Could you include multiple images that focus in on various parts of the image?
   3. What other information do you need to add *besides images* to help your user navigate and get the most out of this page?
5. Get to work. 
   1. Use the IIIF Image API url parameters to create lots of version of the same image, offering your users lots of perspectives. 
   2. Add labels and descriptions that you think will help your user.
   3. Are there any navigation links you need to add here? (E.g. "Next", "Previous", "Home")
   4. See my <a href="custom-viewer-demos/image1.html" target="_blank">image 1 example</a> or <a href="custom-viewer-demos/image2.html" target="_blank">image 2 example</a> for inspiration.
6. Once you've finished one page, do a "save as" and make a new file called `image2.html` and then modify to display image 2. Do this for all five of your images.

### 3. Reflection

* What kind of NON-image data do you need to make your “viewer” work?
* What kind of labels and descriptions do you need?
* What kind of data relationships are needed in order to make it work?
  * (For example sequence: what comes first, what comes last, what comes next?)
* What were the pain points of making an image viewer this way?
  * What felt repetitive?
  * Were there features you built that you wanted to re-use but couldn't? How come?
  

