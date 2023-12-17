let inputvatly;
let inputhoahoc;
let inputsinhhoc;
inputvatly = prompt("enter vat ly");
inputhoahoc = prompt("enter hoa hoc");
inputsinhhoc = prompt("enter sinh hoc");
let vatly = parseInt(inputvatly); 
let hoahoc = parseInt(inputhoahoc);
let sinhhoc = parseInt(inputsinhhoc); 
let avg = (vatly + hoahoc + sinhhoc)/3
document.write("The area is: " + avg);