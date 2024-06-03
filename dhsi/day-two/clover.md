# Clover

## Embedding clover
Clover isn't particularly configurable using Vanilla JS. If you would like more customizable options you will have to use it with React. [https://samvera-labs.github.io/clover-iiif](https://samvera-labs.github.io/clover-iiif) has all the options avaliable for Clover with React.

```
<html>
  <head>
    <title>Clover IIIF - Viewer - Web Component</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <script src="https://www.unpkg.com/@samvera/clover-iiif@latest/dist/web-components/index.umd.js"></script>
 
    <clover-viewer
      id="https://api.dc.library.northwestern.edu/api/v2/works/8a833741-74a8-40dc-bd1d-c416a3b1bb38?as=iiif" 
    />
  </body>
</html>
```

<script src="https://www.unpkg.com/@samvera/clover-iiif@latest/dist/web-components/index.umd.js"></script>
 
<clover-viewer
  id="https://api.dc.library.northwestern.edu/api/v2/works/8a833741-74a8-40dc-bd1d-c416a3b1bb38?as=iiif" 
/>