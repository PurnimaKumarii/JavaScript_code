//write a function to add two numbers and retuen result
function add(a,b){
   // let a,b;
    return a+b;
}
let sum=add(32,43);
console.log(sum);
//create a function to calculate the area of rectangle given its width and height

let calRectangle=(width,height)=>{
 return width*height;
}
let area=calRectangle(2,65);
console.log("Area of rectangle is: "+area);

//String Manipulation
//write a function that takesa string and returns the reversed version of it
let str="Advanture";
function reverseString(str){
   return str.split("").reverse().join("");
}

console.log(reverseString(str));
