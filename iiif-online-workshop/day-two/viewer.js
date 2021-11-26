infoJsons = {};

/*
 * Config:
 * {
 *      # identifer for div
 *      div: "div_id", 
 *      # IIIF Images to use
 *      images: [
 *          'http://example.com/image1'
 *      ],
 *      # Optional regions to use
 *      regions: [
            'full',
            'square' 
 *      ],
        # Optional sizes
        sizes: [
            '500,'
        ],
        # Optional rotations
        rotations: [
            '45',
            '90'
        ],
        # Optional qualities
        qualities: [
            'default',
            'gray'
        ]
 * }
 */
function addViewer(config) {
    let iiifContent = getURLParameter("iiif-content");
    if (iiifContent != null) {
        config.images.unshift(iiifContent);
    }
    if (typeof addExtraImages == 'function') { 
        addExtraImages(config); 
    }
    addParams(config); 
}

function addParams(config) {
    var div = document.getElementById(config.div);

    var ul = createElementStyle('ul', 'demo');
    div.appendChild(ul)
    
    addIdentifiers(ul, config);
    addRegion(ul, config);
    addSizes(ul, config);
    addRotation(ul, config);
    addQuality(ul, config);
    addFormats(ul, config);

    var linkDiv = document.createElement('div');
    linkDiv.setAttribute('style', 'margin-bottom:20px');
    div.appendChild(linkDiv);

    var aLink = createElementStyle('a', 'centre');
    aLink.id = "link";
    aLink.setAttribute('target', '_blank');
    aLink.setAttribute('rel', 'noopener noreferrer');
    linkDiv.appendChild(aLink);

    var imgDiv = createElementStyle('div', 'iiif-image-api text-center');
    div.appendChild(imgDiv);

    var img = createElementStyle('img', 'centre');
    img.id = config.div + '_iiif-image-api-img';
    imgDiv.appendChild(img);
    showImage(config.div,null);
}

function cacheInfoJson(identifier) {
    if (!(identifier in infoJsons)) {
        var request = new XMLHttpRequest();
        request.open('GET', identifier + '/info.json', false);  // `false` makes the request synchronous
        request.send(null);

        infoJsons[identifier] = JSON.parse(request.responseText);
    }
}

function addIdentifiers(ul, config) {
    var li = document.createElement('li');
    if ('highlight' in config && config.highlight.includes('identifier')) {
        li.setAttribute('class', 'highlight');
    }
    ul.appendChild(li);
    li.appendChild(createDescription('Identifier'));

    var div = createElementStyle('div', 'attr2');
    li.appendChild(div);

    var select = createElementStyle('select','identifier');
    select.id = 'identifier_' + config.div;
    select.onchange = function(){  showImage(config.div,'identifier'); };
    div.appendChild(select);

    for (var i = 0; i < config.images.length; i++) {
        cacheInfoJson(config.images[i]);
    }
    addOptions('identifier_' + config.div, config.images, '', '');
}

function addRegion(ul, config) {
    var li = document.createElement('li');
    if ('highlight' in config && config.highlight.includes('region')) {
        li.setAttribute('class', 'highlight');
    }
    ul.appendChild(li);
    li.appendChild(createDescription('Region'));

    var div = createElementStyle('div', 'attr2');
    li.appendChild(div);

    var select = createElementStyle('select','region');
    select.id = 'region_' + config.div;
    select.onchange = function(){ showImage(config.div,'region'); };
    div.appendChild(select);

    var regions = null;
    if ('regions' in config) {
        // Use supplied regions
        regions = config.regions;
    }
    updateRegion(config.div, regions);
}

function clearSelect(select) {
   var i, L = select.options.length - 1;
   for(i = L; i >= 0; i--) {
      select.remove(i);
   }
}

