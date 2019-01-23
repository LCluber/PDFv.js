
var viewer = new PDFv.Viewer();
//console.log(viewer);
viewer.getDocument('./pdf/test.pdf').then(function(value) {
  //console.log(viewer.numPages);
  viewer.display('myCanvas', viewer.numPages);
}

);
