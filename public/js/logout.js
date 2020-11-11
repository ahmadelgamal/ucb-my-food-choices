async function logoutFormHandler() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });
  console.log('function');

  if (response.ok) {
    M.toast({ html: "Logged out successfully" });
    // res.clearCookie('connect.sid').status(200).send('OK');
    document.location.replace('/');
  } else {
    M.toast({ html: "Error logging out" });
  }
}

document.querySelector('#logout').addEventListener("click", logoutFormHandler);
document.querySelector('#burger-logout').addEventListener("click", logoutFormHandler);