
var viewer = new PDFv.Viewer();
//console.log(viewer);
viewer.getDocument('./pdf/test.pdf').then(function() {
  //console.log(viewer.numPages);
  viewer.display('myCanvas', viewer.numPages);
});
