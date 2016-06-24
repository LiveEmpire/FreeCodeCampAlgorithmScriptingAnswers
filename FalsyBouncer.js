function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function remove(value){
    return Boolean(value) !== false;
  }
  var filteredArr = arr.filter(remove);
  return filteredArr;
}

bouncer([7, "ate", "", false, 9]);
