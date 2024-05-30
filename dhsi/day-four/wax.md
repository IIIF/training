# Wax
Wax is a project for creating digital exhibits website similar to Omeka/CollectiveAccess. One of the nice things about Wax is that it allows your collections to be uploaded via a CSV and it will create embeddable IIIF surrogates which are used in the [Wax website](https://minicomp.github.io/wax/).

![wax workflow](https://minicomp.github.io/wax/img/wax_workflow.jpg)


# Wax and Annonatate
Wax requires three ruby tasks to be run in the command line along with a couple of YAML files to be updated to work properly. This can sometimes cause users dependency troubles. Annonatate provides an interface that will update your YAML files based on the fields in your CSV files and run the wax processes. It will also set up your Wax website to run via GitHub pages.

![](https://minicomp.github.io/wax/img/wax_workflow.jpg)