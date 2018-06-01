# Building a Simple Image Viewer (Day II Morning Session)

## Goals
Our goal this morning is twofold.

* First we want to begin building a web environment where we can begin to the use IIIF image API in real world web pages.

* Second, in the process of building such a page, we want to begin to see *organically* the need for the IIIF presentation API.

## Activity Description

To achieve this, our goal this morning is to begin building our own rudimentary image viewer or image focused webpages: pages provide a public viewing space for the images that you made IIIF compliant yesterday.

This will be the beginning of building a personal project that we will return to all week. By the end of the week, our goal is to connect (via links) all of our personal projects, producing a collective projects that represents the achievement of our week together.

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

* View this index.html file in your browser
  * Open browser
  * File->select the index.html file
* Alternatively, if you have node installed, install "live-server"
  * $ npm install -g live-server
  * then, in the MyIIIFViewer directory run $ live-sever

* Now start creating a viewer
* Give your webpage a title
  * `<h1>My Image Viewer</h1>`
* Add some Images
  * `<img src="iiif-compliant-url-to-image">`
* Add some rotated images, add some cropped images
* Create a new page, "page2.html" and repeat above steps to add a new image
* Add links connecting pages.
  * `<a href="filename.html">Name of link to new page</a>`
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
      <li>
        <!-- change the value of these image links to the url of an image from your server -->
        <a
        href="?imageUrl=http://images.hellokids.com/_uploads/_tiny_galerie/20130414/the-moomin-coloring-pages-3_7ua_source.jpg&title=Moomin%20and%20Snork%20Maiden&createdBy=Jeff">Moomin Troll and Snork Maiden</a></li>
      <li>
        <!-- change the value of these image links to the url of an image from your server -->
        <a href="?imageUrl=https://cdn.shopify.com/s/files/1/0713/7997/products/t-shirts-little-my-t-shirt-moomin-characters-2_768x.png&title=Little%20My&createdBy=Bob">Little My</a></li>
    </ul>
    <img id="myImage"/>
    <ul id="metadata">
    </ul>
  </div>

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
* What kind of interactions with your images did you want to have that were difficult to achieve?
* What kinds of metadata is required for your viewer that is not necessarily visualized? E.g. How do your images relate to each other? How is that information used in your viewer?

## Break

## Introduction to Image Libraries.

### Openseadragon

## Activity Description

In this activity we want to start combining IIIF we re-usable libraries that allow us to do more advanced things. In this activity we are going to add the library openseadragon.js to a basic webpage and provide it with information from a IIIF server that it can use to display images.

#### Instructions

* Create a new html page (e.g. seadragon-demo.html)
* Add the Seadragon Library
  * `<script
    src="https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.3.1/openseadragon.min.js" type="text/javascript"></script>`
* Add jquery libary (so you can easily request other files, such as info.json file)
  * `<script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>`
* Add an empty div for the openseadragon to create a view port
  * `<div id="myImage" style="width: 400px"></div>`
* Create a basic openseadragon object

```javascript
  const imageurl = //path to info.json file
  $.get(imageUrl, function(infojson){
  // get tile from infojson and pass them to openseadragon
  infojson["tiles"] = [{"scaleFactors": [1, 2, 4, 8], "width": 300}]
    var viewer = OpenSeadragon({
      id: "myImage",
      tileSources: [infojson]
    });
  });
```


### Leaflet

#### Activity Description

In this activity, we're going to repeat the above task with a different library called leaflet-iiif.js

#### Instructions
