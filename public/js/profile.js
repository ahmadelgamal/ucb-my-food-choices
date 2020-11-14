const delAcc = document.querySelector("#deleteAcc");
const elems = document.querySelectorAll('.modal');
const instances = M.Modal.init(elems);
const closeModal = document.querySelector('#close');
const deleteAccount = document.querySelector('#delete');
async function profilePageHandler(event) {
  event.preventDefault();

  const removeArray = [];
  const restrict = document.forms[0];
  for (var i = 0; i < restrict.length-1; i++) {
    removeArray.push(restrict[i].value);
  }

//   // for each element (not checkbox)...
  removeArray.forEach(uncheckPostData);

  // check if item is associated to profile table
  async function uncheckPostData(item) {
    const response = await fetch(`/api/profiles/delete/` + item, {
      method: "delete",
      body: JSON.stringify({ restriction_id: item }),
      headers: { "Content-Type": "application/json" },
    });
  }
};

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

function openModalHandler(event) {
  event.preventDefault();
  instances[0].open();
}

function closeModalHandler(event) {
  event.preventDefault();
  instances[0].close();
}

async function deleteAccountHandler(event) {
  event.preventDefault();
  const id = delAcc.dataset.account;

  response = await fetch(`/api/users/${id}`, {
    method: "delete",
    headers: { "Content-Type": "application/json" },
  });
}

document
  .querySelector(".profile-form")
  .addEventListener("submit", profilePageHandler);

document
  .querySelector(".profile-form")
  .addEventListener("submit", profileFormHandler);

delAcc.addEventListener('click', openModalHandler);
closeModal.addEventListener('click', closeModalHandler);
deleteAccount.addEventListener('click', deleteAccountHandler);