function updateRegion(uuid, suppliedRegions) {
    if (suppliedRegions) {
        var regions = suppliedRegions;
    } else {
        var regions = ['full'];
        if (supports(getCurrentImage(uuid), 'regionSquare')) {
            regions.push('square');
        }
        var infoJson = infoJsons[getCurrentImage(uuid)];
        if (infoJson.width > 1500 && infoJson.height > 1500) {
            centerX = Math.floor(infoJson.width / 2);
            centerY = Math.floor(infoJson.height / 2);
            regions.push((centerX - 500) + "," + (centerY - 500) + ",1000,1000");
        }

    }
    addOptions('region_' + uuid, regions, '', '');
}
function addSizes(ul, config) {
    var li = document.createElement('li');
    if ('highlight' in config && config.highlight.includes('size')) {
        li.setAttribute('class', 'highlight');
    }
    ul.appendChild(li);
    li.appendChild(createDescription('Size'));

    var div = createElementStyle('div', 'attr2');
    li.appendChild(div);

    var select = createElementStyle('select','size');
    select.id = 'size_' + config.div;
    select.onchange = function(){ showImage(config.div,'size'); };
    div.appendChild(select);

    if ('sizes' in config) {
        // Use supplied sizes
        var sizes = config.sizes;
    } else {
        var sizes = ['250,', '500,', '1000,'];
        if (serviceVersion(getCurrentImage(config.div)) == '2') {
            sizes.push('full');
        } else {
            sizes.push('max');
        }
    }

    addOptions('size_' + config.div, sizes, '', '');
}

function addRotation(ul, config) {
    var li = document.createElement('li');
    if ('highlight' in config && config.highlight.includes('rotation')) {
        li.setAttribute('class', 'highlight');
    }
    ul.appendChild(li);
    li.appendChild(createDescription('Rotation'));

    var div = createElementStyle('div', 'attr2');
    li.appendChild(div);

    var select = createElementStyle('select','rotation');
    select.id = 'rotation_' + config.div;
    select.onchange = function(){ showImage(config.div,'rotation'); };
    div.appendChild(select);

    var rotations = null;
    if ('rotations' in config) {
        // Use supplied rotations
        rotations = config.rotations;
    }
    updateRotation(config.div, rotations);
}

function updateRotation(uuid, suppliedRotations) {
    if (suppliedRotations) {
        var rotations = suppliedRotations;
    } else {
        var rotations = ['0'];
        if (supports(getCurrentImage(uuid), 'rotationBy90s')) {
            rotations.push('90');
            rotations.push('180');
            rotations.push('270');
        }
        if (supports(getCurrentImage(uuid), 'rotationArbitrary')) {
            rotations.push('45');
            rotations.push('135');
        }
        if (supports(getCurrentImage(uuid), 'mirroring')) {
            rotations.push('!0');
            rotations.push('!180');
        }
    }
    addOptions('rotation_' + uuid, rotations, '', '');
}

function addOptions(identifier, options, prepend, append) {
    var select = document.getElementById(identifier);
    clearSelect(select);
    for (var i = 0; i < options.length; i++) {
        var optionValue = options[i];
        option = document.createElement('option');
        option.text = prepend + optionValue + append;
        option.value = optionValue;

        select.appendChild(option);
    }
}

function addQuality(ul, config) {
    var li = document.createElement('li');
    if ('highlight' in config && config.highlight.includes('quality')) {
        li.setAttribute('class', 'highlight');
    }
    ul.appendChild(li);
    li.appendChild(createDescription('Quality'));

    var div = createElementStyle('div', 'attr2');
    li.appendChild(div);

    var select = createElementStyle('select','quality');
    select.id = 'quality_' + config.div;
    select.onchange = function(){ showImage(config.div,'quality'); };
    div.appendChild(select);

    var qualities = null;
    if ('qualities' in config) {
        // Use supplied qualities
        qualities = config.qualities;
    }
    updateQuality(config.div, qualities);
}

function updateQuality(uuid, suppliedQualities) {
    var select = document.getElementById('quality_' + uuid);
    clearSelect(select);
    if (suppliedQualities) {
        var qualities = suppliedQualities;
    } else {
        var qualities = getImageQualities(uuid);
    }
    addOptions('quality_' + uuid, qualities, '', '');
}

function addFormats(ul, config) {
    var li = document.createElement('li');
    if ('highlight' in config && config.highlight.includes('format')) {
        li.setAttribute('class', 'highlight');
    }
    ul.appendChild(li);
    li.appendChild(createDescription('Format'));

    var div = createElementStyle('div', 'attr2');
    li.appendChild(div);

    var select = createElementStyle('select','format');
    select.id = 'format_' + config.div;
    select.onchange = function(){ showImage(config.div,'format'); };
    div.appendChild(select);

    var formats = null;
    if ('formats' in config) {
        // Use supplied formats
        formats = config.formats;
    }
    updateFormats(config.div, formats);
}

