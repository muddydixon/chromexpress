var RESP = [
  "<!doctype html>",
  "<html>",
  "<head>",
  "<title>ChromePress</title>",
  "</head>",
  "<body>",
  "<h1>Welcome!! to ChromexPress\'s {%name%}</h1>",
  "<p>this web server is built w/ chrome's packaged apps v2 feature</p>",
  "<ul>{%paths%}</ul>",
  "</body>",
  "</html>"
];
RESP = RESP.join("\r\n");
var paths = ['', 'muddydixon', 'komasshu'];
var links = [];
for(var i = 0, l = paths.length; i < l; i++){
  links.push('<li><a href="/'+paths[i]+'">'+(paths[i] ? paths[i] : 'root')+'</a></li>');
}
RESP = RESP.replace('{%paths%}', links.join('\r\n'));

var server = new Server();
paths.forEach(function(path){
  server.get('/'+path, function(req, res){
    res.render(RESP.replace('{%name%}', path));
  });
});

server.listen(0, function(err){
  console.log('listening http://localhost:'+server.port);
});
