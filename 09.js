//create a function that display the current date and time in specific format
function getCurrentDateAndTime(){
    let currentDate =new Date();
    return currentDate.toLocaleString();
}
console.log(getCurrentDateAndTime());
//Eroor Handling
//implement a try-catch block to handle an error that occurs during API Dara fetching

async function fetchData(){
    try{
        let response =await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        console.log(data);
        
    }
    catch(error){
        console.error("Error Fetching Data:" +error)
    }
}
fetchData();