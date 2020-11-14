const delAcc = document.querySelector("#deleteAcc");
const elems = document.querySelectorAll('.modal');
const instances = M.Modal.init(elems);
const closeModal = document.querySelector('#close');
const deleteAccount = document.querySelector('#delete');

async function reportFormHandler(event) {
    event.preventDefault();
    const response = await fetch("/profiles/user/:id", {
        method: "get",
        body: JSON.stringify({ restriction_id: item }),
        headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
    } else {
        alert(response.statusText);
    }
}

document.body
    .addEventListener("load", reportFormHandler);


//report filter dropdown
const filterBySelection = function (event) {
    event.preventDefault();

    const allergiesDivEl = document.querySelector('#allergies');
    const medicalDivEl = document.querySelector('#medical');
    const religiousDivEl = document.querySelector('#religious');
    const substanceDivEl = document.querySelector('#substance');
    const weightDivEl = document.querySelector('#weight');
    const otherDivEl = document.querySelector('#other');

    switch (event.target.id) {
        case "filter-allergies":
            allergiesDivEl.style.display = "";
            medicalDivEl.style.display = "none";
            religiousDivEl.style.display = "none";
            substanceDivEl.style.display = "none";
            weightDivEl.style.display = "none";
            otherDivEl.style.display = "none";
            break;
        case "filter-medical":
            allergiesDivEl.style.display = "none";
            medicalDivEl.style.display = "";
            religiousDivEl.style.display = "none";
            substanceDivEl.style.display = "none";
            weightDivEl.style.display = "none";
            otherDivEl.style.display = "none";
            break;
        case "filter-religious":
            allergiesDivEl.style.display = "none";
            medicalDivEl.style.display = "none";
            religiousDivEl.style.display = "";
            substanceDivEl.style.display = "none";
            weightDivEl.style.display = "none";
            otherDivEl.style.display = "none";
            break;
        case "filter-substance":
            allergiesDivEl.style.display = "none";
            medicalDivEl.style.display = "none";
            religiousDivEl.style.display = "none";
            substanceDivEl.style.display = "";
            weightDivEl.style.display = "none";
            otherDivEl.style.display = "none";
            break;
        case "filter-weight":
            allergiesDivEl.style.display = "none";
            medicalDivEl.style.display = "none";
            religiousDivEl.style.display = "none";
            substanceDivEl.style.display = "none";
            weightDivEl.style.display = "";
            otherDivEl.style.display = "none";
            break;
        case "filter-other":
            allergiesDivEl.style.display = "none";
            medicalDivEl.style.display = "none";
            religiousDivEl.style.display = "none";
            substanceDivEl.style.display = "none";
            weightDivEl.style.display = "none";
            otherDivEl.style.display = "";
            break;
        default:
            allergiesDivEl.style.display = "";
            medicalDivEl.style.display = "";
            religiousDivEl.style.display = "";
            substanceDivEl.style.display = "";
            weightDivEl.style.display = "";
            otherDivEl.style.display = "";
            break;
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
    const id = parseInt(delAcc.dataset.account);
    
    const response = await fetch(`/api/admin/${id}`, {
      method: "delete",
    });
    console.log(response.body);
    if (response.ok){
  
      M.toast({ html: "Account Deleted Successfully!" });
      logoutFormHandler();
      
    }
    
  }

const reportFilterDropDownEl = document.querySelector('#report-filter-dropdown');
reportFilterDropDownEl.addEventListener('click', filterBySelection);
delAcc.addEventListener('click', openModalHandler);
closeModal.addEventListener('click', closeModalHandler);
deleteAccount.addEventListener('click', deleteAccountHandler);