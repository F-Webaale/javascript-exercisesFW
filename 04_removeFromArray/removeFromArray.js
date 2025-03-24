function removeFromArray(arr, ...num) {
  const newArray = [];
  arr.forEach(myFunction) 
      function myFunction(value, index, array) {
          if (!num.includes(value)){
          newArray.push(value);
      }}
  return newArray;
  }

// Do not edit below this line
module.exports = removeFromArray;
