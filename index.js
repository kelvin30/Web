//Get date

var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var month = today.getMonth();
  var monthlist =
["January","February","March","April","May","June","July","August","September","October","November","December"];
  var year = today.getFullYear();

  document.getElementById("date").innerHTML =  daylist[day] + ", " +
monthlist[month] + " " + today.getDate() + ", " + year;

// Show dropdown
function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
}
// Show dropdown
  function commingFunction() {
    document.getElementById("commingDrop").classList.toggle("show");
  }

  //Alert
  function submitFunction() {
    alert("Thank you for your subscribing!");
  }