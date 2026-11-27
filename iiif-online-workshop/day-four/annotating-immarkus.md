# Creating and downloading Annotations

In this tutorial we are going to annotate an image from your own manifest using a tool called IMMARKUS. Once we have finished annotating we are going to view the annotations in a viewer which isn't connected to the annotation server.

IMMARKUS is a powerful annotation tool and was developed to aid researchers to create annotations as part of their research. It has an interesting technical feature in that it doesn't require a server to store the annotations. The annotations are stored on your computer using an experimental browser feature. As this feature is experiemental unfortunately not all browsers are currently supported so to use IMMARKUS you must use Chrome or Edge. To see the latest browser support for this feature you can check this [browser compatability table](https://developer.mozilla.org/en-US/docs/Web/API/Window/showDirectoryPicker#browser_compatibility).

As the annotations are local to your machine IMMARKUS is intended as a single user system so others can't see your annotation until you publish them. The developer behind IMMARKUS also developed liiive which is a multi user collabrotaive tool and there is a video on this annotation tool in the [Guest Videos](https://training.iiif.io/iiif-online-workshop/GuestPresentations.html#liiive).  

IMMARKUS: Image Annotation has been developed by Prof. Dr. Hilde De Weerdt, Dr. Rainer Simon, Dr. Lee Sunkyu, Dr. Iva Stojević, Dawn Zhuang, Meret Meister, and Xi Wangzhi as part of the Regionalizing Infrastructures in Chinese History ([RegInfra](https://www.infrastructurelives.eu/)) project.

The overall steps are

 * Stage 1: Setting up IMMARKUS
 * Stage 2: Loading your manifest
 * Stage 3: Using the smart scissors
 * Stage 4: Auto transcription 
 * Getting a Google Gemini key
 * Finding more information on IMMARKUS

There are two options for getting a Manifest to Annotate.

### Option 1 use the Workbench

This option uses the Manifest you uploaded to the workbench in the [Publishing your Manifest](../day-three/workbench/) guide. To use this manifest you need to copy the manifest URL by going to Workbench, Manifests tab and right clicking on the IIIF logo and select `Copy link`. This will copy the Manifest URL to your clipboard. 

![image](images/workbench_iiif_link.png)

### Option 2 Use any public IIIF manifest

If you didn't manage to get a manifest in the previous session you can use any IIIF Manifest. My personal favorite is:

https://damsssl.llgc.org.uk/iiif/2.0/4389767/manifest.json

## Stage 1: Setting up IMMARKUS

First navigate to [https://immarkus.xmarkus.org/](https://immarkus.xmarkus.org/) and ensure you are using either Chrome or Edge. Once you reach that page you will be asked to select a directory on your computer where you can store your annotations. You could create a directory in your `iiif-workshop` directory as place to store these annotations. 

![Screenshot showing the setup screen of IMMARKUS](images/immarkus/setup.png)

Once you have selected your directory you will need to give permission to immarkus to read and write to this directory:

![Screenshot showing the allow or disallow access to the filesystem for immarkus](images/immarkus/permission.png)

Once you have given permission you will open up the start screen where you will see any manifests that you have loaded into IMMARKUS. 

## Stage 2: Loading your manifest

Click the Import IIIF button highlighted in the image below to open the dialog where you can add a manifest.

![Screenshot showing the welcome screen of immarkus](images/immarkus/opening.png)

Add the URL to your Manifest from the workbench. If your Manifest is welformed then you should see a green tick next to your Manifest label.

![Screenshot showing the manifest being added](images/immarkus/add_manifest.png)

Once the Manifest has been loaded you should see a folder which represents your Manifest. Click the folder to open your manifest for editing.

![Open screen of immarkus showing your Manifest as a folder](images/immarkus/opening-folder.png)

You should now see the canvases which are part of your Manifest. Click one to start annotating.

![List of canvases, choose one to annotate](images/immarkus/canvas-list.png)

Now you have opened a canvas you are in the annotation interface. This screen has two modes, the first is Move mode which allows you to zoom in to the image and also drag the image around so you can focus on a particlar part of the image. The second mode is Annotate mode where you can select a shape and draw an annotation on your image. You start in Move mode so zoom into the part of the image you want to annotate. 

![Annotation interface showing the moving mode and the annotate mode](images/immarkus/annotation-start.png)

Now select the Annotation Mode by clicking the box link so that the highlight goes from Move to Box. Then click the drop down menu next to box which is highlighted in the image below. This allows you to choose which shape to draw your annotation. 

![Highlighting the annotation selection tool](images/immarkus/annotation-shapes.png)

Once you have selected your shape start drawing by clicking once (note if you hold down the mouse button the image will move). Move your mouse to complete the shape and then click the mouse again to finish drawing your shape. 

![Completed box annotation](images/immarkus/annotation-box.png)

Once the shape is drawn click the Add note button and type some text into the annotation text box. Then click save to save your annotation.

![Anno body](images/immarkus/annotation-body.png)

Once you have completed your annotation you are still in annotation mode so be careful clicking on the image as this will start a new box. If you want to cancel a half drawn annotation you can click escape after starting a shape to dissmiss it. If you want to move around the image you can click the Move mode and view the annotations you've created. Add a few more annotations to this page. 

## Stage 3: Using the smart scissors

IMMARKUS has a number of innovative features to help with annotating including the 'Smart Scissors'. As you put down markers the smart scissors will snap it to the location it thinks you are trying to edit. Note opening the Smart tools menu item automatically takes you out of Move mode into annotate mode and selects the Smart Scissors so make sure you are in the correct part of the image before clicking the smart tools menu item.  

![Animated gif showing how the smart scissors work](images/immarkus/smart_scissors.gif)


## Stage 4: Auto transcription 

Another clever feature of IMMARKUS is the auto transcribe which can take a section of an image and send it to a Large Language Model (LLM) for transcription. To do this you need to register for one of the LLM services and get an API key. I am going to start with the process of transcription and then at the end show you how to get a transcription key for Google Gemini. 

To do the transcription go to the smart tools menu item and select Auto Transcribe.

![Menu item showing auto transcribe](images/immarkus/auto-transcribe.png)

IMMARKUS works with a number of different AI models some which are free to use and some you have to pay for. If you have a key for one of these services you can enter it and get it to do the transcription. For this workshop select "Google Gemini".

![aviliable models](images/immarkus/gemini_available_models.png)

Google Gemini has a number of models available for you to choose, with include different versions and also different sizes of model. Pro is the best performing but slower and more expensive. Flash is the middle option with good performance and speed, Flash lite is the smallest and quickest. Its probably best to start with the lite version and if its not getting you the results you want you can switch to Flash then Pro. Note you will need your Google Gemini key from the section below. 

![Hugging face example and select model](images/immarkus/gemini_example.png)

Once you have entered your token and selected your model you need to identify the part of the image you want to transcribe. Click the area button on the left highlighted in this image. Then like you did the annotations click once to start the box and then move the mouse and click again to close the box. 

![Select region of the image to send to the LLM](images/immarkus/gemini_region.png)

After you've drawn the box you should be able to click the run transcription button. Depending on how much text is in the box it can take a few seconds or minutes to do the transcription. 

![View after area has been selected](images/immarkus/gemini_selected_area.png)

After the transcription is generated you can put your mouse cursor over the box to see the transcription. If it looks OK you can click the Import to IMMARKUS button to add the annotations to IMMARKUS for further editing. To delete the transcription you can click the bin symbol next to this button. 

![Huggingface results](images/immarkus/gemini_results.png)

### Getting a Google Gemini API key

Google offers a free tier with the Gemini API Key which should be enough for our use cases. It throttles the use of the API key and restricts access to some of the latest models but for testing with IMMARKUS it should be fine. 

Navigate to https://aistudio.google.com/app/api-keys and login with you Google account. You should see something like the page below. Click on the Create API Key highlighted:

![Google API Studio](images/immarkus/gemini_studio.png)

The next screen will ask you to name your API Key and this is so you can remember where you have used this key. You could call it IMMARKUS but any name will do. If you already have a google gemini project then select that but if not you can create one by choosing another name for the project. I went with Default Gemini Project as the project name.

![Name key](images/immarkus/gemini_studio_key.png)

Once you click create key you should see the following screen. Note I have added black boxes to hide the key I created and project id but it should be visible on your screen. Make sure you copy the API Key as this is the only time you will see it. Once you click close on this dialog you won't be able to see the key again. 

![Key created](images/immarkus/gemini_studio_key-created.png)

The key you have created can now be pasted into IMMARKUS for the auto transcription process mentioned earlier. 

## Finding more information on IMMARKUS

There are a lot more features with IMMARKUS than we are able to cover here. The best place to find all of the features is on the IMMARKUS wiki:

https://github.com/rsimon/immarkus/wiki 
