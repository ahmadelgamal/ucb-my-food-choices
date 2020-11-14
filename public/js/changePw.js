const loggedIn = document.querySelector("#current-password").dataset.loggedin;
async function changePwFormHandler(event) {
  event.preventDefault();

  const currpw = document.querySelector("#current-password").value.trim();
  const newpw = document.querySelector("#new-password").value.trim();

  //const userId = document.createElement();

  //select guest or host login 

  const id = document.querySelector("#current-password").name;
  
  console.log(loggedIn);
  if (loggedIn === "guestLoggedIn") {
    if (currpw && newpw) {
      const response = await fetch(`/api/users/${id}`, {
        method: "put",
        body: JSON.stringify({ password: newpw }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        M.toast({ html: 'Password changed successfully' });
        document.location.replace('/');
      } else {
        M.toast({ html: 'Error!' });
      }
    }

  }

  if (loggedIn === "hostLoggedIn") {
    console.log("Entered here");
    if (currpw && newpw) {
      const response = await fetch(`/api/admin/${id}`, {
        method: "put",
        body: JSON.stringify({ password: newpw }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        M.toast({ html: 'Password changed successfully' });
        document.location.replace('/');
      } else {
        M.toast({ html: 'Error!' });
      }
    }
  }

}

document
  .querySelector(".change-pw-form")
  .addEventListener("submit", changePwFormHandler);
