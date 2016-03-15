var http = require('http');
var settings = require('./_settings');
var weather = require('weather-js');

var server = http.createServer();

server.on('request', function(request, response){

  console.log("New request");
  weather.find({search: settings.city, degreeType: 'C'}, function(err, result) {
    if (err){
      console.log(err);
      response.writeHead(500);
      response.write("Internal server error");
      response.end();
    }
    else {
      response.writeHead(200);
      response.write(settings.city + " " + result[0].current.temperature);
      response.end();
    }
  });

});

server.listen(8080, function(){
  console.log('Listening on port 8080');
});
