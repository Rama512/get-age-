"use strict"
// created html tags that are needed for input
const submit = document.getElementById('submit')

const inputField = document.getElementsByClassName('form-control')

// create a function to act when submit button is clicked (i.e on click function)


submit.onclick = async () =>{
    console.log('button clicked')

    const name = inputField[0].value;

// make a request i.e a method for our project
   
   let res =  await fetch(`https://api.agify.io?name=${name}`,
   
   { method:'GET' ,redirect : 'follow' })
                .then(response=>response.json())
                .then(result =>{
                    return result;
                })
                .catch(error=>console.log('error',error));
                

              console.log(res.age)
//store the response in a varaible

let cardTitle = document.getElementsByClassName('card-title')[0]

//update the stored response with inner html


cardTitle.innerHTML =name.toUpperCase();

document.getElementsByClassName('form-age')[0].innerHTML = `the age of ${name} is ${res.age}`
       

       

       }

