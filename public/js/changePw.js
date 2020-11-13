async function changePwFormHandler(event) {
  event.preventDefault();

  const currpw = document.querySelector("#current-password").value.trim();
  const newpw = document.querySelector("#new-password").value.trim();
  
  //const userId = document.createElement();

  //select guest or host login 
    
    const id = document.querySelector("#current-password").name;
    if (currpw && newpw) {
      const response = await fetch(`/api/users/${id}`, {
        method: "put",
        body: JSON.stringify({ password: newpw }),
        headers: { "Content-Type": "application/json" },
    });
  
  if (response.ok) {
    console.log(response.body);
  } else {
      alert(response.statusText);
  }
 }
}

document
  .querySelector(".change-pw-form")
  .addEventListener("submit", changePwFormHandler);
