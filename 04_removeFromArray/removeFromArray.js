function removeFromArray(arr, ...arg) {
  let newArray = [];
  arr.forEach(myFn);
  
  function myFn (value, index, array) {
      if(!arg.includes(value)){
          newArray.push(value);
      }
  }
  return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
