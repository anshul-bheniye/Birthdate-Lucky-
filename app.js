let dateOfBirth = document.querySelector('.card .dob');
let luckyNumber = document.querySelector('.card .luckyNumber');
let displayMessage = document.querySelector('.container .answer');



// button onclick
let button = document.querySelector('.card .btn');

button.addEventListener('click', (e) => {

// preventing default behaviour of button
    e.preventDefault();

// selecting and adding full date
     let x = dateOfBirth.value;
     let y = new Date(x);
     let date = y.getDate();
     let month = y.getMonth();
     let year = y.getFullYear();

     let sumOfDMY = date + month + year;

// selecting lucky Number
     let fetchLN = luckyNumber.value;

// display message
 if(sumOfDMY % fetchLN === 0){
     displayMessage.innerText= "Birthdate is lucky 🎊🎊";
    } 
    else if(fetchLN === "" || sumOfDMY === undefined){
        displayMessage.innerText='Fill up both fields';
    }
 else{
    displayMessage.innerText="Your birthdate is not that lucky 😞 " ;
    }

   
});