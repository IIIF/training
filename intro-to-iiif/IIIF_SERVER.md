# Installing a IIIF Server

Now is the part of the workshop where we get our hands dirty with the software!

## Do I need a IIIF server?

Maybe! One really cool thing about the IIIF Image API is that it provides compliance on multiple levels. One of these levels is [level 0](http://iiif.io/api/image/2.1/compliance/#level-0-compliance) which supports the ability to serve static tiles to IIIF clients. So if you need or want to pregenerate all of your tiles you can. Software like [iiif_s3](https://github.com/cmoa/iiif_s3) or [go-iiif](https://github.com/thisisaaronland/go-iiif) to pregenerate these tiles.

Of course there are always tradeoffs, and one reason you may not want to do this is for a large amount of images this may take a lot of storage space.

## Let's say you want to generate tiles on the fly

Instead of pregenerating all of our tiles, for this workshop lets generate them on the fly. To serve our images, we first need to install a IIIF server. For the purposes of this workshop, we have chosen to install the [Cantaloupe](https://medusa-project.github.io/cantaloupe) IIIF server. There are several reasons for this:

 - It seems to be the most "Workshop Safe" IIIF server with a prerequisite of only needing Java 8 installed
 - The documentation is extensive
 - It is easily configurable
