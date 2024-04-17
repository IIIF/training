# Islandora/Drupal 

<a href="https://islandora.ca/ ">Islandora</a> is an open-source software framework designed to help institutions and organizations and their audiences collaboratively manage, and discover digital assets using a best-practices framework. Islandora makes use of <a href="https://www.drupal.org/">Drupal</a>, a scalable, open platform for web content management and digital experiences, as the presentation layer for collections.

Similar to Omeka, both Islandora and Drupal have a module-based structure that allows users to customize their site depending on need. At present, there are over 40,000 Drupal modules that touch on a range of needs such as interface design, analytics, metadata and libraries. 

See here for a full list of Drupal moduel see: https://www.drupal.org/project/project_module?page=3 

Islandora also has a large number of modules and can be seen here: https://github.com/Islandora-Labs/islandora_awesome .


At the University of Toronto, Drupal is used heavily for websites and Islandora for digital collections. As we’ve moved towards implementing IIIF library-wide it became necessary to ensure Islandor/Drupal could work with IIIF in some capacity. 

### Modules 
<a href="https://github.com/utlib/islandora_mirador_bookreader/tree/italian-paleography">Mirador Image viewer module (UofT)</a>: 
<li>View large images, books, collections etc. in  Mirador. </li> 
<li> Pan and zoom capabilities + image manipulation</li> 
<li>Point to a datastream in Fedora or url from a iiif server</li>
<li> Viewer for Drupal alone built by <a href="https://www.drupal.org/project/mirador">Zyxware Technologies</a> </li>
<br></br>
<a href="https://github.com/utlib/islandora_sc_manifest/tree/italian-paleography ">IIIF manifest generator module (UofT)</a>:
<li>Generate manifests from images and metadata</li>
<li> Save as a datastream in Fedora</li>
<li>Other example from <a href="https://github.com/yale-web-technologies/IIIF-Manifest-Generator ">Yale</a> (presentation API only)</li>
 
### Examples
<a href="https://collections.library.utoronto.ca/IIIF-collections.html">University of Toronto Digital Collections  </a>

<a href="http://boxwood.ago.ca/?_ga=2.71596944.2057167068.1525284991-1649948958.1514482903">Art Gallery of Ontario, Small Wonders Exhibit</a> (using similar custom modules)

<a href="https://life-of-the-buddha-rails.herokuapp.com/mirador?manifest=1&room_id=1 ">The Life of Buddha project</a> (Yale module)