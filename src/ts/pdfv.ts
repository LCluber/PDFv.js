import { Logger } from '@lcluber/mouettejs';
// Using pdfjs in a Typescript project is a mess.
// import typings first
import { PDFJSStatic, PDFDocumentProxy/*, PDFPromise*/ } from 'pdfjs-dist';
// then import the actual library using require() instead of import
let pdfjsLib: PDFJSStatic = require("pdfjs-dist");

export class Viewer {

  static display( documentPath: string, canvasId: string ): void {
    pdfjsLib.getDocument(documentPath).then(function (pdf: PDFDocumentProxy ) {
      Logger.info('PDF loaded');
      // Fetch the first page
      let pageNumber = 1;
      pdf.getPage(pageNumber).then(function(page) {
        Logger.info('Page loaded');
        // you can now use *page* here
        let scale = 1.0;
        let viewport = page.getViewport(scale);
        let canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        // Render PDF page into canvas context
        let renderContext = {
          canvasContext: canvas.getContext('2d'),
          viewport: viewport
        };
        let renderTask = page.render(renderContext);
        renderTask.then(function () {
          Logger.info('Page rendered');
        });
      });
    }, function (error) {
      // PDF loading error
      //console.error(error);
      Logger.error(error);
    });
  }

}

