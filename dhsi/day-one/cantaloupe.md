
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

<!-- I've created two paths for installation. 

1. You can run this locally on your own computer (recommended so that you can really be in control of the process)
2. Or you can launch a github codespace instance that I have pre-configured (recommended if you don't have Java installed on your computer) -->

### Running Cantaloupe on Your Local Computer

To start you need to download the Cataloupe build. [Download Cantaloupe v5.0.6](https://github.com/cantaloupe-project/cantaloupe/releases/download/v5.0.6/cantaloupe-5.0.6.zip)

Go to your downloads folders

Unzip the download and you should have a new folder called `cantaloupe-5.0.6`.

Open `cantaloupe-5.0.6` in vscode.

In this folder, there should be a file called `cantaloupe.properties.sample`. Create a copy of this, called `cantaloupe.properties`

We will modify some properties here in a moment, but the default properties should be enough to get the instance working.

In vscode go to the terminal and run: 

`$ java -Dcantaloupe.config=./cantaloupe.properties -Xmx2g -jar Cantaloupe-5.0.6.jar`

Now navigate to [http://127.0.0.1:8182](http://127.0.0.1:8182) in your browser.

<!-- ### Running Cantaloupe in Code Spaces

Via github code spaces, I've configured a computer that already has Cantaloupe downloaded and installed. 

So all you have to do is launch this computer in your browser here. 

And then run cantaloupe. 

In the browser based vscode, go to the terminal and run: 

`$ java -Dcantaloupe.config=./cantaloupe.properties -Xmx2g -jar Cantaloupe-5.0.6.jar`

Follow the Code Space prompts to view your working instance in browser. -->

## Configuring Cantaloupe

We won't explore all the ways you can configure Cantaloupe, but let's make a few changes so we can get a sense of what's possible. 

Most of the configuration we're going to explore consists in enabling or disabling various configuration properties. 

We've already created this configure file, called `cantaloupe.properties`

### Adding Your Own Images

Let's hook up cantaloupe to your own images. 

Find or create a new directory of images somehwere on your computer and call it `myImages`. (If you're working in codespace, you can use the sample images in the folder called `myImages` or we can help move some sample images to the codespace computer.)

Now you just need to get the full path to this image director.

* In terminal, navigate to the folder and type `$pwd`
* In finder, right click a file within the target folder, select `Get Info`, and then copy the value of the "Where" property
* In windows explorer, do something similar.

Now in the `FilesystemSource` section of the properties file, we want to change the value of `FilesystemSource.BasicLookupStrategy.path_prefix` to something that looks like this: 

`FilesystemSource.BasicLookupStrategy.path_prefix = /path/to/myImages/`

As the comments note, make sure there is a trailing slash

### Enabling the admin dashboard

Now that we've edited the properties file, let's enable the admin dashboard so we have a more user friendly way to configure the server.

Scroll down the block that says 

`# Enables the Control Panel, at /admin.`

change the value of `.enabled` to true and add temporary password like `test`

```
endpoint.admin.enabled = true
endpoint.admin.username = admin
endpoint.admin.secret = test
```

Now head over to [http://localhost:8182/admin](http://localhost:8182/admin) and use the credential to log in

Now you can continue configuring either by editing the properties file or in the web GUI.

### Overlays and Water Marks

Let's add some overlays and water marks. It might be the case that your institution has sensitive data that needs a watermark or some kind attribution statement. 

In the web GUI, head down to "overlays" 

#### String Overlay

Make sure `Basic Strategy Enabled` is checked. 

Navigate down to "Basic Strategy (String)" and type the string that you want overlayed.

Maybe something like "My DHSI Images 2024"

Now take a look at any of your served images, and you should see the overlay. 

Using the other properties you can experiment with the font size, position. 

#### Image Overlay

You can just easily overlay an image, perhaps as institutional logo that you want to accompany an image.

This can be done by changing the BasicStrategy.Type from 'String' to 'Image'

Then you need to add a .png to the Cantaloupe working directory and indicate that file path in the "Image File" property. 

So here you should change `overlay-sample.png` to `name-of-your-overlay.png` after depositing that file in the working directory.

#### Redaction

Notice at the bottom that if you had more advanced needs, like redacting certain parts of the image, this is possible as well. You would need to enable redaction and then write the instructions for which part of which image needs to be redacted. 

That's an advanced use case but it's nice to know its there.

### Serving HTTP images.

And pretty cool feature of Cataloupe is that we can serve images from other locations: for example from some web location. 

This means that if your images are already published somewhere on-line, but not yet available via the IIIF protocols, you can leave them where they are and point them at a web location. 

Cantaloupe will request those images, and then re-serve them in a IIIF compliant way. 

To see this, we need to navigate the "Source" section, and change the `StaticSource` from `FilesystemSource` to `HttpSource`

Then under `HttpSource` set the URL Prefix to a `http` url where images can be found. 

Here's an example you can use.

Here's a path to a bunch of flag images: `https://www.graphicmaps.com/r/w250/images/flags/`

At this location, several images of flags can be accessed. For example `ht-flag.jpg`, `us-flag.jpg`, `ca-flag.jpg`, `de-flag.jpg` etc. But they are not accessible via iiif.

Instead of downloading all these images and then uploading them to my cantaloupe server, I could just point Cantaloupe at the containing url location, namely: `https://www.graphicmaps.com/r/w250/images/flags/`

So take this url as the value of the `URL Prefix` property, and hit save. 

Now check out the canadian flag served as a IIIF image. 

Try rotating in 90 degrees.
[http://localhost:8182/iiif/3/ca-flag.jpg/full/max/90/default.jpg](http://localhost:8182/iiif/3/ca-flag.jpg/full/max/90/default.jpg)

Try requesting it as gray scale
[http://localhost:8182/iiif/3/ca-flag.jpg/full/max/90/gray.jpg](http://localhost:8182/iiif/3/ca-flag.jpg/full/max/90/gray.jpg)

Try requesting it as gray scale
[http://localhost:8182/iiif/3/ca-flag.jpg/full/max/90/gray.jpg](http://localhost:8182/iiif/3/ca-flag.jpg/full/max/90/gray.jpg)

Try requesting ias a thumbnail
[http://localhost:8182/iiif/3/ca-flag.jpg/full/50,/90/default.jpg](http://localhost:8182/iiif/3/ca-flag.jpg/full/50,/90/default.jpg)

Try looking at other flags, by changing the two letter country code in the image name to the country of your choice.

### AWS S3 Connection

An even better, scalable, approach is to point cataloupe at an AWS S3 bucket. This is very similar to the HTTP location approach but allows you to point to AWS S3 bucket. 

AWS S3 is a very cost effective way to store and serve large amounts of static content, like images. 

If you have S3 bucket, this is a great way to store your image content. 

You can then point your Cantaloupe server to the S3 bucket and re-serve those images in a IIIF compliant way. 

In this case you need, to change the Static Source to `S3Source`

Then in the S3Source tab, you need to supply:

* The name of your S3 Bucket
* Your Access Key ID
* Your Secret Key
  
### Basic Auth

WHile a driving goal of IIIF is openness, sometimes institutions have sensitive information that needs to be restricted. 

In such, an enterprise level server like Cantaloupe can help you with these issues. 

We won't implement anything in detail here, but it's important to have a sense of how it works and how you could take it further.

Different institutions will have different authorization and authentication needs, so this a place that each institution will like implement its own policy. 

But Cantaloupe comes with way to implement custom rules and policies, namely through its CustomDelegate Class. 

In this case we're going to implement a very simple authentication procedure called basic auth. 

To do this, we first need to enable the delegate script as follows: 

`delegate_script.enabled = true`

or navigate to Application, Delegate Script, Check Enabled in the web ui.

When you downloaded Cantaloupe it came with a file called `delgates.rb.sample`. We're going to make a copy of this and name it `delegates.rb`

At the top of this file were going to add: 

`require 'base64'`

And then at the bottom of the `CustomDelegate Class` declaration (before the very last `end`), we going to add a few class methods that implement basic auth.

```ruby
def pre_authorize(options = {})
    header = context['request_headers']
                 .select{ |name, value| name.downcase == 'authorization' }
                 .values.first
    return true if authenticate_basic(header)
    return {
        'status_code' => 401,
        'challenge' => 'Basic realm="MyRealm" charset="UTF-8"'
    }
  end

  def authorize(options = {})
    true
  end

  def authenticate_basic(header)
    if header&.start_with?('Basic ')
      encoded = header[6..header.length - 1]
      creds = Base64.decode64(encoded).split(':')
      if creds.length > 1
        return (creds[0] == 'my_user' and creds[1] == 'my_secret')
      end
    end
    false
  end
```

As implemented here, 'my_user' will be the user name and `my_secret` will be the password. 

Now the next time you request an image, your browser will be prompted to ask you for the username and password. Once supplied, your browser will re-request the image using the supplied authentication information.

Basic Auth is not a strong security, so in full production you'll probably want to implement a more secure policy. That's a more complicated endeavor, but the `delegates.rb` file is the place where you would implement such a policy. 

Have a look at the other comments in this file as it gives several examples of other kinds of customizations that can be implemented viat the `CustomDelegate` class


