async function logoutFormHandler() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#navLinkId').addEventListener("click", logoutFormHandler);
document.querySelector('#burgerNavLinkId').addEventListener("click", logoutFormHandler);