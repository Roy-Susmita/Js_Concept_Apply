// n!=n*(n-1)*(n-2)*(n-3)...*1
// 5!=5*4*3*2*1
function doFactorial(number){
	if(number == 0 || number ==1){
		return 1;
	}
	else{
		var fact = 1;
		for(var i=number;i>=1;i--){
			fact = fact * i;
			// console.log(i,fact);
		}
		return fact;
	}
}
var result=doFactorial(4);
console.log(result);
var result1=doFactorial(0);
console.log(result1);
var result2=doFactorial(1);
console.log(result2);

