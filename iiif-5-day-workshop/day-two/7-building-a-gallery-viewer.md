# Building a Gallery Viewer From Scratch

## Instructions

1. Create a new directory called "MyIIIFGallery"
1. In this directory, create a new file called index.html
1. Fill your html page with a basic html template

    ```html
    <!doctype html>

    <html lang="en">
    <head>
      <meta charset="utf-8">

      <title>Add title here</title>
      <meta name="description" content="add description here">
      <meta name="author" content="add author name here">
    </head>

    <body>
      <p>Hello World</p>
    </body>
    </html>
    ```

1. View this index.html file in your browser
  * Open browser
  * File->select the index.html file
1. Alternatively, if you have node installed, install "http-server"
  * $ `npm install -g http-server`
  * Inside your project directory (e.g. MyIIIFGallery) run `$ http-sever`
  * View your site at [http://127.0.0.1:8080](http://127.0.0.1:8080)
1. Alternatively, you can also install "live-server" which will refresh your browser every time you make a change
  * $ `npm install -g live-server`
  * Inside your project directory (e.g. MyIIIFGallery) run `$ live-sever`
  * View your site at [http://127.0.0.1:8080](http://127.0.0.1:8080)
1. Now start creating your Gallery.
  * Think about the things a gallery website needs.
  * You'll need a landing page, with links, titles, and thumbnails of your images.
  * You'll need individual pages that display each image
  * Each individual page will need to display context information, (metadata, e.g. a title, description, etc) of the image in focus.
1. For basic guide to making an html page and available elements consult [https://www.w3schools.com/Html/](https://www.w3schools.com/Html/)
1. At bare minimum do the following:
  * Give your webpage a title.
    * Inside the `<body>` tag add `<h1>My Image Viewer</h1>`
  * Add a list of links to pages that will display individual images.
  * Something like the following

  ```html
    `<ul>
      <li><a href="image1.html">Link to Image 1</a></li>
      <li><a href="image2.html">Link to Image 2</a></li>
      <!-- ... add more -->
    </ul>
  ```

  * Question: How could enhance your list with "thumbnails" using the IIIF Image api.
  * A thumbnail is just and image and images can be added to an html page like so:
    * `<img src="[add path/link to the image here]"/>`
1. Now that you have a basic landing page, create the individual pages where the images will be displayed.
  * Create a file called `image1.html`
1. Add the html template again:

    ```html
    <!doctype html>

    <html lang="en">
    <head>
      <meta charset="utf-8">

      <title>Add title here</title>
      <meta name="description" content="add description here">
      <meta name="author" content="add author name here">
    </head>

    <body>
      <p>Hello World</p>
    </body>
    </html>
    ```

1. Now create a space for the image with the `<img/>` tag.
1. But this time using the IIIF API make the image big.
1. Provide some other cropped views of the image that focus on specific regions of the image
1. Make sure to add metadata.
1. What about navigation? Add links so that a user can get back to the index page or navigate to the next page.
1. If you get through these steps, start styling your gallery using CSS.
  * For a reference on CSS styles and their effects see [https://www.w3schools.com/Css/](https://www.w3schools.com/Css/)

## Discussion Questions

* What kinds of information did you find yourself wanting to have available as you tried to build your viewer?
* What kind of interactions with your images did you want to have that were difficult to achieve?
* What kinds of metadata is required for your viewer that is not necessarily visualized? E.g. How do your images relate to each other? How is that information used in your viewer?
