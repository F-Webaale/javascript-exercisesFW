/*const sumAll = function(...num) {
    
     let sum = num.reduce(myFunction);
        function myFunction(total, value, index, array) {
            for (i=value; i<=value; i++) {
                return total + value;
            }
        }

};*/


function sumAll(a,b) {
    let sum = 0;
    for(let i=a; i<=b; i++) {
        sum=sum+i;
        }
        return sum;
}

sumAll(1,5)


// Do not edit below this line
module.exports = sumAll;
