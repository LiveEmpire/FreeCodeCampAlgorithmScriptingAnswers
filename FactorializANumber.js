function factorialize(num) {
  var total = 1;
  for (var fact = num; fact > 1; fact--){
    total *= fact;
  }
  return total;
}

factorialize(5);