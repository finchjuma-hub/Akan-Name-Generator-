 document.getElementById("nameForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const result = document.getElementById("result");

    if (!birthdate || !gender) {
        result.innerHTML = "Please enter a valid birthdate and select a gender.";
        return;
    }

    const dateParts = birthdate.split("/");
    if (dateParts.length !== 3) {
        result.innerHTML = "Please use the format DD/MM/YYYY.";
        return;
    }

    let DD = parseInt(dateParts[0]);
    let MM = parseInt(dateParts[1]);
    let YYYY = parseInt(dateParts[2]);

    if (
        isNaN(DD) ||
        isNaN(MM) ||
        isNaN(YYYY) ||
        MM < 1 ||
        MM > 12 ||
        DD < 1 ||
        DD > 31
    ) {
        result.innerHTML = "Please enter a valid date.";
        return;
    }

    if (MM < 3) {
        MM += 12;
        YYYY -= 1;
    }

    const CC = Math.floor(YYYY / 100);
    const YY = YYYY % 100;

    let d = Math.floor(
        (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD)
    ) % 7;

    if (d < 0) {
        d += 7;
    }

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    let akanName;

    if (gender === "male") {
        akanName = maleNames[d];
    } else if (gender === "female") {
        akanName = femaleNames[d];
    }

    result.innerHTML = `<p>You were born on <strong>${days[d]}</strong>, your Akan name is <strong>${akanName}</strong>.</p>`;
    result.classList.add("show");
});

