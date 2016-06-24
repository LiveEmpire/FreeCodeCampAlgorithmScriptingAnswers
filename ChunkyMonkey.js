function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArray = [];
  var newNewArray = [];
  var numArray = [];
  var y = ((arr.length)/size) - 1; // how many elements in first array
  var roundedX = Math.ceil(y); // rounding up number of elements
    for (var x = 0; x <= roundedX; x++){
       newArray = arr.slice(((x*size)), ((x+1) * size)); // determine elements of array
    numArray = newNewArray.push(newArray); // push array into array
    } 
  return newNewArray;
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
