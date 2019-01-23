import { Logger } from '@lcluber/mouettejs';
// Using pdfjs in a Typescript project is a mess.
// import typings first
import { PDFJSStatic, PDFDocumentProxy, PDFPromise } from 'pdfjs-dist';
// then import the actual library using require() instead of import
let pdfjsLib: PDFJSStatic = require("pdfjs-dist");


export class Viewer {

  public pdf: PDFDocumentProxy;
  public numPages : number;

  constructor() {
    this.numPages = 0;
  }

  public getDocument( documentPath: string ): PDFPromise<void> {
    // return new Promise((resolve: Function, reject: Function) => {
      let _this = this;
      return pdfjsLib.getDocument(documentPath).then(function (pdf: PDFDocumentProxy ) {
        Logger.info('PDF loaded');
        _this.pdf = pdf;
        _this.numPages = pdf.numPages;

      }, function (error) {
        // PDF loading error
        Logger.error(error);
      });
    // });
  }

  public display(canvasId: string, pageNumber: number): boolean {

    if (pageNumber > this.numPages) {
      Logger.error('Trying to render page ' + pageNumber + ' on a document containing ' + this.numPages + ' pages');
      return false;
    }
    this.pdf.getPage(pageNumber).then(function(page:any) {
      Logger.info('Page loaded');
      // you can now use *page* here
      let scale = 1.5;
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
        // resolve();
      });
      return true;
    });
  }

}
