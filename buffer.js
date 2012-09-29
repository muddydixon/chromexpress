var decodeFromBuffer = function(buf){
  return String.fromCharCode.apply(null, new Uint8Array(buf));
};
var encodeToBuffer = function(str){
  var buffer = new ArrayBuffer(str.length*2);
  var view = new Uint8Array(buffer);
  for(var i = 0, l = str.length; i < l; i++) {
    view[i] = str.charAt(i).charCodeAt();
  }
  return buffer;
};
