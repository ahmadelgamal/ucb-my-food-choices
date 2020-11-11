async function signupHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector("#first_name").value.trim();
  const last_name = document.querySelector("#last_name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const selectSignUpEl = document.querySelector('.browser-default');

  if (first_name && last_name && email && password) {
    if (selectSignUpEl.value === '1'){
      const response = await fetch("/api/users", {
        method: "post",
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      // check the response status
      if (response.ok) {
        M.toast({ html: 'You have successfully signed up' });
        document.location.replace("/");
      } else {
        M.toast({ html: 'User already exists.' });
      }
    } 
    else{
      const response = await fetch("/api/admin", {
        method: "post",
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      // check the response status
      if (response.ok) {
        M.toast({ html: 'You have successfully signed up' });
        document.location.replace("/");
      } else {
        M.toast({ html: 'User already exists.' });
      }
    } 
}
  else {
     M.toast({ html: 'Please fill all fields.' });
  }
}


document
  .querySelector(".signup-form")
  .addEventListener("submit", signupHandler);
