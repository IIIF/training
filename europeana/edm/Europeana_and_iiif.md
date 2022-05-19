# EDM (Europeana Data Model) and IIIF?

###

## EDM

[EDM](https://pro.europeana.eu/page/edm-documentation), the Europeana Data Model, is a metadata model for aggregating content to the Europeana website. Most Europeana partners create their own metadata in a format which suits their cultural heritage organisation. They will then map that metadata format to EDM and transform it to make a new version of their metadata in EDM ready for publishing on the Europeana website. This process is normally completed with the help of an [aggregator](https://pro.europeana.eu/share-your-data/process). 

## EDM core classes

The most basic EDM record consists of 3 classes consisting of properties, where classes are linked together using rdf statements. 
These three classes are:

* `edm:ProvidedCHO` A class representing the provided cultural heritage object
* `edm:WebResource` A class for the web resource that is the digital surrogate of the cultural heritage object
* `ore:Aggregation` A class that groups together the cultural heritage object with its digital surrogate

Each class starts with the “rdf:about” statement which is its identifier. This same identifier can be found within other classes as the content of an “rdf:resource” statement, thus linking the classes together.

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
        <dcterms:created>Roman</dcterms:created>
        <dc:title xml:lang="en">Image JPG Example IIIF Record Tier 4</dc:title>
        <dc:subject rdf:resource="http://vocab.getty.edu/aat/300020103"/>
        <dc:type rdf:resource="http://vocab.getty.edu/aat/300430220"/>
        <dcterms:isPartOf>Europeana Foundation IIIF Example Records</dcterms:isPartOf>
        <dc:format>photo</dc:format>
        <edm:type>IMAGE</edm:type>
        <edm:currentLocation rdf:resource="http://www.wikidata.org/entity/Q4093"/>
    </edm:ProvidedCHO>
    <edm:WebResource rdf:about="http://media.culturegrid.org.uk/mediaLibrary/Partage/LoveArtNouveau/Glasgow/DSCF4092.JPG">
       <edm:rights rdf:resource="http://creativecommons.org/publicdomain/mark/1.0/"/>
    </edm:WebResource>
    <ore:Aggregation rdf:about="#example_direct_Image_4_IIIFTraining_AGG">
        <edm:aggregatedCHO rdf:resource="#example_direct_Image_4_IIIFTraining"/>
        <edm:isShownBy rdf:resource="http://media.culturegrid.org.uk/mediaLibrary/Partage/LoveArtNouveau/Glasgow/DSCF4092.JPG"/>
        <edm:dataProvider>Europeana Foundation</edm:dataProvider>
        <edm:provider>Europeana Foundation</edm:provider>
        <edm:rights rdf:resource="http://creativecommons.org/publicdomain/mark/1.0/"/>
    </ore:Aggregation>
</rdf:RDF>

Here you can see the rdf:about statements introducing each class and where these are found in other classes. The rdf:about of the Provided CHO is the rdf:resource of the edm:aggregatedCHO property in the ore:Aggregation class and the rdf:about of the edm:WebResource class is the rdf:resource of the edm:isShownBy propert in the ore:Aggregation class.


## IIIF to EDM Profile
### Classes and key properties to use within the classes 

IIIF images need some extra information in EDM. So an extension to [EDM](https://europeana.atlassian.net/wiki/spaces/EF/pages/2189262924/EDM+IIIF+EDM+classes+and+properties) was created which added an extra class and some extra properties.

Two properties were added to the the edm:WebResource 
svcs:has_service (to point to the IIIF service) and dcterms:isReferencedBy (for the IIIF manifest)

The svcs:Service class was created to indicate the level of implementation, using the properties dcterms:conformsTo doap:implements

This is summarised below:

![Classes and properties used in the pattern](img/iiif_pattern.jpg)


## EDM from a basic image to compliant IIIF in 4 Steps

1. Provide the IIIF Resource in the EDM WebResource class

`<ore:Aggregation rdf:about="[ … ]">`
[ … ]
`<edm:isShownBy rdf:resource="https://gallica.bnf.fr/iiif/ark:/12148/btv1b55001425m/f1/full/full/0/native.jpg”/>`
[ … ]
`</ore:Aggregation>`

`<edm:WebResource rdf:about="https://gallica.bnf.fr/iiif/ark:/12148/btv1b55001425m/f1/full/full/0/native.jpg"/>`
…

This is the link to the image you made in the first part of the training.

Remember to include the parameters we discussed: {region}/{size}/{rotation}/{quality}

Example - mention the EPF

![Book with gemstones and ivory](img/BnF_livre.jpg)

2. Flag the WebResource as IIIF-compliant

`<edm:WebResource rdf:about="https://gallica.bnf.fr/iiif/ark:/12148/btv1b55001425m/f1/full/full/0/native.jpg">
<dcterms:isReferencedBy rdf:resource="https://gallica.bnf.fr/iiif/ark:/12148/btv1b55001425m/manifest.json"/>
<svcs:has_service rdf:resource=”https://gallica.bnf.fr/iiif/ark:/12148/btv1b55001425m/f1”/>
</edm:WebResource>`

`<svcs:Service rdf:about="https://gallica.bnf.fr/iiif/ark:/12148/btv1b55001425m/f1">`
....

* Make sure that you have enabled CORS, Cross Origin Resource Sharing to enable Europeana to display the images (CORS->security feature for browsers)

3. Indicate a level of IIIF implementation

`<svcs:Service rdf:about=”https://gallica.bnf.fr/iiif/ark:/12148/btv1b55001425m/f1”/>
 <dcterms:conformsTo rdf:resource=”http://iiif.io/api/image”/>
 <doap:implements rdf:resource=”"http://iiif.io/api/image/2/level2.json">
</svcs:Service>`

4. Provide access to a IIIF manifest

`<edm:WebResource rdf:about="https://gallica.bnf.fr/iiif/ark:/12148/btv1b55001425m/f1/full/full/0/native.jpg">
<dcterms:isReferencedBy rdf:resource="https://gallica.bnf.fr/iiif/ark:/12148/btv1b55001425m/manifest.json"/>
<svcs:has_service rdf:resource=”https://gallica.bnf.fr/iiif/ark:/12148/btv1b55001425m/f1”/>
</edm:WebResource>`

## IIIF to EDM Profile on Pro

* Pattern, classes and properties used, complete examples 
* Some issues with the guidelines - they need updated. You will find them on the [knowledge base](https://europeana.atlassian.net/wiki/spaces/EF/pages/2189262924/EDM+IIIF+EDM+classes+and+properties)

## Prepare your own edm-iiif files

To create an edm-file using iiif, please fill out the [edm-iiif template file](https://docs.google.com/document/d/1hAiXhP2MdnJZPbmBG8hcaKLwAHnuCADi-m0hAVYubp0/edit) inserting your own metadata and copy-paste into your favourite xml editor (or just copy-paste it into Notepad).
```
* Yellow: link to the image(s) in the repository that you created in part 1 of this workshop
* Green: insert your metadata (or leave the default.)
* Orange: insert your rights statements (!Make sure your rights statements are valid, if you are unsure, leave the default.)
```
* Save as .xml
* Create a folder and put the file in it
* Zip the folder
* Upload the folder in the Sandbox (See next section)
