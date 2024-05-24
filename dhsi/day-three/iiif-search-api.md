# IIIF Search API

[Search API Documentation](https://iiif.io/api/search/2.0/)

The Search API provides a standard for three basic and related things. 

1. The announcement of a search service
2. How requests should be sent to said service
3. How a service should reply to those requests

# 1. Announcing a Search Service

Since the goal of a manifest is to be able to move your content from viewer to viewer, viewers will not know in advance where to send a request for search results. 

Search manifest needs to declare the location of a search service. Then any given viewer can send a search request to this endpoint and display the results according to the design principles of that viewer. 

But viewers need to know where to find this search service endpoint, and therefore it needs to be declared within the manifest in a standard way.

It looks like this.

  ```json
    "service": [{
        "profile": "http://iiif.io/api/search/0/search",
        "@id": <the url of the search endpoint goes here>,
        "@context": "http://iiif.io/api/search/0/context.json"
    }],
  ```
* Here's what my service looks like
  
  ```json
    "service": [{
        "@context": "http://iiif.io/api/search/1/context.json",
        "@id": "https://exist.scta.info/exist/apps/scta-app/iiif2/lon/search",
        "profile": "http://iiif.io/api/search/1/search",
        "label": "Search within this manifest"
    }],
  ```
## How a search request should be sent and received

When a search is conduct there something obvious that has to be sent to the service, namely the "query" term.

We need to name the data being sent such that the receiving service knows that the value of this name is the term meant to be search. 

This could have been many things from "query" to "searchTerm". 

But the IIIF editors decided to use "q". It's arbitrary, but the point is when we follow the sames rules different viewers can talk to different search services and still understand each other. 

So to send a request, a viewer takes the `@id` from the service block

`https://example.org/service/manifest/search` and appends the query `q=bird`

The request url would look as follows `https://example.org/service/manifest/search?q=bird`

You inspect a live example here: 

`https://exist.scta.info/exist/apps/scta-app/iiif2/lon/search?q=fides`

Go ahead and put this url in your browser and you'll see the json data that the service provides in response.

## How a search service should respond to a request

The response that you see as json data is the third thing the IIIF Search Service governs: namely, how the service should structure the results it finds. 

This needs to be standardized so that diverse viewers can display search results from the same service and so that the same viewer can display the results from diverse search services.

# Making Use of the Service With Existing Manifest

Once you have a search service working and declared in a manifest, we can see it at work in a diverse viewers. 

Try putting this manifest (or another manifest)

https://iiif.wellcomecollection.org/presentation/v2/b18250464

into Mirador and Universal Viewer. 

Then trying using the search tools provided by each viewer.

These are generic example, but they don't exhaust what we can do with search results

Check out: https://ncsu-libraries.github.io/annona/searchview/ for a demo a widget you could embed to view search results as a list of independent annotations. 

Or check out: https://lombardpress.org/paleographinator, which is app I build to search latin words in different manuscripts so that a user could compare how a word was written in different scripts at different times.

# Custom Experiments

## Running your own search service 

The next to think about is how to create your own search service. This is a bit involved because it involves creating your own web service that can search the correct content and provide results. 

But I've create a simple way for us to experience this by creating a very minimal service that you can run in Codespace. 

If navigate to: 

https://github.com/jeffreycwitt/simple-search-service

You can then launch this in Code Space. 

Then add your annotation lists to the `data` folder. 

Finally, launch the service in the terminal `node app.js`

Following the Visual Studio Code prompt to open this endpoint in browser. 

Also change "visibility" to "public"

Now you should have a working endpoint. 

Try adding "?q=your-search-term" to the end of the url endpoint and you should (hopefully) get some results.

## Adding your search service to a manifest

If you have a working manifest for these annotations, try modifying the manifest to include the service block.

Once you've added the service block, add your updated manifest to Mirador or Universal Viewer and see if you can search it.



<!-- <script src="https://ncsu-libraries.github.io/annona/dist/annona.js"></script> <link rel="stylesheet" type="text/css" href="https://ncsu-libraries.github.io/annona/dist/annona.css"> -->

<!-- ## Step 1: Find the IIIF Search URL

If you navigate to your collections page either by clicking on the Home link or by navigating to:

https://dev.gdmrdigital.com/collections.xhtml

On the collections page click "Browse Annotations":

![image](images/sas/collections.png)  

and then you will be taken to the Manifest page. Now select the Configure IIIF Search link highlighted below. 

![image](images/sas/manifest-search.png)  

The IIIF search page gives details on how to add a link to the search service. Copy the URL circled in Red in the image below:

![image](images/sas/search-url.png)  
 
## Step 2: Link Manifest to Search Service

Now open up your Manifest in VS Code and it should look like this:

![image](images/annos_vscode_pre_search.png)  

Now add the following JSON to the manifest after the `label`:

```
"service": {
    "profile": "http://iiif.io/api/search/0/search",
    "@id": "SEARCH_ID",
    "@context": "http://iiif.io/api/search/0/context.json"
},
```

Now replace the SEARCH_ID with the URL you copied earlier. In my example it would look like:

![image](images/sas/search-vscode.png)  

## Step 3: Test with a IIIF Viewer
Test your manifest with the Universal Viewer to see if has worked.

 * Open up http://universalviewer.io/
 * and paste your manifest http://127.0.0.1:5500/manifest2.json in the View a IIIF Manifest section
 * Does it show a search box?
 * Has it found an annotation? 
 * If you add an annotation in Mirador does it show up in the search results in the UV?
 -->
