// f(n)=f(n-1)+f(n-2)
function fibonacci(number){
    if(number==0){
        return 0;
    }
    if(number==1){
        return 1;
    }
    else{
        return fibonacci(number-1)+fibonacci(number-2);
    }
}
var result=fibonacci(6);
console.log(result);