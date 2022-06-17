# EDM (Europeana Data Model) and IIIF

 <iframe width="560" height="315" src="https://player.vimeo.com/video/716825132?h=f94b85a96a" title="Fiona explaining iiif-edm" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Learning Objectives
- Understand the basic concepts of EDM
- Make an EDM record for an image
- Understand the basics of the IIIF extension in EDM
- Make an EDM record with full IIIF extension
- Understand the basics of the Metis Sandbox
- Preview a record in the Metis Sandbox

## EDM

[EDM](https://pro.europeana.eu/page/edm-documentation), the Europeana Data Model, is a metadata model for aggregating content to the Europeana website. Most Europeana partners create their own metadata in a format which suits their cultural heritage organisation. They will then map that metadata format to EDM and transform it to make a new version of their metadata in EDM ready for publishing on the Europeana website. This process is normally completed with the help of an [aggregator](https://pro.europeana.eu/share-your-data/process). 

## EDM core classes

The most basic EDM record consists of 3 classes consisting of properties, where classes are linked together using rdf statements. 
These three classes are:

* `edm:ProvidedCHO` **A class representing the provided cultural heritage object.**
* `edm:WebResource` **A class for the web resource that is the digital surrogate of the cultural heritage object.**
* `ore:Aggregation` **A class that groups together the cultural heritage object with its digital surrogate.**

Each class starts with the “rdf:about” statement which is its identifier. This same identifier can be found within other classes as the content of an “rdf:resource” statement, thus linking the classes together.

Don't forget to add the xml declaration at the top of the record, the rdf:RDF container at the beginning and end of the record and the namespaces at the top before the first class begins. See the example below.

## EDM for images

A basic EDM record for a standard image file looks like this:

        <?xml version="1.0" encoding="UTF-8"?>
        <rdf:RDF xmlns:adms="http://www.w3.org/ns/adms#"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:crm="http://www.cidoc-crm.org/rdfs/cidoc_crm/"
        xmlns:dc="http://purl.org/dc/elements/1.1/" 
        xmlns:dcterms="http://purl.org/dc/terms/"
        xmlns:doap="http://usefulinc.com/ns/doap#"
        xmlns:ebucore="http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#" 
        xmlns:edm="http://www.europeana.eu/schemas/edm/" 
        xmlns:foaf="http://xmlns.com/foaf/0.1/" 
        xmlns:odrl="http://www.w3.org/ns/odrl/2/" 
        xmlns:ore="http://www.openarchives.org/ore/terms/" 
        xmlns:owl="http://www.w3.org/2002/07/owl#" 
        xmlns:rdaGr2="http://rdvocab.info/ElementsGr2/" 
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
        xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" 
        xmlns:skos="http://www.w3.org/2004/02/skos/core#" 
        xmlns:svcs="http://rdfs.org/sioc/services#" 
        xmlns:wgs84="http://www.w3.org/2003/01/geo/wgs84_pos#" 
        xmlns:xalan="http://xml.apache.org/xalan">
            <edm:ProvidedCHO rdf:about="#example_direct_Image_4_IIIFTraining">
                <dcterms:created>1970</dcterms:created>
                <dc:title xml:lang="en">Image JPG Example IIIF Record Tier 4</dc:title>
                <dc:subject rdf:resource="http://vocab.getty.edu/aat/300020103"/>
                <dc:type rdf:resource="http://vocab.getty.edu/aat/300430220"/>
                <dcterms:isPartOf>Europeana Foundation IIIF Example Records</dcterms:isPartOf>
                <dc:format>photo</dc:format>
                <edm:type>IMAGE</edm:type>
                <edm:currentLocation rdf:resource="http://www.wikidata.org/entity/Q4093"/>
            </edm:ProvidedCHO>
            <edm:WebResource rdf:about="https://iiif.archivelab.org/iiif/img-0353/full/full/0/default.jpg">
                <edm:rights rdf:resource="http://creativecommons.org/publicdomain/mark/1.0/"/>
            </edm:WebResource>
            <ore:Aggregation rdf:about="#example_direct_Image_4_IIIFTraining_AGG">
                <edm:aggregatedCHO rdf:resource="#example_direct_Image_4_IIIFTraining"/>
                <edm:isShownBy rdf:resource="https://iiif.archivelab.org/iiif/img-0353/full/full/0/default.jpg"/>
                <edm:dataProvider>Europeana Foundation</edm:dataProvider>
                <edm:provider>Europeana Foundation</edm:provider>
                <edm:rights rdf:resource="http://creativecommons.org/publicdomain/mark/1.0/"/>
            </ore:Aggregation>
        </rdf:RDF>

Here you can see the rdf:about statements introducing each class and where these are found in other classes. 

- The rdf:about of the Provided CHO is the rdf:resource of the edm:aggregatedCHO property in the ore:Aggregation class.

- The rdf:about of the edm:WebResource class is the rdf:resource of the edm:isShownBy property in the ore:Aggregation class.


## IIIF to EDM Profile

IIIF images need some extra information in EDM. So an [extension to EDM](https://europeana.atlassian.net/wiki/spaces/EF/pages/2189262924/EDM+IIIF+EDM+classes+and+properties) was created which added an extra class and some extra properties.

### New properties and class

Two properties were added to the the edm:WebResource:
**svcs:has_service** (to point to the IIIF service) and **dcterms:isReferencedBy** (for the IIIF manifest).

The **svcs:Service** class was created to indicate the level of implementation, 
using the properties **dcterms:conformsTo** and **doap:implements**.

This is summarised below:

![Classes and properties used in the pattern](img/iiif_pattern.jpg)

The namespaces and ProvideCHO class remain as in standard EDM so there is no need to change these.

We will need to make one change to the ore:Aggregation class, one change to the edm:WebResource class, plus we need to add the two new properties to this class, and we need to create the new svcs:Service class.

**Let's do this in 5 steps!**

## EDM from a basic image to compliant IIIF in 5 Steps

### 1. Provide the IIIF Resource in the EDM WebResource class

Make sure that in the rdf:about of the WebResource class you provide the full IIIF link.
This is the link to the image you made in the first part of the training.

        <edm:WebResource rdf:about="https://iiif.archivelab.org/iiif/img-0353/full/full/0/default.jpg">

Remember to include the correct parameters: {scheme}://{server}{/prefix}/{identifier}/{region}/{size}/{rotation}/{quality}.{format}

For region and size use full, for rotation 0 and quality use default/native. 

You can scale down on size, which can save on the processing time, however if you are aiming to meet the top quality tier of the EPF ([Europeana Publishing Framework](https://pro.europeana.eu/post/publishing-framework)) then you must ensure the resulting size is still 0.95 megapixels (950,000 pixels) in size. You can check this by copying the url you want to check in the browser and inspecting the properties.

All image links should be served via **https**.

### 2. Flag the WebResource as IIIF compliant

Next in the WebResource class you want to flag that the link you added is compliant with IIIF. 

To do this you add the base of the image URL into the has_service property: 
          
          <svcs:has_service rdf:resource="https://iiif.archivelab.org/iiif/img-0353"/>

In the IIIF syntax the base URL is the {scheme}://{server}{/prefix}/{identifier} part.

### 3. Provide access to a IIIF manifest

The next step is to provide access to the IIIF manifest.

We do this by adding the property isReferencedBy as so:

         <dcterms:isReferencedBy rdf:resource="https://iiif-test.github.io/Jan2022/manifests/manifest.json"/>

The link usually ends .json and should resolve in the manifest for the item which is the subject of the EDM record. The first image in the manifest should be the same as the isShownBy in the aggregation class and the rdf:about of the WebResource class. If there are any errors then the image will not display in the Europeana portal.

This is what the WebResource class now looks like:

        <edm:WebResource rdf:about="https://iiif.archivelab.org/iiif/img-0353/full/full/0/default.jpg">
                <dcterms:isReferencedBy rdf:resource="https://iiif-test.github.io/Jan2022/manifests/manifest.json"/>
                <svcs:has_service rdf:resource="https://iiif.archivelab.org/iiif/img-0353"/>
                <edm:rights rdf:resource="http://creativecommons.org/publicdomain/zero/1.0/"/>
        </edm:WebResource>

### 4. Update the isShownBy link ore:Aggregation class

Before we create the last class and complete the final step, we will update the isShownBy of the ore:Aggregation class to match the rdf:about of the WebResource class and the first image of the json manifest.

This is what the ore:Aggregation class now looks like:

            <ore:Aggregation rdf:about="#example_direct_Image_4_IIIFTraining_AGG">
                <edm:aggregatedCHO rdf:resource="#example_direct_Image_4_IIIFTraining"/>
                <edm:isShownBy rdf:resource="https://iiif.archivelab.org/iiif/img-0353/full/full/0/default.jpg"/>
                <edm:dataProvider>Europeana Foundation</edm:dataProvider>
                <edm:provider>Europeana Foundation</edm:provider>
                <edm:rights rdf:resource="http://creativecommons.org/publicdomain/mark/1.0/"/>
            </ore:Aggregation>

### 5. Indicate the level of IIIF compliance by adding the new svcs:Service class

Create a new class using the <svcs:has_service rdf:resource="https://iiif.archivelab.org/iiif/img-0353"/> reference from the has_service property in the WebResource class.

Use it to begin the new class like so: 

            <svcs:Service rdf:about="https://iiif.archivelab.org/iiif/img-0353">

Add the following two properties to the class: 

        <dcterms:conformsTo rdf:resource="http://iiif.io/api/image"/>
        <doap:implements rdf:resource="http://iiif.io/api/image/2/level2.json"/>
        
The dcterms:conforms to property is always the same and never changes. The level in doap:implements may change depending on the level of implementation, however, the only change you can anticipate between different records in the same dataset will be the item identifier in the URL.

Finally, close off your new class.

The whole thing will look like this:

    <svcs:Service rdf:about="https://iiif.archivelab.org/iiif/img-0353">
        <dcterms:conformsTo rdf:resource="http://iiif.io/api/image"/>
        <doap:implements rdf:resource="http://iiif.io/api/image/2/level2.json"/>
    </svcs:Service>

## Example Record

The example record has now been extended:

        <?xml version="1.0" encoding="UTF-8"?>
        <rdf:RDF xmlns:adms="http://www.w3.org/ns/adms#"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:crm="http://www.cidoc-crm.org/rdfs/cidoc_crm/"
        xmlns:dc="http://purl.org/dc/elements/1.1/" 
        xmlns:dcterms="http://purl.org/dc/terms/"
        xmlns:doap="http://usefulinc.com/ns/doap#"
        xmlns:ebucore="http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#" 
        xmlns:edm="http://www.europeana.eu/schemas/edm/" 
        xmlns:foaf="http://xmlns.com/foaf/0.1/" 
        xmlns:odrl="http://www.w3.org/ns/odrl/2/" 
        xmlns:ore="http://www.openarchives.org/ore/terms/" 
        xmlns:owl="http://www.w3.org/2002/07/owl#" 
        xmlns:rdaGr2="http://rdvocab.info/ElementsGr2/" 
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
        xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" 
        xmlns:skos="http://www.w3.org/2004/02/skos/core#" 
        xmlns:svcs="http://rdfs.org/sioc/services#" 
        xmlns:wgs84="http://www.w3.org/2003/01/geo/wgs84_pos#" 
        xmlns:xalan="http://xml.apache.org/xalan">
            <edm:ProvidedCHO rdf:about="#example_direct_Image_4_IIIFTraining">
                <dcterms:created>1970</dcterms:created>
                <dc:title xml:lang="en">Image JPG Example IIIF Record Tier 4</dc:title>
                <dc:subject rdf:resource="http://vocab.getty.edu/aat/300020103"/>
                <dc:type rdf:resource="http://vocab.getty.edu/aat/300430220"/>
                <dcterms:isPartOf>Europeana Foundation IIIF Example Records</dcterms:isPartOf>
                <dc:format>photo</dc:format>
                <edm:type>IMAGE</edm:type>
                <edm:currentLocation rdf:resource="http://www.wikidata.org/entity/Q4093"/>
            </edm:ProvidedCHO>
            <edm:WebResource rdf:about="https://iiif.archivelab.org/iiif/img-0353/full/full/0/default.jpg">
                <dcterms:isReferencedBy rdf:resource="https://iiif-test.github.io/Jan2022/manifests/manifest.json"/>
                <svcs:has_service rdf:resource="https://iiif.archivelab.org/iiif/img-0353"/>
                <edm:rights rdf:resource="http://creativecommons.org/publicdomain/zero/1.0/"/>
            </edm:WebResource>
            <ore:Aggregation rdf:about="#example_direct_Image_4_IIIFTraining_AGG">
                <edm:aggregatedCHO rdf:resource="#example_direct_Image_4_IIIFTraining"/>
                <edm:isShownBy rdf:resource="https://iiif.archivelab.org/iiif/img-0353/full/full/0/default.jpg"/>
                <edm:dataProvider>Europeana Foundation</edm:dataProvider>
                <edm:provider>Europeana Foundation</edm:provider>
                <edm:rights rdf:resource="http://creativecommons.org/publicdomain/mark/1.0/"/>
            </ore:Aggregation>
            <svcs:Service rdf:about="https://iiif.archivelab.org/iiif/img-0353">
                <dcterms:conformsTo rdf:resource="http://iiif.io/api/image"/>
                <doap:implements rdf:resource="http://iiif.io/api/image/2/level2.json"/>
            </svcs:Service>
        </rdf:RDF>

* N.B. Make sure that you have enabled CORS, Cross Origin Resource Sharing to enable Europeana to display the images (CORS->security feature for browsers)

## IIIF to EDM Profile

* If you would like to read more you can check out our extension on the [knowledge base](https://europeana.atlassian.net/wiki/spaces/EF/pages/2189262924/EDM+IIIF+EDM+classes+and+properties). Here the Pattern, classes and properties used are repeated with complete examples 

## Try it out!

To help you to create an EDM file with the IIIF extension you can go to the [edm-iiif template file](https://docs.google.com/document/d/1dtRSsQwT4KL8F0dLaTG8h8K0Pb65sbj4tecA9V2L3g4/edit). You can copy in your own metadata (we included the most basic properties but you can add your own) including the new IIIF image link and manifest link. Please also make sure to change the rdf:about of the Provided CHO to something unique.

Template Key:
```
* Yellow: insert the base link to the item in the repository that you created in part 1 of this workshop.
* Pink: insert the link to your new manifest.
* Green: insert your metadata (or leave the default.)
* Orange: insert your rights statements (Make sure your rights statements are valid, if you are unsure, leave the default.)
```

## Double check time

Checklist for common errors
1. Are the links to the main image **all the same** (in isShownBy, rdf:about of the WebResource, and inside the manifest)?
2. Is the base link of the IIIF service the same as the main image link (base link / identifier)?
3. Are all the images served via **https**?
4. Are the two links in the two properties of the svcs:service class **http** links?
5. Do all the links resolve (check the images and the manifest)?


## Save your new record

Once you have finished and double checked your gdoc record then you can copy and paste the code into an xml editor or into notepad (in Windows Accessories on a PC) and:

* Save as .xml

Then:

* Create a folder and put the file in it (make sure the name of the file and the folder do not contain illegal characters - e.g. use CamelCase or underscores)
* Zip the folder

In the next section we will show you how to upload the record into the Metis Sandbox to see what it will look like in Europeana.
