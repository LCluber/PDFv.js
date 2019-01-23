
var viewer = new PDFv.Viewer();
console.log(viewer);
viewer.display('./pdf/test.pdf', 'myCanvas', 1).then(function(value) {
  console.log(viewer.numPages);
  // expected output: "Success!"
}

);