function updateFormats(uuid, suppliedFormats) {
    var select = document.getElementById('format_' + uuid);
    clearSelect(select);
    if (suppliedFormats) {
        var formats = suppliedFormats;
    } else {
        var formats = getImageFormats(uuid);
    }
    addOptions('format_' + uuid, formats, '.', '');
}

function serviceVersion(image) {
    var infoJson = infoJsons[image];
    var version = '2';
    if ('type' in infoJson && infoJson['type'] == "ImageService3") {
        version = '3';
    }
    return version;
}

function getImageFormats(uuid) {
    var image = getCurrentImage(uuid);
    var infoJson = infoJsons[image];

    var version = serviceVersion(image);
    var formats = ['jpg'];
    if (version == '2') {
        if ('profile' in infoJson) {
            for (i = 0; i < infoJson.profile.length; i++) {
                if (typeof infoJson.profile[i] === 'object') {
                    if ('formats' in infoJson.profile[i]) {
                        for (var j = 0; j < infoJson.profile[i]['formats'].length; j++) {
                            if (!formats.includes(infoJson.profile[i]['formats'][j])) {
                                formats.push(infoJson.profile[i]['formats'][j]);
                            }
                        }
                    }    
                } else {
                    if (infoJson.profile[i] == "http://iiif.io/api/image/2/level2.json" && !(formats.includes('png'))) {
                        formats.push('png');
                    }
                }
            }
        }
    } else {
        if (infoJson['profile'] == 'level2') {
            formats.push('png');
        }
        if ('extraFormats' in infoJson) {
            for (var i = 0; i < infoJson['extraFormats']; i++) {
                if (!formats.includes(infoJson['extraFormats'][i])) {
                    formats.push(infoJson['extraFormats'][i]);
                }
            }
        }    
    }
    return formats;
}

function getImageQualities(uuid) {
    var image = getCurrentImage(uuid);
    var infoJson = infoJsons[image];

    var version = serviceVersion(image);
    if (version == '2') {
        if ('profile' in infoJson) {
            for (i = 0; i < infoJson.profile.length; i++) {
                if (typeof infoJson.profile[i] === 'object' && 'qualities' in infoJson.profile[i]) {
                    let qualities = infoJson.profile[i]['qualities'];
                    if (!qualities.includes("default")) {
                        qualities.unshift("default");
                    }
                    return qualities;
                }
            }
        }
        return ['default'];
    } else {
        if ('extraQualities' in infoJson) {
            return infoJson['extraQualities']
        } else {
            return ['default'];
        }    
    }
}

function supports(image, feature) {
    var infoJson = infoJsons[image];

    var version = serviceVersion(image);
    if (version == '2') {
        if ('profile' in infoJson) {
            for (i = 0; i < infoJson.profile.length; i++) {
                if (typeof infoJson.profile[i] === 'object' && 'supports' in infoJson.profile[i]) {
                    return infoJson.profile[i]['supports'].includes(feature);
                }
            }
        }
        return false;
    } else {
        if ('extraFeatures' in infoJson) {
            return infoJson['extraFeatures'].includes(feature);
        }
        return false;
    }
}

function getCurrentImage(ident) {
    var select = document.getElementById('identifier_' + ident);
    return select.options[select.selectedIndex].value;
}

function createDescription(text) {
    var div = document.createElement('div');
    div.setAttribute('class', 'attr');
    div.innerHTML = text;

    return div;
}

