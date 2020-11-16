const loggedIn = document.querySelector("#current-password").dataset.loggedin;

async function changePwFormHandler(event) {
  event.preventDefault();

  const currentPassword = document.querySelector("#current-password").value.trim();
  const newPassword = document.querySelector("#new-password").value.trim();
  const confirmNewPassword = document.querySelector("#confirm-new-password").value.trim();
  const userId = document.querySelector("#current-password").name;

  //select guest or host login 

  if (newPassword.length < 8) {
    M.toast({ html: 'Password must be at least 8 characters long' });
  } else if (newPassword !== confirmNewPassword) {
    M.toast({ html: 'Password does not match' });
  }
  if (loggedIn === "guestLoggedIn") {
    const response = await fetch(`/api/users/${id}`, {
      method: "put",
      body: JSON.stringify({ password: newPassword }),
      headers: { "Content-Type": "application/json" },
    });
  } else if (loggedIn === "hostLoggedIn") {
    if (currpw && newpw) {
      const response = await fetch(`/api/admin/${id}`, {
        method: "put",
        body: JSON.stringify({ password: newpw }),
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  if (response.ok) {
    M.toast({ html: 'Password changed successfully' });
    document.location.replace('/');
  } else {
    M.toast({ html: 'Error!' });
  }
}

document
  .querySelector(".change-pw-form")
  .addEventListener("submit", changePwFormHandler);
