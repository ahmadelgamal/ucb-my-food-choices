// for side navbar, as per materialize docs
document.addEventListener('DOMContentLoaded', function () {
  const elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems, {});
});

// for dropdown buttons, as per materialize docs
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, {});
});

M.AutoInit();