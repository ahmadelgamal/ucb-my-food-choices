async function signupFormHandler(event) {
    event.preventDefault();
  
    const first_name = document.querySelector("#first-name-signup").value.trim();
    const last_name = document.querySelector("#last-name-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    if (first_name && last_name && email && password) {
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
        document.location.replace('/login');
        alert("Success! Now Login!")
        console.log("success");
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
    console.log(email, password);
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
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  // document
  //   .querySelector(".signup-form")
  //   .addEventListener("submit", signupFormHandler);
  document
    .querySelector("#login-btn")
    .addEventListener("submit", loginFormHandler);
  