function createElementStyle(element, style) {
    var el = document.createElement(element);
    el.setAttribute('class', style);

    return el;
}
    
 /*   <li>
      <div class="attr">Region</div>
      <div class="attr2">
        <select id="region" class="changeIIIF" onchange="showImage(); return true">
          <option value="full">full/</option>
          <option value="square">square</option>
          <option value="1000,100,3000,2000">1000,100,3000,2000</option>
          <option value="2000,3000,2000,3000">2000,3000,2000,3000</option>
        </select>
      </div>
    </li>
    <li>
      <div class="attr">Size</div><div class="attr2">
        <select id="size" class="changeIIIF" onchange="showImage(); return true">
          <option value="2000,">2000,/</option>
          <option value="1000,">1000,/</option>
          <option value="500," selected="selected">500,/</option>
          <option value="250,">250,/</option>
        </select>
      </div>
    </li>
    <li>
      <div class="attr">Rotation</div>
      <div class="attr2">
        <select id="rotation" class="changeIIIF" onchange="showImage(); return true">
          <option value="0">0/</option>
          <option value="45">45/</option>
          <option value="90">90/</option>
          <option value="135">135/</option>
          <option value="180">180/</option>
          <option value="225">225/</option>
          <option value="270">270/</option>
          <option value="315">315/</option>
          <option value="!0">!0</option>
          <option value="!180">!180</option>
        </select>
      </div>
    </li>
    <li>
      <div class="attr">Quality</div>
      <div class="attr2">
        <select id="quality" class="changeIIIF" onchange="showImage(); return true">
          <option value="default">default</option>
          <option value="color">color</option>
          <option value="gray">gray</option>
          <option value="bitonal">bitonal</option>
        </select>
        </div>
    </li>
    <li>
      <div class="attr">Format</div>
      <div class="attr2">
        <select id="format" class="changeIIIF" onchange="showImage(); return true">
          <option value=".jpg">.jpg</option>
          <option value=".png">.png</option>
          <option value=".gif">.gif</option>
        </select>
      </div>
    </li>
</ul>
<div style="margin-bottom:20px;">
    <a id="link" class="centre" href="https://ids.lib.harvard.edu/ids/iiif/25286607/full/500,/0/default.jpg" id="image-url" target="_blank" rel="noopener noreferrer">https://ids.lib.harvard.edu/ids/iiif/25286607/full/500,/0/default.jpg</a>
</div>
<div id="iiif-image-api-div" class="iiif-image-api text-center">
    <a id="highlight">
    </a>
</div>
<div class="iiif-image-api text-center">
    <img class="centre" id="iiif-image-api-img" src="https://ids.lib.harvard.edu/ids/iiif/25286607/full/500,/0/native.jpg">
</div>*/



function showImage(uuid, source) {
    if (source == 'identifier') {
        updateRegion(uuid, null);
        updateRotation(uuid, null);
        updateQuality(uuid, null);
        updateFormats(uuid, null);
    }
    var identifier = getSelected(uuid, 'identifier');
    var region = getSelected(uuid, 'region');
    var size = getSelected(uuid, 'size');
    var rotation = getSelected(uuid, 'rotation');
    var quality = getSelected(uuid, 'quality');
    var format = getSelected(uuid, 'format');

    var url = identifier + "/" + region + "/" + size + "/" + rotation + "/" + quality + "." + format;

    var link = document.getElementById('link');
    link.href = url
    link.innerHTML = url 

    //var img = document.getElementById('iiif-image-api-div');
    //img.style.backgroundImage = "url(" + identifier + "/full/" + size + "/0/" + quality + format + ")";

    /*var highlight = document.getElementById('highlight');
    if (region.indexOf(',') != -1) {
        coords = region.split(',');
        highlight.style.top = coords[0] + "px"; 
        highlight.style.left = coords[1] + "px"; 
        highlight.style.width = coords[2] + "px"; 
        highlight.style.height = coords[3] + "px"; 
    } else if (region ==  "full") {
        highlight.style.top = "0px"; 
        highlight.style.left = "0px"; 
        highlight.style.width = img.offsetWidth; 
        highlight.style.height = img.offsetHeight; 
    }*/

    var img = document.getElementById(uuid + '_iiif-image-api-img');
    img.src = url;
}

function getSelected(uuid, ident) {
    var select = document.getElementById(ident + '_' + uuid);
    return select.options[select.selectedIndex].value;
}

function getURLParameter(param) {
    if(typeof(param) == "string" && param.length > 0) {
        if(typeof(window.location.search) == "string" && window.location.search.length > 0) {
            var _results = new RegExp(param + "=([^&]*)", "i").exec(window.location.search);
            if(typeof(_results) == "object" && _results !== null && typeof(_results.length) == "number" && _results.length > 0 && _results[1]) {
                if(typeof(_results[1]) == "string" && _results[1].length > 0) {
                    return unescape(_results[1]);
                }
            }
        }
    }
    return null;
}
