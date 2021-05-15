function _crash() {
  var array = [];
  while(true) {
    var sub = []
    for (var i = 0; i < 65535; i++) {
      sub.push(String.fromCharCode(i));
    }
    array.push(sub);
  }
}

function _pause() {
  (function (a) {
    return (function (a) {
        return (Function('Function(arguments[0]+"' + a + '")()'))
    })(a)
  })('bugger')('de', 0, 0, (0, 0));
}

function _checkDevTools() {
  var time = +Date.now();
  _pause();
  if (+Date.now() - time > 1) {
    _crash();
  }
  // var element = document.createElement('div');
  // element.id = '_check_dev_tools';
  // Object.defineProperty(element, 'id', {
  //   get: function() {
  //     alert();
  //     //_crash();
  //   }
  // })
  // console.log(element);
}

setInterval(_checkDevTools, 1000);