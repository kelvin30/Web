
// var date = new Date();
//    var  weekday = date.
//    var year = date.getFullYear();
//    var month = date.getMonth() + 1;
//    var day = date.getDate();
//    document.getElementById("time").textContent = month + "/" + day + "/" + year;

const date = new Date();

// get the date as a string
const n = date.toDateString();
document.getElementById("date").textContent = n;

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function submitFunction() {
    alert("Thank you for your subscribing!");
  }

  function onMenuClick() {
    var navbar = document.getElementById('navbar__container');
    var responsive_class_name = 'responsive'
    navbar.classList.toggle(responsive_class_name)
}
