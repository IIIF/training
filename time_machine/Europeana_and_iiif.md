# HOW HAS EUROPEANA ADOPTED IIIF?
### By Fiona Mowat

* An [EDM extension](https://europeana.atlassian.net/wiki/spaces/EF/pages/2189262924/EDM+IIIF+EDM+classes+and+properties) was created to allow partners to supply links to IIIF resources and manifests from their own services 
* Europeana has reviewed its technology stack to be aligned with IIIF standards
* Reused available IIIF solutions for display and playout

## EDM 
### 3 Core classes

* `edm:ProvidedCHO` Class representing the provided cultural heritage object
* `edm:WebResource` Class for the web resource that is the digital representation
* `ore:Aggregation` Class that groups together the cultural heritage object with its digital version
---
* Each class starts with the “rdf:about” statement containing the identifier of the resource
* The class itself can be referred to within another class using the “rdf:resource” statement containing the same identifier

## IIIF to EDM Profile
### Classes and key properties to use within the classes 

 Class | Key properties
 ----------- | ----------- 
`ore:Aggregation` | edm:isShownBy or edm:hasView or edm:object 
`edm:WebResource` | svcs:has_service dcterms:isReferencedBy
`svcs:Service` | dcterms:conformsTo doap:implements


