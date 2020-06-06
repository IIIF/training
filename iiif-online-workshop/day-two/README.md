# Image API

<script>
    function showImage() {
        identifier = getSelected('identifier');
        region = getSelected('region');
        size = getSelected('size');
        rotation = getSelected('rotation');
        quality = getSelected('quality');
        format = getSelected('format');

        url = identifier + "/" + region + "/" + size + "/" + rotation + "/" + quality + format;

        link = document.getElementById('link');
        link.href = url
        link.innerHTML = url 

        img = document.getElementById('iiif-image-api-img');
        img.src = url
    }

    function getSelected(ident) {
        select = document.getElementById(ident);
        return select.options[select.selectedIndex].value;
    }
</script>


<ul class="demo">
    <li>
      <div class="attr" id="server">Identifier</div>
      <div class="attr2">
        <select id="identifier" onchange="showImage(); return true">
            <option value="https://ids.lib.harvard.edu/ids/iiif/25286607">https://ids.lib.harvard.edu/ids/iiif/25286607</option>
            <option value="https://dlcs.io/iiif-img/wellcome/5/b14658197.jp2">https://dlcs.io/iiif-img/wellcome/5/b14658197.jp2</option>
            <option value="https://iiif.io/api/image/3.0/example/reference/9ee11092dfd2782634f5e8e2c87c16d5-uclamss_1841_diary_07_02">https://iiif.io/api/image/3.0/example/reference/9ee11092dfd2782634f5e8e2c87c16d5-uclamss_1841_diary_07_02</option>
            <option value="https://ids.si.edu/ids/iiif/CHSDM-317E001E9E352-000001">https://ids.si.edu/ids/iiif/CHSDM-317E001E9E352-000001</option>
            <option value="https://ids.si.edu/ids/iiif/SAAM-1930.12.50_1">https://ids.si.edu/ids/iiif/SAAM-1930.12.50_1</option>
        </select>
      </div>
    </li>
    <li>
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
<div class="iiif-image-api text-center">
    <img class="centre" id="iiif-image-api-img" src="https://ids.lib.harvard.edu/ids/iiif/25286607/full/500,/0/native.jpg">
</div>

<script>
    showImage()
</script>    
