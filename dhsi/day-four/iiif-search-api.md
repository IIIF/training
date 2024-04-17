# Searching Annotations

In the last session we looked at downloading annotations so they could be linked to a manifest. In this session we are going to look at adding a Search service to the manifest so that the annotations you created can be searched using a IIIF Viewer. The procedure to achieve this is:

 * Find the SAS IIIF Search URL
 * Add a link to the Search service in your manifest
 * Test with a IIIF Viewer


## Step 1: Find the IIIF Search URL

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

