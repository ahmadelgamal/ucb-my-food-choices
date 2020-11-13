window.onload= async function profilePageHandler(event) {
  event.preventDefault();

  const removeArray = [];
  const restrict = document.forms[0];
  for (var i = 0; i < restrict.length; i++) {
    removeArray.push(restrict[i].value);
  }
  console.log(removeArray);

//   // for each element (not checkbox)...
  removeArray.forEach(uncheckPostData);

  // check if item is associated to profile table
  async function uncheckPostData(item) {
    console.log(item)
    // const response = await fetch(`api/profiles/restriction/`+ item,
    //   {
    //     method: "get",
    //     headers: { "Content-Type": "application/json" }
    //   }
    // );
    // // if item is not associated post to profile table
    // if (response.ok) {
    // } else {
    const response = await fetch(`/api/profiles/delete` + item, {
      method: "delete",
      body: JSON.stringify({ restriction_id: item }),
      headers: { "Content-Type": "application/json" },
    });
  }
}

async function profileFormHandler(event) {
  event.preventDefault();
  M.toast({ html: "Profile Updated Successfully!" });

  const restrictionsArray = [];
  const restrict = document.forms[0];

  for (var i = 0; i < restrict.length; i++) {
    if (restrict[i].checked) {
      restrictionsArray.push(restrict[i].value);
    }
  }

  // for each element (checkbox)...
  restrictionsArray.forEach(checkPostData);

  // check if item is associated to profile table
  async function checkPostData(item) {
    const response = await fetch(`api/profiles/restriction/` + item, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    });
    // if item is not associated post to profile table
    if (response.ok) {
    } else {
      const response = await fetch("/api/profiles", {
        method: "post",
        body: JSON.stringify({ restriction_id: item }),
        headers: { "Content-Type": "application/json" },
      });
    }
  }
}



// event listener
//document.querySelector(".body").addEventListener("onload", profilePageHandler);

document
  .querySelector(".profile-form")
  .addEventListener("submit", profileFormHandler);
