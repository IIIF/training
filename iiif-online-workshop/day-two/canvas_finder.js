
function loadManifest(event) {
    event.preventDefault();
    let manifest_uri = document.getElementById('manifest_uri').value;
    
    let target_div = document.getElementById('manifest_content');

    if (manifestOK(manifest_uri, target_div)) {
        fetch(manifest_uri)
          .then(response => {
                  if (!response.ok) {
                      throw new Error(response.statusText);
                  }
                  return response.json();
          })
          .then(data => {
            if ("@type" in data) {
                if (data["@type"] != 'sc:Manifest') {
                    showMessage(target_div, 'Manifest Format Error', 'The JSON for this Manifest doesnt look like a Manifest. It should have either a @type of sc:Manifest but has a type of: ' + data["@type"]);
                } else {
                    loadv2(data, target_div);
                }
            } else if ("type" in data) {
                if (data["type"] != 'Manifest') {
                    showMessage(target_div, 'Manifest Format Error', 'The JSON for this Manifest doesnt look like a Manifest. It should have either a type of Manifest but has a type of: ' + data["type"]);
                } else {
                    loadv3(data, target_div);
                }
            } else {
                showMessage(target_div, 'Manifest Format Error', 'The JSON for this Manifest doesnt look like a Manifest. It should have either a @type or type value of Manifest');
            }
          })
          .catch(error => {
                showMessage(target_div, 'Manifest retrieval error', 'I was unable to get the Manifest you supplied due to: ' + error);
          });
                
    }
}

function clearManifest(event) {
    event.preventDefault();
    let target_div = document.getElementById('manifest_content');
    target_div.innerHTML = '';
}

function isObject(variable) {
 return typeof variable === 'object' && !Array.isArray(variable) && variable !== null
}

