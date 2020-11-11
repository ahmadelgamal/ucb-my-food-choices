async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const loginBtn = document.querySelector('#login-btn');
  const selectLoginEl = document.querySelector('.browser-default');
  
  //select guest or host login 
  if (selectLoginEl.value === '1'){
    if (email && password) {
     
      const response = await fetch("/api/users/login", {
        method: "post",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        M.toast({ html: 'Login successful.' });
        document.location.replace("/profile");
      } else {
        M.toast({ html: 'Incorrect email and/or password.' });
      }
    }
  }
  else{
    if (email && password) {
     
      const response = await fetch("/api/admin/admin-login", {
        method: "post",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        M.toast({ html: 'Login successful.' });
        document.location.replace("/reports");
      } else {
        M.toast({ html: 'Incorrect email and/or password.' });
      }
    }
  }
  

}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

