async function logoutFormHandler() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    M.toast({ html: "HTTP ERROR 404" });
  }
}

document.querySelector('#logout').addEventListener("click", logoutFormHandler);
document.querySelector('#burger-logout').addEventListener("click", logoutFormHandler);