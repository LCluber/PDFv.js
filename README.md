## Synopsis

[PDFv.js](http://pdfvjs.lcluber.com) is an open source PDF viewer written in TypeScript.

## Motivation

The goal of this library is to provide an easy way to display pdf documents in the browser.

## Installation

```bash
$ npm install @lcluber/pdfvjs
```
Or download it **[here](http://pdfvjs.lcluber.com/#download)**.

## Usage

### ES6

*Include 'node-modules/@lcluber/pdfvjs/dist/pdf.min.js' before PDFv.js ES6 module when you create your bundle for the web.*

```html
<canvas id="pdfViewer"></canvas>
```

```javascript
import { Viewer } from '@lcluber/pdfvjs';

Viewer.display('./path/document.pdf', 'pdfViewer', 1);
```

### ES5

```html
<script src="node-modules/@lcluber/pdfvjs/dist/pdfv.iife.min.js"></script>
<canvas id="pdfViewer"></canvas>
```

```javascript
PDFv.Viewer.display('./path/document.pdf', 'pdfViewer', 1);
```

## Demo

See a basic example **[here](http://pdfvjs.lcluber.com/#example)**.

## API Reference

Read the documentation **[here](http://pdfvjs.lcluber.com/doc/)**.

## Tests

No tests to run yet

## Contributors

PDFv.js is still in early development and I would be glad to get all the help you can provide for this project.
To contribute you can clone the project on **[GitHub](https://github.com/LCluber/PDFv.js)** and See **NOTICE.md** for detailed installation walkthrough.

## License

MIT License

Copyright (c) 2018 Ludovic CLUBER

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
