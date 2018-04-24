# Building a Simple Image Viewer (Day II Morning Session)

## Goals
Our goal this morning is twofold.

* First we want to begin building a web environment where we begin to the IIIF API in real world web pages.

* Second, in the process of building such a page, we want to begin to see organically the need for or the desirability of the IIIF presentation API.

## Activity Description

To achieve this, our goal this morning is to begin building our own rudimentary image viewer or image focused webpage, that provides a public viewing space for the images that you made IIIF compliant yesterday.

## Instructions

* Create a new directory called "MyIIIFViewer"
* In this directory, create a new file called index.html
* Fill your html page with a basic html template

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

* View this index.html file in your browswer
* Alternatively, if you have node installed, install "live-server"
  * $ npm install -g live-server
  * then, in the MyIIIFViewer directory run $ live-sever

* Now start creating a viewer
* Give your webpage a title
  * `<h1>My Image Viewer</h1>`
* Add some Images
  * `<img src="iiif-compliant-url-to-image"`
* Add some rotated images, add some cropped images
* Create a new page, "page2.html" and repeat above steps to add a new image
* Add links connecting pages.
* Add some javascript to change images based on query parameters
  * See example below

```html
<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Add title here</title>
  <meta name="description" content="add description here">
  <meta name="author" content="add author name here">
</head>

<body>

  <p>My Image Viewer</p>
  <div style="display: flex; justify-content: space-between;">
    <ul>
      <li><a
        href="?imageUrl=http://images.hellokids.com/_uploads/_tiny_galerie/20130414/the-moomin-coloring-pages-3_7ua_source.jpg&title=Moomin%20In%20Love&createdBy=Jeff">Moomin In Love</a></li>
      <li><a href="?imageUrl=https://cdn.shopify.com/s/files/1/0713/7997/products/t-shirts-little-my-t-shirt-moomin-characters-2_768x.png&title=Angry%20Moomin&createdBy=Bob">Angry Moomin</a></li>
    </ul>

    <img id="myImage"/>
    <ul id="metadata">
  </div>

  </ul>

  <script>
  function getUrlVar() {
      var result = {};
      var location = window.location.href.split('#');
      var parts = location[0].replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          result [key] = value;
      });
      return result;
    }

    var imageUrl = getUrlVar()['imageUrl'];
    var imageElement = document.getElementById("myImage")

    imageElement.setAttribute("src", imageUrl);
    var values = getUrlVar();
    var i;
    console.log(values)
    for (var key in values){
    console.log(key, values[key])
    var metadataElement = document.getElementById("metadata")
    var item = document.createElement("li")
    var text = document.createTextNode(key + ": " + decodeURIComponent(values[key]))
    item.appendChild(text);
    metadataElement.appendChild(item);

    }


  </script>

</body>
</html>
```

## Discussion Questions

* What kinds of information did you find yourself wanting to have available as you tried to build your viewer?
* What kind of interactions with your images did you want to have that we're difficult to achieve?
* What kinds of metadata is required for your viewer that is not necessarily visualized? E.g. How do your images relate to each other? How is that information used in your viewer?

## Break

## Introduction to Image Libraries.
