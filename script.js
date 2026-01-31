const birthdate = document.getElementById('birthdate');
const gender = document.getElementById('gender');

if (!birthdate || !gender){
    alert("Please enter a validbirthdate and select a gender.");
    return;
}

const dateParts = birthdate.split('/');
if (dateParts.length !== 3) {
    alert("Please use the formatDD/MM/YYYY.");
    return;
}

const day = parseInt(dateParts[0]);
const month = parseInt(dateParts[1]);
const year = parseInt(dateParts[2]);

if (day < 1 || day > 31 || month < 1 || month > 12 || isNaN(year)) {
    alert("Please enter a valid date.");
    return;
}


const dateObj = new Date(`${month}/${day}/${year}`);
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dayName = days[dateObj.getDay()];


const maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
const femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
let akanName = '';
if (gender === 'male') akanName = maleNames[dateObj.getDay()];
else if (gender === 'female') akanName =femaleNames[dateObj.getDay()];


const result = document.getElementById('result');
result.innerHTML =`
  <strong>Your Akan name:</strong> ${akanName}
  <em>You were born on ${dayName}, ${meanings[dateObj.getDay()]}</em>
  <button onclick="shareName('${akanName}')">Share your Akan name</button>`;
result.classList.add('show');


function share Name(name) {
    const text = `My Akan name is ${nsme}! Discover yours at the Akan Name Generator.`;
    if (navigator.share) {
        navigator.share({text});
    } else{
        alert("Copied: " + text);
    }
}



  