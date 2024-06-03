# Creating static tiled images

There are a couple of command line libraries that will create static images. They are often listed with dynamic iiif servers or api libraries in the [Awesome IIIF readme] (https://github.com/IIIF/awesome-iiif?tab=readme-ov-file).


1. [iiif_s3](https://github.com/cmoa/iiif_s3) - Ruby library for generating a static IIIF level 0 Image and Presentation API server on Amazon S3.
2. [iiif](https://github.com/zimeon/iiif) - Python library providing a reference implementation of the Image API. Also includes a test server and static tile generator.
3. [iiif-tiler](https://github.com/glenrobson/iiif-tiler) - Java library for generating static IIIF tiles (compliant with the V2.1 and 3.0 of the IIIF Image API).
4. [iiif-static-choices](https://github.com/bodleian/iiif-static-choices) (not in readme).


# Automating the process
1. https://github.com/dnoneill/dhsi-iiif-2024/blob/main/day1/images_to_iiif.py

The script above allows pdf, png, jpg, jp2, and tif files to be dumped into a folder, the script to be run and all files in the folder will be created into level 0 IIIF images. It uses the iiif library (#2) to create these tiled images.

It also preserves the file structure of the files you have dumped. For example, if you have two folders (cat-photos and dog-photos) in images, the output directory will keep that folder structure.

## Install and running steps
1. Clone repository locally. `git clone https://github.com/dnoneill/dhsi-iiif-2024.git`
2. Make sure python with pip is installed
3. Create virtual environment. `python3 -m venv [nameofenv]`
4. Activate virtual environment. `source [nameofenv]/bin/activate`
5. Install dependencies `pip3 install -r requirements.txt`
6. Dump files you want to convert into the `images` folder.
7. Move to the script directory `cd day1`
8. Run the script `python3 images_to_iiif.py`
9. View your images in the `iiif` folder

## If the above doesn't work
1. Create fork of https://github.com/dnoneill/dhsi-iiif-2024
2. Clone your fork locally: `git clone https://github.com/[yourusername]/dhsi-iiif-2024`
3. add your images to the `images` folder.
4. add your images to the repository `git add images`
5. create a commit message `git commit -m "add images"`
6. push to your repository `git push origin main`
7. Wait for the script to run, you can view the progress here: https://github.com/[yourusername]/dhsi-iiif-2024/actions
8. When it's green you should have files in the iiif folder.


# Thoughts?
- Look at the files we have created. What can you tell about them. How do you think these are used?
- Do they differ from the Workbench?
- What are some limitations of this method?
- What are some positivies?