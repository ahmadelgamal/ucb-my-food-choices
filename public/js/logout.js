async function logoutFormHandler() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    M.toast({ html: '404 error. Please click on login' });
  }
}

document.querySelector('#logout').addEventListener("click", logoutFormHandler);
document.querySelector('#burger-logout').addEventListener("click", logoutFormHandler);