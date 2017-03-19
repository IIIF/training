# Universal Viewer and Mirador
So far we've confined ourselves mostly to the IIIF Image API. Tools like OpenSeadragon and Leaflet sit on top of the Image API to give you zooming behaviour, but hat if you want all the richness of navigating structured collections: providing information and metadata to your users, tables of contents, and annotation?

The Presentation API gives you the tools to model these features of your content, and the Universal Viewer and Mirador are "full IIIF viewers" in the sense that they manifest this content for the user.
### Universal Viewer
The [UV](http://universalviewer.io/examples/#?c=0&m=0&s=0&cv=0&xywh=-1377%2C-197%2C5321%2C3936) has been developed as an open source tool by the British firm Digirati for use in the British Library's IIIF environment. It takes in a manifest or collection and gives you a window into its content so you can view its metadata and navigate it in various ways.
It is available on `npm` and has many examples at the link above.
### Mirador
Mirador grew out of the needs of Art History and Manuscripts scholars at Stanford University and has grown through a multi-institutional collaboration with Harvard University and about 2 dozen contributors from around the world. In addition to viewing, it provides configurations for saving state, creating annotations through your backend, and comparison of multiple object from different institutions in a windowed workspace.

For general project information and demos, see [ProjectMirador.org](http://projectmirador.org/).
To get started, visit the [documentation](http://projectmirador.org/docs/docs/getting-started.html)

Mirador is available as a pre-build distribution, through `npm`, or through the recent [Mirador-rails gem](https://github.com/sul-dlss/mirador_rails).

### Where Do Manifests Come From?
Once you have an image server running, you can create Presentation API "manifests" that point to those resources and provide enriched structure and presentational information to viewers like Mirador and UV. Many institutions generate their presentation manifests from existing institutional metadata to show their users. Others create them by hand.

Here is a very simple, but complete, manifest response from the specifications: [http://iiif.io/api/presentation/2.1/#c-example-manifest-response](http://iiif.io/api/presentation/2.1/#c-example-manifest-response)

And here are some more complex ones:
[https://purl.stanford.edu/qm670kv1873/iiif/manifest.json](https://purl.stanford.edu/qm670kv1873/iiif/manifest.json)
[http://iiif.harvardartmuseums.org/manifests/object/320567](http://iiif.harvardartmuseums.org/manifests/object/320567)
[http://iiif.bodleian.ox.ac.uk/iiif/manifest/51a65464-6408-4a78-9fd1-93e1fa995b9c.json](http://iiif.bodleian.ox.ac.uk/iiif/manifest/51a65464-6408-4a78-9fd1-93e1fa995b9c.json)
[http://media.nga.gov/public/manifests/nga_highlights.json](http://media.nga.gov/public/manifests/nga_highlights.json)
