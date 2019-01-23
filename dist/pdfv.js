/** MIT License
* 
* Copyright (c) 2018 Ludovic CLUBER 
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
* http://pdfvjs.lcluber.com
*/

import { Logger } from '@lcluber/mouettejs';


class Viewer {
    constructor() {
        this.numPages = 0;
    }
    display(documentPath, canvasId, pageNumber) {
        return new Promise((resolve, reject) => {
            var _this = this;
            pdfjsLib.getDocument(documentPath).then(function (pdf) {
                Logger.info('PDF loaded');
                _this.numPages = pdf.numPages;
                if (pageNumber > pdf.numPages) {
                    Logger.error('Trying to render page ' + pageNumber + ' on a document containing ' + pdf.numPages + ' pages');
                }
                else {
                    pdf.getPage(pageNumber).then(function (page) {
                        Logger.info('Page loaded');
                        let scale = 1.5;
                        let viewport = page.getViewport(scale);
                        let canvas = document.getElementById(canvasId);
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;
                        let renderContext = {
                            canvasContext: canvas.getContext('2d'),
                            viewport: viewport
                        };
                        let renderTask = page.render(renderContext);
                        renderTask.then(function () {
                            Logger.info('Page rendered');
                            resolve();
                        });
                    });
                }
            }, function (error) {
                Logger.error(error);
                reject();
            });
        });
    }
}

export { Viewer };
