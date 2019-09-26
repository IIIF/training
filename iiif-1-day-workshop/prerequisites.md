# Prerequisites for the workshop

This workshop is meant to be hands-on and interactive. This means you have the option of installing the software and playing with it during the workshop. We would prefer not to spend time during the workshop getting everyone setup, so some things are needed in advance of the workshop. 

## Images

You will find the workshop more useful if you are able to work with your own images. Although IIIF will work with most image formats for this workshop please convert them to JPEGs. Images of your digitised collections will work well if you are able to bring them.  

## All machines need the following

For the South Africa workshop there will be some computers available with some of the software pre-installed. If you are brining your own laptop you will need to install all parts but for the provided desktop machine you will only need to install the first two:

## 1. JSON Viewer
The IIIF APIs provide many of their responses using the `JSON` format so it is useful to have a viewer which will format this response to make it easier to read. There is a similar plugin for Firefox but as this workshop also uses other Chrome plugins it is recommended to use Chrome. 

 - [Chrome JSON view plugin](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc)

 
## 2. Web Server 
For this workshop we will use the Chrome Web Server which is a Chrome browser plugin. It will allow us to play with local IIIF assets. Install from:

 * [Chrome Web Server](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en)

And follow these instructions http://ronallo.com/iiif-workshop/preparation/directory.html to check the Web server is working.

# Personal laptop only requirements:
If you have brought your own machine then you will also need to install the following:

## 3. Java

In this workshop we will install and run a IIIF Image server and for this you will need Java 11 installed.

 - [Downloading Java 11](https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html)

To verify you have the correct package installed, you can run the following command from a terminal or command prompt:

```sh
$ java -version
# java version "1.11.0_102"
```

You should see version `1.11.x`. For more information on the install options see:

 - [Java install options](https://java.com/en/download/help/download_options.xml)


## 4. Using a text editor

We recommend some familiarity with a text editor before coming to the workshop. If you don't know which text editor to choose, a good, free, open source option is [atom](http://flight-manual.atom.io/getting-started/sections/installing-atom/).

## Navigating on the command line / terminal

In this workshop, we will be running commands from a terminal / command prompt. No need to be an expert, but you can get familiar in advance.

** If you need help navigation around your computer using a terminal, checkout these quick exercises: **
 - [Paths, Folders, Directories (pwd)](https://learnpythonthehardway.org/book/appendix-a-cli/ex2.html)
 - [If You Get Lost](https://learnpythonthehardway.org/book/appendix-a-cli/ex3.html)
 - [Make A Directory (mkdir)](https://learnpythonthehardway.org/book/appendix-a-cli/ex4.html)
 - [Change Directory (cd)](https://learnpythonthehardway.org/book/appendix-a-cli/ex5.html)

