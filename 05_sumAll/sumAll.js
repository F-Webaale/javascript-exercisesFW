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
    if ((a<0 || b<0) ||(!Number.isInteger(a)||!Number.isInteger(b))||(!Number === a || !Number === b)) {
        return "ERROR";
    }

    if (a<=b) {
        for(let i=a; i<=b; i++) {
        sum=sum+i;
        }
    }

    else {
        for(let i=a; i>=b; i--) {
            sum=sum+i;
            }
    } 
    
    return sum;
}


// Do not edit below this line
module.exports = sumAll;
