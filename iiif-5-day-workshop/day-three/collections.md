# Collections

## Description

#### Collection Tree Navigator for Mirador

This feature came about to address the need of showing objects in nested collections to ease navigation and avoid server slow-down. Collection-level manifests are often very large and can contain many sub-collections within them. As such, it became important for users to navigate through collections easily and without losing context.

See the code for Collection Tree [here](https://github.com/utlib/mirador/tree/develop_collection_tree_lazy)

Allows users to:

- View entire collections with sub-collections in a tree structure on manifest selection panel
- Easily navigate across collections

Demo

You can view Mirador advanced features [here](http://projectmirador.org/demo/advanced_features.html)


## Activity

Let's create your own collection

* Find at least five manifests and organize them into a collection, following the IIIF guidelines
  * [http://iiif.io/api/presentation/2.1/#collection](http://iiif.io/api/presentation/2.1/#collection)
* Then configure mirador to load a collections
  * `"data": [
      { "collectionUri": "https://scta.info/iiif/scta/collection"}
    ]`
* Configure mirador to allow to browse your collection by changing the manifestsPanel module to the CollectionTreeManifestsPanel"
  * `"manifestsPanel": {
      "module": ""CollectionTreeManifestsPanel",
      }`
