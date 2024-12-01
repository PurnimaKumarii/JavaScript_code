//Higher order function return a new array
let arr=[10,23,55,12,52,24,11]
function filterEvenNumber(){
    return arr.filter(num=>num %2 === 0);
}
console.log(filterEvenNumber(arr));
console.log(arr);

//Use `map()` to double all the elements in an array
function doubleArrayEle(num){
    return arr1.map( num=> num*2)
}
let arr1=[20,33,55,11,56]
console.log(doubleArrayEle(arr1));

//Array Method
//Find the largest element in an array using the `reduce()` method
function largestElement(arr3){
    return arr3.reduce((max,current)=>
    current>max ? current:max)
}
let arr3=[32,65,21,77,57,92]
console.log(largestElement(arr3));


//Remove all occurrences of a specific element from an array
function removeElementFromArr(arr,target){
    return arr4.filter(item => item !== target);
}
let arr4=[10,24,34,24,44,24,66]
let target=24

let removed=removeElementFromArr(arr,target);
console.log(removed);
