async function profileFormHandler(event) {
  event.preventDefault();

  const restrictionsArray = [];
  const restrict = document.forms[0];

  for (var i = 0; i < restrict.length; i++) {
    if (restrict[i].checked) {
      restrictionsArray.push(restrict[i].value);
    }
  }
  console.log(restrictionsArray);
  // for each element (checkbox)...
  restrictionsArray.forEach(checkPostData);
  console.log("second");
  console.log(restrictionsArray);
  // check if item has a value & post data
  async function checkPostData(item) {
    const response = await fetch("/api/profiles", {
      method: "post",
      body: JSON.stringify({ restriction_id: item }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log(item);
    } else {
      alert(response.statusText);
    }
  }
}

// async function deleteProfileFormHandler(event) {
//   event.preventDefault();

//   const notRestrictedArray = [];
//   for (var i = 0; i < restrict.length; i++) {
//     if (restrict[i].unchecked) {
//       notRestrictedArray.push(restrict[i].value);
//       console.log(notRestrictedArray);
//     }
//   }
// }

// event listener
document
  .querySelector(".profile-form")
  .addEventListener("submit", profileFormHandler);
// document
// .querySelector(".profile-form")
// .addEventListener("submit", deleteProfileFormHandler);
