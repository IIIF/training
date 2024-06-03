# Annotation Stores

Annotation stores are basically applications with a database you can send an API call to and it will save and store an annotation.

So Mirador or Annotorious will send a POST request with the contents of the annotation to an annotation store and it will recieve the annotation and write it to some kind of storage.

Like image servers there are a number to choose from:

https://github.com/IIIF/awesome-iiif#annotations

Popular ones include:
 * annotot - Simple IIIF annotations mounted in a Ruby on Rails applications by Jack Reed
 * Elucidate - Java and Postgres annotation server by Digirati
 * SimpleAnnotationServer - Java annotation server backed by an Apache Jena triple store, Elastic Search, or Solr. - developed while working at the NLW