function filter(event) {
    var source = event.target || event.srcElement;
    console.log(source.value);
    let canvases = document.getElementsByClassName("canvasDiv");
    for (const canvas of canvases) {
        if (source.value == null || source.value.length === 0 || canvas.dataset.label.toLowerCase().includes(source.value.toLowerCase())) {
            canvas.style.display = "flex";
        } else {
            canvas.style.display = "none";
        }
    }
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text, success) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(success, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

function copyURL(event) {
    event.preventDefault();
    var source = event.target || event.srcElement;
    copyTextToClipboard(source.dataset.link, function () {
        source.innerHTML = '<i class="fas fa-copy" aria-hidden="true"></i> Copied!';
        setTimeout(function () {
            source.innerHTML = '<i class="fas fa-copy"></i> Copy Image URL';
        }, 1000)
    });
}

function loadv2(manifest, target_div) {
    if ('sequences' in manifest) {
        let sequences = manifest.sequences;
        if (isObject(sequences)) {
            sequences = [ sequences ];
        }
        let foundCanvas = false;
        let filterDiv = document.createElement('div');
        filterDiv.style="display: flex; justify-content: flex-end; padding-top: 5px; padding-bottom: 5px;"
        filterDiv.innerHTML = '<label for="filter"><b>Filter: </b></label>';

        let textBox = document.createElement('input');
        textBox.style = "margin-left:10px;";
        textBox.id = 'filter';
        textBox.type="text";
        textBox.placeholder="Filter canvas label";
        textBox.addEventListener('input',filter);
        filterDiv.appendChild(textBox);
        target_div.appendChild(filterDiv);

        for (const sequence of sequences) {
            if ('canvases' in sequence) {
                foundCanvas = true;
                for (const canvas of sequence.canvases) {
                    let canvasDiv = document.createElement('div');
                    canvasDiv.style = "border: 1px black solid; padding: 5px;margin-top: 5px;";
                    canvasDiv.className = 'canvasDiv';
                    canvasDiv.dataset.label = canvas.label;

                    let thumbnail = document.createElement('img');
                    thumbnail.src = getCanvasThumbnail(canvas, 150,150);
                    thumbnail.className = 'thumbnail';
                    let thumbDiv = document.createElement('div');
                    thumbDiv.style="display: inline-block;";
                    thumbDiv.appendChild(thumbnail);

                    let contentDiv = document.createElement('div');
                    contentDiv.style="width: 70%; display: inline-block;position: relative; padding-left: 20px;"
                    let label = document.createElement('p');
                    label.innerHTML = '<b>Page Label: </b>' + canvas.label;

                    var iiifURL = canvas.images[0].resource.service["@id"];

                    let link = document.createElement('a');
                    link.href = iiifURL;
                    link.innerHTML = iiifURL;

                    let pLink = document.createElement('p');
                    pLink.innerHTML = '<b>IIIF Image URL: </b><br/>';
                    pLink.appendChild(link);

                    let button = document.createElement('button');
                    button.style = "cursor: pointer; background-color: #0069d9; color: #fff; border-color: #0062cc; font-weight: 400; text-align: center; vertical-align: middle; user-select: none; border: 1px solid transparent; padding: .375rem .75rem; line-height: 1.5; border-radius: .25rem; transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out; -webkit-appearance: button;text-transform: none; overflow: visible; margin: 0; font-family: inherit;box-sizing: border-box; ";
                    button.innerHTML = '<i class="fas fa-copy"></i> Copy Image URL';       
                    button.addEventListener('click', copyURL);
                    button.dataset.link = link;

                    contentDiv.appendChild(label);
                    contentDiv.appendChild(pLink);
                    contentDiv.appendChild(button);
                    canvasDiv.appendChild(thumbDiv);
                    canvasDiv.appendChild(contentDiv);

                    target_div.appendChild(canvasDiv);
                }
            } else {
                if (!foundCanvas) {
                    showMessage(target_div, 'Manifest Error', 'The manifest you supplied contains no canvases so there are no images to show.');
                }
            }
        }
    } else {
        showMessage(target_div, 'Manifest Error', 'The manifest you supplied contains no sequence so there are no images to show.');
    }
}

function loadv3(manifest, target_div) {
     if ('items' in manifest) {
        let canvases = manifest.items;
        let foundCanvas = false;
        let filterDiv = document.createElement('div');
        filterDiv.style="display: flex; justify-content: flex-end; padding-top: 5px; padding-bottom: 5px;"
        filterDiv.innerHTML = '<label for="filter"><b>Filter: </b></label>';

        let textBox = document.createElement('input');
        textBox.style = "margin-left:10px;";
        textBox.id = 'filter';
        textBox.type="text";
        textBox.placeholder="Filter canvas label";
        textBox.addEventListener('input',filter);
        filterDiv.appendChild(textBox);
        target_div.appendChild(filterDiv);

        let canvasLabel = "";
        foundCanvas = true;
        for (const canvas of canvases) {
            let canvasDiv = document.createElement('div');
            canvasDiv.style = "border: 1px black solid; padding: 5px;margin-top: 5px;";
            canvasDiv.className = 'canvasDiv';
            canvasLabel = getLangString(canvas.label);
            canvasDiv.dataset.label = canvasLabel; 

            let thumbnail = document.createElement('img');
            thumbnail.src = getCanvasThumbnail(canvas, 150,150);
            thumbnail.className = 'thumbnail';
            let thumbDiv = document.createElement('div');
            thumbDiv.style="display: inline-block;";
            thumbDiv.appendChild(thumbnail);

            let contentDiv = document.createElement('div');
            contentDiv.style="width: 70%; display: inline-block;position: relative; padding-left: 20px;"
            let label = document.createElement('p');
            label.innerHTML = '<b>Page Label: </b>' + canvasLabel; 

            var iiifURL = canvas.items[0].items[0].body.service[0]["@id"];

            let link = document.createElement('a');
            link.href = iiifURL;
            link.innerHTML = iiifURL;

            let pLink = document.createElement('p');
            pLink.innerHTML = '<b>IIIF Image URL: </b><br/>';
            pLink.appendChild(link);

            let button = document.createElement('button');
            button.style = "cursor: pointer; background-color: #0069d9; color: #fff; border-color: #0062cc; font-weight: 400; text-align: center; vertical-align: middle; user-select: none; border: 1px solid transparent; padding: .375rem .75rem; line-height: 1.5; border-radius: .25rem; transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out; -webkit-appearance: button;text-transform: none; overflow: visible; margin: 0; font-family: inherit;box-sizing: border-box; ";
            button.innerHTML = '<i class="fas fa-copy"></i> Copy Image URL';       
            button.addEventListener('click', copyURL);
            button.dataset.link = link;

            contentDiv.appendChild(label);
            contentDiv.appendChild(pLink);
            contentDiv.appendChild(button);
            canvasDiv.appendChild(thumbDiv);
            canvasDiv.appendChild(contentDiv);

            target_div.appendChild(canvasDiv);
        }
    } else {
        showMessage(target_div, 'Manifest Error', 'The manifest you supplied contains no sequence so there are no images to show.');
    }

}

function manifestOK(manifest_uri, target_div) {
    if (manifest_uri.startsWith('http://')) {
        showMessage(target_div, 'http/https issue', 'The manifest link you supplied is a http link. To use this tool you need to supply a link that starts with https. This is a common problem you come across with IIIF. If the webpage you are using is https then the Manifest link must also start with https. The training site and most modern websites uses https which is a secure way of accessing the web.');

        return false;
    }
    return true;
}

/* 
 * Get thumbnail URL from canvas with canvas_id
 * canvas_id can contain a fragement
 * image returned will be the same size as desired_width and height or bigger
 * zero means discount axis. 
 */
function getCanvasThumbnail(canvas, desired_width, desired_height) {
    // First try canvas thumbnail
    if ('thumbnail' in canvas && (isObject(canvas.thumbnail) || Array.isArray(canvas.thumbnail))) {
        let thumbnail = canvas.thumbnail;
        if (Array.isArray(thumbnail)) {
            thumbnail = thumbnail[0];
        }
        if ('width' in thumbnail && 'height' in thumbnail) {
            if (thumbnail.width > desired_width && thumbnail.height > desired_height) {
                if ("@id" in thumbnail) {
                    return thumbnail["@id"];
                } else {
                    return thumbnail.id;
                }
            }
        }
    }

    // Next try first image
    if ('images' in canvas && Array.isArray(canvas.images)
             && 'resource' in canvas.images[0] && typeof canvas.images[0].resource === 'object') {
        if ('service' in canvas.images[0].resource && typeof canvas.images[0].resource.service === 'object'
                    && '@id' in canvas.images[0].resource.service && typeof canvas.images[0].resource.service["@id"] === 'string') {

            let imageService = canvas.images[0].resource.service;
            let isLevel0 = false;
            if ('profile' in imageService) {
                if (Array.isArray(imageService.profile)) {
                    imageService.profile.forEach(function(value) {
                        if (typeof key === 'string' && key === "http://iiif.io/api/image/2/level0.json") {
                            isLevel0 = true;
                        }
                    });
                } else if (typeof imageService.profile === 'string' && imageService.profile === "http://iiif.io/api/image/2/level0.json") {
                    isLevel0 = true;
                }
            }

            let imageId = imageService["@id"];

            var region = "full";
            
            let size = "";
            if (!isLevel0) {
                let widthStr = "";
                let heightStr = "";
                if (desired_width != 0) {
                    widthStr = "" + desired_width;
                }
                if (desired_height != 0) {
                    heightStr = "" + desired_height;
                }
                size = widthStr + "," + heightStr;
            } else {
                // Find size that is bigger than the one we want. 
                if ('sizes' in imageService && Array.isArray(imageService.sizes)) {
                    smallest_width = imageService.width;
                    smallest_height = imageService.height;

                    imageService.sizes.foreach(function(sizeOption) {
                        if ('width' in sizeOption && 'height' in sizeOption) {
                            if (sizeOption.width < smallest_width && sizeOption.height < smallest_height) {
                                smallest_width = sizeOption.width;
                                smallest_height = sizeOption.height;
                            }
                        }
                    });

                    size = "" + smallest_width + "," + smallest_height;
                } else {
                    // At this point we should go and get the info.json
                    // No sizes so just have to use full 
                    size = "full";
                }
            }

            return imageId + '/' + region + '/' + size + '/0/default.jpg';
        } else {
            // No image service so just return image. Really this should have a thumbnail
            return canvas.images[0].resource["@id"];
        }
    }
}

function getLangString(label) {
    if ('en' in label) {
        return label.en;
    } else if ('none' in label) {
        return label.none;
    } else {
        return label;
    }
}

function showMessage(div, title, message) {
    div.innerHTML = '';

    let h3 = document.createElement('h3');
    h3.innerHTML = title;
    div.appendChild(h3);

    let p = document.createElement('p');
    p.innerHTML = message
    div.appendChild(p);
    
}
