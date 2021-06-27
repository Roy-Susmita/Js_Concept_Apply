// recurssive formula
// n!=n*(n-1)!
// n!=1 either n=0 or n=1
// 5!=5*4*3*2*1
function factorial(number){
    if (number == 0 || number == 1){
        return 1;
    }
    else{
        return number * factorial( number-1);  
        
        // A recursive  function is a function that calls itself during its execution.
    }
}
var result = factorial(5);
console.log(result);