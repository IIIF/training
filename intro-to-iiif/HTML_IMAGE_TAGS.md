# HTML Image Tags

The IIIF Image API exposes images in robust way. These images can be used in a variety of ways, the simplest is just an HTML image tag.

<iframe width="100%" height="300" src="//jsfiddle.net/mejackreed/r3a5ayhe/2/embedded/html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Let's take a look at that image uri and what is going on. [IIIF Image Request URI Syntax](http://iiif.io/api/image/2.1/#image-request-uri-syntax)

```javascript
https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/1015,1460,799,824/pct:50/0/default.jpg
```

| Part of URI | IIIF parameter |
| -- | -- |
| https | {scheme} |
| stacks.stanford.edu | {server} |
| image/iiif | {prefix} |
| hg676jb4964%2F0380_796-44 | {identifier} |
| 1015,1460,799,824 | {region} |
| pct:50 | {size} |
| 0 | {rotation} |
| default | {quality} |
| jpg | {format} |


Using this parameter manipulation you can modify how images should be displayed in an HTML image tag.

One thing to note here, is that not all compliant IIIF Image Servers can handle all of these parameters. This information is given to a IIIF consumer via the `info.json` response and the [compliance level](http://iiif.io/api/image/2.1/compliance/) of the IIIF server.

IIIF image uris can also be inserted into CSS or stylesheets. An example of this is in the software [Spotlight](https://github.com/projectblacklight/spotlight) where the exhibit mastheads have a background image that is served from a IIIF server.

[![spotlight masthead](images/spotlight_masthead.png)](https://exhibits.stanford.edu/fitch)

See how there is a similar looking IIIF url in the style attribute? Checkout that masthead image by [visiting it directly](https://exhibits.stanford.edu/images/44/0,37,1334,133/1800,180/0/default.jpg).

```html
<div class="masthead image-masthead ">
    <span class="background-container" style="background-image: url('https://exhibits.stanford.edu/images/44/0,37,1334,133/1800,180/0/default.jpg')"></span>
    <span class="background-container-gradient"></span>
  ...
</div>
```
