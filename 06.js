
//Factorial of a given number
function fact(num){
    if(num === 0 || num ===1){
        return 1;
    }
    else{
    let fact=1
    for(let i=1; i<=num; i++){
        fact*=i;
    }
   return fact;
    
}
}
console.log(fact(12))

//recursive function 
function factorial(num){
    if(num === 1){ return 1;}
    else{
     return num*(factorial(num-1))
    }
}
console.log(factorial(7));


//implement a recursive function to find nth fibnocii numbers

function fibonacii(n){
    if(n<=1){ return n;}
    else{
        return fibonacii(n-1)+fibonacii(n-2)
    }
}
console.log(fibonacii(4));

