//create a function using closures that increments and returns the count on each calls
function createCounter(){
    let count =0;
    return function(){
        return ++count;
    }

}
let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

//implement private variable using closures
function createCount(){
    //private variable
    let count =0;
    //inner function(closure)
function increment(){
    count++;
    console.log("count :",count);
}
return{
    incrementCounter : function(){
        increment();
    },
    getCount:function(){
        return count;
    }
}
    
} 
const counter1=createCount();
counter1.incrementCounter(); 
counter1.incrementCounter();   
console.log(counter1.getCount());


