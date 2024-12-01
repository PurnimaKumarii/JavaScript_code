//write function thaat checks even or odd and returns "Even or odd" accordingly
function evenOdd(num){
    if(num%2==0){return "Even"}
    else return "odd";

}
console.log(evenOdd(43));

//wite a function that checks given number is leap year or not
let isLeapYear=(year)=>{
    if((year%4 === 0 && year%100 !==0) || year%400 ===0){
        return "Leap Year";
    }
    else return "Not Leap year"

}
console.log(isLeapYear(2003))