# unicode-keymap

Mapping of key character types to Unicode PUA (Private Use Area) code points.

[![Build Status](https://travis-ci.org/hadynz/unicode-keymap.svg?branch=master)](https://travis-ci.org/hadynz/unicode-keymap)

#### Overview

Implementation of the [W3C WebDriver spec](http://www.w3.org/TR/2012/WD-webdriver-20120710/#character-types) 
that provides an object that maps character types to UNICODE characters.

This module was raised to satisfy the need for any keys-based interaction or testing that needs to simulate
a sequence of keyboard events representing the keys in the `keysToSend` parameter of the 
[`sendKeys`](http://www.w3.org/TR/2012/WD-webdriver-20120710/#widl-WebElement-sendKeys-void-stringArray-keysToSend) 
WEBIDL method.

## Installation

  Install with npm:

    $ npm install unicode-keymap
    
## Usage

For node:

```js
var keys = require('unicode-keymap');

keys.ENTER
// -> \uE007
```

## License

  MIT
