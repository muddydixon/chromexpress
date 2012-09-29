# ChromePress

version 1

## ChromexPress

This product uses `chrome's packaged apps v2 feature's socket API`

[socket api](https://developer.chrome.com/apps/socket.html)

I referred [こてさきAjax](http://blog.livedoor.jp/kotesaki/archives/1823568.html).

@komasshu++

## Install

```
git clone git://github.com/muddydixon/chromexpress.git
```

and launch chrome canary 24 with experimental option.

Then open `chrome://extensions` with developer mode.

## Usage

Modify app.js as you own.

### API

#### Server

* Constructor
```
new Server()
```

* server[http method]
```
server[http method](/*string*/ path, /*function*/ handler)
```
handler is called with request object and response object

eg
```
var server = new Server();
server.get('/', function(/*Request*/ req, /*Response*/ res){
  res.render('hello');
});
```

* server.listen
```
server.listen(/*optional integer*/ port, /*optional string*/ hostname, /*optional integer*/ backlog, /*optional function*/ callback)
```

if port is undefined, server selects free port. check by `inspect view`.

#### Request

#### Response

* Constructor
```
new Response(/*Request*/ request)
```

* response.render
render string with `Content-Type: text/html`
```
response.render('hogehoge')
```

## License

Copyright 2012- Daichi Morifuji (muddydixon)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.