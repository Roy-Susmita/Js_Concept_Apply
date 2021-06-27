function isLeap(year){
    if(year % 4 == 0 && (year % 100 !=0 || year % 400 == 0)){
         console.log("leap year");
        
    }
    else{
         console.log("not leap year");
       
}
}
isLeap(2020);
isLeap(2021);
isLeap(2000);
isLeap(2500);
isLeap(2400);
isLeap(1800);
isLeap(1900);
isLeap(2300);
