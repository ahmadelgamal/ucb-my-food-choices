// For side navbar. As per materialize docs
document.addEventListener('DOMContentLoaded', function () {
  // init side navbar, as per materialize docs
  const sideNavEls = document.querySelectorAll('.sidenav');
  const sideNavInstances = M.Sidenav.init(sideNavEls, {});

  // init dropdown buttons, as per materialize docs
  const dropDownEls = document.querySelectorAll('.dropdown-trigger');
  const dropDownInstances = M.Dropdown.init(dropDownEls, {});
});

M.AutoInit();