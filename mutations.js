function mutation(arr) {  
  var x = arr[0].toLowerCase();
  var y = arr[1].toLowerCase();

  for(var i = 0; i < y.length; i++){
    var test = x.indexOf(y[i]);
    if (test === -1){
      return false;
    }
  }
  return true;
}

mutation(['hello', 'hey']);  