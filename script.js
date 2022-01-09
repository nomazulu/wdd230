let dayname = [];
let months = [];

let d = new Date ()
let dayName = dayname[d.getDay()]
let monthName = months[d.getMonth()]
let year = d.getFullYear();
let fulldate = dayName + "," + "," + year;

document.getElementById("currentdate").textContent = fulldate;