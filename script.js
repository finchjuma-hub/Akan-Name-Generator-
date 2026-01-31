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
