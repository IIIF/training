# Setting up Cantaloupe IIIF Image Server

Make sure you have [installed the prerequisites](../prerequisites.md).

## Download Cantaloupe

For more information, checkout the [Cantaloupe getting started guide](https://cantaloupe-project.github.io/manual/4.1/getting-started.html).

Download [Cantaloupe v4.1.3](https://github.com/cantaloupe-project/cantaloupe/releases/download/v4.1.3/cantaloupe-4.1.3.zip)

Open and extract the zip file to your directory of choosing. We suggest `~/iiif-workshop`.

Now change directory to that extracted directory

```sh
cd ~/iiif-workshop/Cantaloupe-4.1.3
```

## Configure Cantaloupe

Now lets create a copy of the configuration file:

```sh
cp cantaloupe.properties.sample cantaloupe.properties
```

Now lets enable the admin panel where we will modify the rest of the settings.

Scroll to line 104, and change `false` to `true`. Also add a password.

```diff
# Enables the Control Panel, at /admin.
- admin.enabled = false
+ admin.enabled = true
- admin.secret =
+ admin.secret = yolo
```

Save the file.

Now lets try and start the server. Run this command from your Cantaloupe directory

```sh
java -Dcantaloupe.config=./cantaloupe.properties -Xmx2g -jar Cantaloupe-4.1.3.war
```

Now navigate to [http://127.0.0.1:8182/iiif/2](http://127.0.0.1:8182/iiif/2) in your browser.

You should see this:

![server image](../images/cantaloupe/cantaloupe-image.png)

Congrats you successfully installed Cantaloupe!

### Troubleshooting

If you don't see the screen above there are a few common problems that people have come across:

 * Lack of memory. You may see something like the following when you run the Cantaloupe java command:

```
Error occurred during initialization of VM
Could not reserve enough space for 2097152000000KB object heap
```

to fix this change the `-Xmx` parameter to something smaller e.g:

```
java -Dcantaloupe.config=./cantaloupe.properties -Xmx1g -jar Cantaloupe-4.1.3.war

```
 * Spaces in Windows. If you are using Windows ensure that there are no spaces in the directories above the Cantaloupe directory. 

## Admin panel

Also make sure you can get into the admin panel by navigating to [http://127.0.0.1:8182/admin](http://127.0.0.1:8182/admin).

Use the username `admin` and the password you set previously.

![admin panel](../images/cantaloupe/cantaloupe-admin.png)

# Configuring Cantaloupe to use your images.

Congrats now you have your image server up and running! We need to feed it some images to keep it happy!

## Download some images

Go ahead and download a `*.jpg` image from the Internet into your Cantaloupe directory `Cantaloupe-4.1.3`. Here is one [eddie.jpg](https://github.com/sul-cidr/histonets/raw/master/spec/fixtures/images/eddie.jpg) that you can use.

## Configure Cantaloupe to use the correct path

Now we need to configure Cantaloupe to use that image directory.

Navigate to the admin page [http://127.0.0.1:8182/admin](http://127.0.0.1:8182/admin).

Click on "Source", then click "FilesystemSource" tab at the bottom of the page.

Next fill in Path Prefix to be `./`

![file resolver](../images/cantaloupe/file_source.png)

and click `Save`.

## Check it out in the browser

Now you should be able to navigate to an image's info.json response successfully.

Checkout [http://127.0.0.1:8182/iiif/2/eddie.jpg/info.json](http://127.0.0.1:8182/iiif/2/eddie.jpg/info.json)

And if everything goes right, you should see an `info.json` response.

![info json](../images/cantaloupe/info_json.png)

Let's finally check it using the Leaflet-IIIF image api viewer.

Try this url: [http://mejackreed.github.io/Leaflet-IIIF/examples/?url=http://127.0.0.1:8182/iiif/2/eddie.jpg/info.json](http://mejackreed.github.io/Leaflet-IIIF/examples/?url=http://127.0.0.1:8182/iiif/2/eddie.jpg/info.json)

Notice how we added our local IIIF server's info.json response url as a parameter. This is used by IIIF Image API clients to understand how they can request images/tiles.

![eddie in iiif](../images/cantaloupe/eddie_iiif.png)

Cross our fingers, but you should see a picture of Eddie in a zoomable viewer.

You can also try this image with:
 * OpenSeaDragon: http://iiif.gdmrdigital.com/openseadragon/index.html?image=<url_to_info.json>
   * http://iiif.gdmrdigital.com/openseadragon/index.html?image=http://127.0.0.1:8182/iiif/2/eddie.jpg/info.json
 * UCD Image clipper: https://jbhoward-dublin.github.io/IIIF-imageManipulation/index.html?imageID=<url_to_image_id>
   * e.g. https://jbhoward-dublin.github.io/IIIF-imageManipulation/index.html?imageID=http://127.0.0.1:8182/iiif/2/eddie.jpg
