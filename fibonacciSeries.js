// f(n)=f(n-1)+f(n-2) n>1
function fibonacci(number){
    var fibo=[0,1];
    if(number== 0){
        return 0;
    }
    if(number== 1){
        return 1
    }  

    else{
        for(var i=2;i<=number;i++){
            fibo[i]=fibo[i-1]+fibo[i-2];
        } 
        return fibo;
    }

}
var result = fibonacci(10);
console.log(result);
var result1 = fibonacci(1);
console.log(result1);