async function profileFormHandler(event) {
  event.preventDefault();
  M.toast({ html: 'Profile Updated Successfully!' });

  const restrictionsArray = [];
  const restrict = document.forms[0];

  for (var i = 0; i < restrict.length; i++) {
    if (restrict[i].checked) {
      restrictionsArray.push(restrict[i].value);
    }
  }
  // for each element (checkbox)...
  restrictionsArray.forEach(checkPostData);
  // check if item has a value & post data
  async function checkPostData(item) {
<<<<<<< HEAD
    const response = await fetch(`api/profiles/restriction/` + item, {
      method: "get",
=======
    const response = await fetch(`api/profiles/restriction/` + item,
      {
        method: "get",
>>>>>>> 021b753c829b22d54ca9988f4017cbf50511ea13

      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log(item);
<<<<<<< HEAD
    } else {
      const response = await fetch("/api/profiles", {
        method: "post",
        body: JSON.stringify({ restriction_id: item }),
        headers: { "Content-Type": "application/json" },
      });
=======

      // } else {
      //   const response = await fetch("/api/profiles", {
      //     method: "post",
      //     body: JSON.stringify({ restriction_id: item }),
      //     headers: { "Content-Type": "application/json" },
      //   });


    } else {
      console.log(response.statusText);
>>>>>>> 021b753c829b22d54ca9988f4017cbf50511ea13
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
