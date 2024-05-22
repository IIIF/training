
## Exercise
Now that we've had a chance to talk about the image API, we going to start building.

The goal here is to use simple html to build a web page(s) that display your images and provide your user with a way to navigate those images.


### 1. Creating an Image Table of Contents Page

1. Let's create a folder called `myProject`
1. Inside this folder create a file called `index.html`
1. Inside `index.html` let's add some dummy content to make sure things are working. Like so:
    ```html
      <html>
        <head>
        </head>
        <body>
          <h1>Hello world. Welcome to my custom image viewer.</h1>
        </body>
      </html>
    ```
1. To see that this is working, open the index.html page in your browser.
1. Your index page is going to be your inventory, catalogue, or table of contents page. 
   * From here your users can get an overview of the collection and then navigate to other pages dedicated to each picture.
1. So let's start modifying our index page with a simple list of our images
    ```html
        <body>
          <h1>Table of contents</h1>
          <ul>
            <li>Image1</li>
            <li>Image2</li>
            <li>Image3</li>
            <li>Image4</li>
            <li>Image5</li>
          </ul>
        </body>
    ```
1. Right away we can use the IIIF image API and our understanding of the URL schema to send our users directly to our images by adding link tags with a target url.
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
1. After adding links, refresh your browser page. Do you see the list of links. When you click on the link are you taken to the IIIF image? If so great!
1. Let's start thinking about how we can do more. 
   1. Before a user leaves an index page, it's nice to give them a preview of where the link takes them. 
   2. In this case, it might be nice to give them a preview of the image before they decide to use leave the main index page.
   3. This a great use case for the IIIF Image API.
   4. So instead of just providing links, let's provide image thumbnails.
1. As we add the image element inside the link, notice that we need to change the image size. We don't the user have to load the entire image from the server just to see a tiny preview. Instead let's just request size we need
    ```html
      <li>
        <a href="https://loris2.scta.info/sorb/S100r.jpg/full/full/0/default.jpg">
          <img src="https://loris2.scta.info/sorb/S100r.jpg/full/100,/0/default.jpg">
          Image1
        </a>
      </li>
    ```
1. If you want to view a working example at this point, see [example 1](custom-viewer-demos/example1.html)

That's a great start. There's a ton more we can do here, but let's pause and create a pages to display our individual images.

### 2. Creating an Image Table of Contents Page

1. In the same `myProject` directory, let's create a file called `image1.html`
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
4. But now let's reflect a bit. How could you make this a more interesting and engaging page.
   1. Could you offer multiple perspectives on this image? 
   2. Could you include multiple images that focus in on various parts of the image?
   3. What other information do you need to add *besides images* to help your user navigate and get the most of this page?
5. Get to work. 
   1. Use the IIIF Image API url parameters to create lots of version of the same image, offering your users lots of perspectives. 
   2. Add labels and descriptions that you think will help your user.
   3. Are there any navigation links you need to add here? (E.g. "Next", "Previous", "Home")
   4. See my [image 1 example ](custom-viewer-demos/image1.html) for inspiration
6. Once you've finished one page, do a "save as" and make a new file called `image2.html` and then modify to display image 2. Do this for all five of your images.

