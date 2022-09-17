# cfxnes (lib)

JavaScript library for NES emulation in web browser.

- [API](API.md)
- [Examples](examples)


## Example

``` html
<!DOCTYPE html>
<html>
<head>
  <script src="cfxnes.js"></script>
</head>
<body>
  <canvas id="cfxnes"></canvas> <!-- Rendering target -->
  <script>
    cfxnes({rom: 'game.nes'}); // URL of a ROM image to load
  </script>
</body>
</html>
```

## Importing

``` javascript
// CommonJS
const cfxnes = require('cfxnes');

// AMD
define(['cfxnes'], function(cfxnes) {/* ... */});

// Global variable
window.cfxnes;
```

