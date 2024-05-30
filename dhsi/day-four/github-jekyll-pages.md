# Jekyll
Jekyll is a static site generator. A static site generator is a framework that allows the creation of static html pages without having to manually code them. For example, if you want your website to have a header image on every page if you were to write that in HTML you would have to add the code for the header in every page. static site generators allows you to write the code for the header image in one file and define how the page looks by layouts.

- [NC Architects and Builders](https://ncarchitects.lib.ncsu.edu)
- [Honoring the Fallen: An Interactive Memorial Map](https://falveydigitalscholarship.github.io/honoringthefallen)
- [Annonatate](https://annonatate.github.io/annonatate/)
- [Code4Lib Conference Website](https://2024.code4lib.org/)
- [Wax](https://minicomp.github.io/wax/)

# Jekyll Themes + Plugins
## [Themes](https://jekyllrb.com/docs/themes/)
Jekyll also provides a number of open source themes which provide a framework for a website that allows you to add your own data to a pre-exising framework without having to do a bunch of coding. "Honoring the Fallen: An Interactive Memorial Map" use a theme called Flaneur.

## [Plugins](https://jekyllrb.com/docs/plugins/)
Jekyll also provides a way to create your own plugins or use existing plugins. They allow you create custom code for your site without having to modify the Jekyll source code. Plugins include those that provide search, pagination, and CMS graphical interface.

# GitHub pages
GitHub pages is a static site hosting that will host any static file. We have gone over how to [enable a GitHub pages site](/day-two/github-publishing.html). If you use any static site generator other than Jekyll you will have to run the command for building the static site either in your command line or using [GitHub actions](https://docs.github.com/en/actions). GitHub actions are basically virtual environments that allow you install dependencies, run any command line arguments and write to your GitHub repository. Using a [GitHub actions](https://github.com/dnoneill/dhsi-iiif-2024/blob/main/.github/workflows/biiif.yml) was how we were able [autogenerate a manifest](/day-two/auto-generate-manifest.html).  


# Other Static Site generators
- [Hugo](https://gohugo.io/) - Main selling point is build speed
- [Astro.js](https://astro.build/) - Allows integration of other frameworks including React, Vue.js, etc.