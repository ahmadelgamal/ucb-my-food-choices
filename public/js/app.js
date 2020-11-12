$(document).ready(function () {
  // init sidenav
  $('.sidenav').sidenav();

  // init navbar dropdown
  $('.dropdown-trigger').dropdown({
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    coverTrigger: false // Displays dropdown below the button
  });
  // init dropdown button
  // $('.dropdown-trigger').dropdown();
});

// document.addEventListener('DOMContentLoaded', function () {
//   const elems = document.querySelectorAll('.dropdown-trigger');
//   var instances = M.Dropdown.init(elems, {
//     constrainWidth: false, // Does not change width of dropdown to that of the activator
//     hover: true, // Activate on hover
//     coverTrigger: false // Displays dropdown below the button
//   });
// });


// init materialize components
M.AutoInit();