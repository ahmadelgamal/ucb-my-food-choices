async function userfavFormHandler(event) {
  event.preventDefault();
  M.toast({ html: 'Favorite foods Updated Successfully!' });

  const userfavArray = [];
  const userfav = document.forms[0];
  
  for (var i = 0; i < userfav.length; i++) {
    if (userfav[i].checked) {
      userfavArray.push(parseInt(userfav[i].value));
    }
  }
  console.log(userfavArray);
  // for each element (checkbox)...
  userfavArray.forEach(checkPostData);

  // check if item has a value & post data
  async function checkPostData(item) {
    const response = await fetch(`api/userfav/` + item,
      {
        method: "get",
        headers: { "Content-Type": "application/json" }
      }
    );
    if (response.ok) {
    } else {
      const response = await fetch("/api/userfav/", {
        method: "post",
        body: JSON.stringify({ favorite_id: item }),
        headers: { "Content-Type": "application/json" },
      });
    }
  }
}

document
  .querySelector(".userfav-form")
  .addEventListener("submit", userfavPageHandler);

// event listener
document
  .querySelector(".userfav-form")
  .addEventListener("submit", userfavFormHandler);