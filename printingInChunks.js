var https = require("https");

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.gihub.io',
    path: '/http-examples/step1.html'
  };
  response.on('data', function(data){
    console.log('Chunk Reveived. Length:', data.length "\n");
  })
}