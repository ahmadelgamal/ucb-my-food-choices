$(document).ready(function () {
  // init sidenav
  $('.sidenav').sidenav();
  // init dropdown
  $('.dropdown-button').dropdown({
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    coverTrigger: false, // Displays dropdown below the button
  }
  );
});

// init materialize components
M.AutoInit();