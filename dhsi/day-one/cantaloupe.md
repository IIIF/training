
## Launching Your Own Image Server With Cantaloupe

So, far we've seen some ways to get our images online and IIIF accessible with minimal effort. This is great for small or personal projects.

At the same time, we also need to think about solutions that scale. If your working on a project with thousands of images or your working at large institution with large repository of images, we need to think about a different solutions. 

Setting up your own image server means a little more set up time and it means that you're responsible for keeping this server running and maintained.

But it has the advantage of being scalable. Once set up, it allows you to server thousands images and easily add more.

In this section, we're going to see what it looks like to set up such server. You may or may not be responsible for setting up such a server, but it's good to see how it is done. This will help you work with project partners and help you see that setting up such a server isn't actually that difficult. :)

### Download Cantaloupe

TODO: I dumped this in from an earlier presentation; needs to be updated for newest cantaloupe version and links need to be checked

For more information, checkout the [Cantaloupe getting started guide](https://cantaloupe-project.github.io/manual/4.1/getting-started.html).

[Download Cantaloupe v4.1.1](https://github.com/medusa-project/cantaloupe/releases/download/v4.1.1/cantaloupe-4.1.1.zip)

Go to your downloads folders

Unzip the download and place the contents of that folder in our `WorkshopDir` folder.

`$ unzip cantaloupe-4.1.1.zip`

Now move the extracted folder to our `WorkshopDir`

`$ mv cantaloupe-4.1.1 ~/Your/Path/To/WorkshopDir`

Now navigate to that WorkshopDir

Using the alias we set up, e.g. `$ workshop` or with your full path, e.g. `$ cd ~/Your/Path/To/WorkshopDir`

List all the files in this directory

`$ ls`

And you should see `cantaloupe-4.1.1`

### Configure Cantaloupe

Navigate into `cantaloupe-4.1.1`

`$ cd cantaloupe-4.1.1`

Create a copy of the sample configuration file

`$ cp cantaloupe.properties.sample cantaloupe.properties`

And open the file `cantaloupe.properties` in your favorite text editor.

If you're using `atom` and have installed the command line tools, you can type:

`$ atom cantaloupe.properties`

Now lets enable the admin panel where we will modify the rest of the settings.

Scroll to line 105, and change false to true. Also add a password/secret.

```
- admin.enabled = false
+ admin.enabled = true
- admin.secret =
+ admin.secret = yolo
```

We need to make one more change here.
Scroll to line 297 and change `AutomaticSelectionStrategy` to `ManualSelectionStrategy`

```
# * If set to `ManualSelectionStrategy`, a processor will be chosen based
#   on the rest of the keys in this section.
- processor.selection_strategy = AutomaticSelectionStrategy
+ processor.selection_strategy = ManualSelectionStrategy
```

Save the file.

### Run Cantaloupe

Now, start Cantaloupe

`$ java -Dcantaloupe.config=./cantaloupe.properties -Xmx2g -jar Cantaloupe-4.1.1.war`

Now let's go here:

Now navigate to [http://127.0.0.1:8182/iiif/2](http://127.0.0.1:8182/iiif/2) in your browser.

Hopefully you see:

![startupscreen](https://iiif-2-day-workshop.netlify.com/img/cantaloupe-image.png)

### Add Some Images to Cantaloupe

Now let's add some images.

First lets create a separate image directory.

Navigate to our `WorkshopDir` using our alias `$ workshop` or with your full path, e.g. `$ cd ~/Your/Path/To/WorkshopDir`

Create a new directory called images

`$ mkdir images`

Add some images.

Create at least one image called `demo.jpg`

Now, enter the admin panel by navigating to http://127.0.0.1:8182/admin.

Use the username admin and the password you set previously.

Click on Source (in the left hand panel)

Click on FilesystemSource (in the lower panel)

Change the Path Prefix to `../images/`

![screenshot](https://s3.amazonaws.com/lum-faculty-jcwitt-public/cantaloupeAdminSource.png)

### Updating Your Custom Image Viewer with your own Images.


