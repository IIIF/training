# Collections

## Description

Collections are away to organize manifests into groups, allow us the ability to share groups of manifest with a single URL.


## Collection Tree Navigator for Mirador

The collection tree navigator for Mirador came about to address the need of showing objects in nested collections to ease navigation and avoid server slow-down. Collection-level manifests are often very large and can contain many sub-collections within them. As such, it became important for users to navigate through collections easily and without losing context.

The aeature allows users to:

- View entire collections with sub-collections in a tree structure on manifest selection panel
- Easily navigate across collections


## Activity

Let's create your and serve your own collection

1. Find at least five manifests and organize them into a collection, following the IIIF guidelines
  * [http://iiif.io/api/presentation/2.1/#collection](http://iiif.io/api/presentation/2.1/#collection)
1. Save your collection as `mycollection.json` in the `myManifests` folder on your Desktop.
1. Server your manifests and collections with `$ http-server --cors`
1. In the `example.html` file in the Mirador directory file configure mirador to load a collection.
    ```json
    "data": [
      { "collectionUri": "https://localhost:8080/mycollection.json"}
    ]
    ```
1 Configure mirador to allow to browse your collection by changing the manifestsPanel module to the CollectionTreeManifestsPanel"

    ```json
    "manifestsPanel": {
      "module": "CollectionTreeManifestsPanel",
      }
      ```
