
## Launching Your Own Image Server

So, far we've seen some ways to get our images online and IIIF accessible with minimal effort. This is great for small or personal projects.

At the same time, we also need to think about solutions that scale. If your working on a project with thousands of images or your working at large institution with large repository of images, we need to think about a different solutions. 

Setting up your own image server means a little more set up time and it means that you're responsible for keeping this server running and maintained.

But it has the advantage of being scalable. Once set up, it allows you to server thousands images and easily add more.

In this section, we're going to see what it looks like to set up such server. You may or may not be responsible for setting up such a server, but it's good to see how it is done. This will help you work with project partners and help you see that setting up such a server isn't actually that difficult. :)

First let's just take a look at the [Cantaloupe Landing Page](https://cantaloupe-project.github.io/) to get a glimpse of what it can do.

We can notice things here like 

* authorization policy
* watermarking
* customizable images sources (e.g. AWS S3, etc)


If you're going to be responsible for serving images at scale or at the institutional level, then familiarity with images servers like Cantaloupe is important.

## Installing Cantaloupe

So in this exercise, we're going to walk through setting up and running Cantaloupe.

There actually aren't that many steps to getting it up and running. But we can also look at few of the configuration properties to see how it can be modified and customized to meet various needs.

I've created two paths for installation. 

1. You can run this locally on your own computer (recommended so that you can really be in control of the process)
2. Or you can launch a github codespace instance that I have pre-configured (recommended if you don't have Java installed on your computer)

### Running Cantaloupe on Your Local Computer

To start you need to download the Cataloupe build. [Download Cantaloupe v5.0.6](https://github.com/cantaloupe-project/cantaloupe/releases/download/v5.0.6/cantaloupe-5.0.6.zip)

Go to your downloads folders

Unzip the download and you should have a new folder called `cantaloupe-5.0.6`.

Open `cantaloupe-5.0.6` in vscode.

In this folder, there should be a file called `cantaloupe.properties.sample`. Create a copy of this, called `cantaloupe.properties`

We will modify some properties here in a moment, but the default properties should be enough to get the instance working.

In vscode go to the terminal and run: 

`$ java -Dcantaloupe.config=./cantaloupe.properties -Xmx2g -jar Cantaloupe-5.0.6.jar`

Now navigate to [http://127.0.0.1:8182???](http://127.0.0.1:8182???) in your browser.

### Running Cantaloupe in Code Spaces

Via github code spaces, I've configured a computer that already has Cantaloupe downloaded and installed. 

So all you have to do is launch this computer in your browser here. 

And then run cantaloupe. 

In the browser based vscode, go to the terminal and run: 

`$ java -Dcantaloupe.config=./cantaloupe.properties -Xmx2g -jar Cantaloupe-5.0.6.jar`

Follow the Code Space prompts to view your working instance in browser.

## Configuring Cantaloupe

We won't explore all the ways you can configure Cantaloupe, but let's make a few changes so we can get a sense of what's possible. 

### Adding Your Own Images
### Basic Auth
### Water Marks
### AWS S3 Connection

<!-- 
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

Save the file. -->

<!-- ### Run Cantaloupe

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

 -->
