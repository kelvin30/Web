var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var month = today.getMonth();
  var monthlist =
["January","February","March","April","May","June","July","August","September","October","November","December"];
  var year = today.getFullYear();

  document.getElementById("date").innerHTML =  daylist[day] + ", " +
monthlist[month] + " " + today.getDate() + ", " + year;


function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
}
  function commingFunction() {
    document.getElementById("commingDrop").classList.toggle("show");
  }

  function submitFunction() {
    alert("Thank you for your subscribing!");
  }