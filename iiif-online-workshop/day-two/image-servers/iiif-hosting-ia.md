# Using the Internet Archive

The Internet Archive allows you to upload images and then provides a IIIF Image API service. Helpfully they also have a function to delete your images after 30 days if you are using this as a test. The overall process is as follows:

1. Register for a user account at [archive.org](https://archive.org)
2. Upload your image
3. On the details page get the identifier for the image. For example if the details page link is:
  
  https://archive.org/details/img-8664
 
  the identifier would be `img-8664`
4. Use the Internet Archive image service with this identifier:

  https://iiif.archivelab.org/iiif/img-8664/info.json

5. You should then be able to use this image:

  Create an image link:
  
  [https://iiif.archivelab.org/iiif/img-8664/full/512,/0/default.jpg](https://iiif.archivelab.org/iiif/img-8664/full/512,/0/default.jpg)

  Check it works with a zooming viewer like OpenSeaDragon:

  [https://iiif.gdmrdigital.com/openseadragon/index.html?image=https://iiif.archivelab.org/iiif/img-8664/info.json](https://iiif.gdmrdigital.com/openseadragon/index.html?image=https://iiif.archivelab.org/iiif/img-8664/info.json)

  Pull out regions using the UCD selector tool:

  [https://jbhoward-dublin.github.io/IIIF-imageManipulation/index.html?imageID=https://iiif.archivelab.org/iiif/img-8664](https://jbhoward-dublin.github.io/IIIF-imageManipulation/index.html?imageID=https://iiif.archivelab.org/iiif/img-8664)


## Step by step guide

A step by step guide with screen shots for the above steps is below:

1. Register for a user account at [archive.org](https://archive.org) 

 Click signup or login if you already have an account:

 <img src="ia/login1.png" alt="Sign up / Login" class="standout-image"/>

 Then create your user:

 <img src="ia/login-create-user.png" alt="Create user" class="standout-image" />

 They will then ask you to verify your email address:

 <img src="ia/login-verification.png" alt="Send verification email" class="standout-image" />

 You will then see an email like the following:

 <img src="ia/login-email.png" alt="Verification Email" class="standout-image" />

 Click on the link on the email and you will get the following screen:

 <img src="ia/login-success.png" alt="success" class="standout-image" />

2. Upload your image

 Select upload on the Archive Welcome screen:

 <img src="ia/upload-welcome.png" alt="welcome screen" class="standout-image" />

 You will then see the following screen. Select the green Upload Files button:

 <img src="ia/upload-files.png" alt="upload choices" class="standout-image" />

 Then click on the 'choose files to upload' button and select the image to upload:

 <img src="ia/upload-drag-and-drop.png" alt="choose files" class="standout-image" />

 Add metadata. The Title, URL, Description tags are mandatory. I left it in the Community Image collection. Usefully you can also say if its a test item which can be deleted after 30 days. 

 <img src="ia/upload-metadata.png" alt="Metadata" class="standout-image" />

 Then click 'Upload and Create Your Item'. This took at least 5 minutes and after the bar has completed you have to wait longer presumably so it can setup the derivative images.

 <img src="ia/upload-timer.png" alt="Upload wait" class="standout-image" />

 If all has gone well you should see the item page:

 <img src="ia/upload-itempage.png" alt="item page" class="standout-image" />

3. On the details page get the identifier for the image. For example if the details page link is:
  
  https://archive.org/details/img-8664
 
  the identifier would be `img-8664`

 <img src="ia/get_id.png" alt="Get image identifier" class="standout-image"/>

4. Use the Internet Archive image service with this identifier:

  [https://iiif.archivelab.org/iiif/img-8664/full/full/0/default.jpg](https://iiif.archivelab.org/iiif/img-8664/full/full/0/default.jpg)

  <img src="ia/iiif-image-url.png" alt="IIIF Image URL" class="standout-image"/>

5. You should then be able to use this image:

  Create an image link:
  
  [https://iiif.archivelab.org/iiif/img-8664/full/512,/0/default.jpg](https://iiif.archivelab.org/iiif/img-8664/full/512,/0/default.jpg)

  Check it works with a zooming viewer like OpenSeaDragon:

  [https://iiif.gdmrdigital.com/openseadragon/index.html?image=https://iiif.archivelab.org/iiif/img-8664/info.json](https://iiif.gdmrdigital.com/openseadragon/index.html?image=https://iiif.archivelab.org/iiif/img-8664/info.json)

  <img src="ia/openseadragon.png" alt="OpenSeaDragon example" class="standout-image" />

  Pull out regions using the UCD selector tool:

  [https://jbhoward-dublin.github.io/IIIF-imageManipulation/index.html?imageID=https://iiif.archivelab.org/iiif/img-8664](https://jbhoward-dublin.github.io/IIIF-imageManipulation/index.html?imageID=https://iiif.archivelab.org/iiif/img-8664)

  <img src="ia/ucd-image-cropper.png" alt="UCD Image Cropper" class="standout-image" />

