function reverseString(str) {
  var x = [];
  var y = [];
  var reve = [];
  x = str.split('');
  reve = x.reverse();
  y = reve.join('');
  return y;
}

reverseString("hello");
