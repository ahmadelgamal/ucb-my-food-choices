$(document).ready(function () {
  // init sidenav
  $('.sidenav').sidenav();
  // init navbar dropdown
  $(".dropdown-trigger").dropdown();
  // $('.dropdown-trigger').attr("data-constrainWidth", false);
  // $('.dropdown-trigger').attr("data-coverTrigger", false);
});

// init materialize components
M.AutoInit();