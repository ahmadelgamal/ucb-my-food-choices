async function reportFormHandler(event) {
    event.preventDefault();



}
// document
//     .getElementsByClassName(".report-form")
//     .addEventListener("submit", reportFormHandler);

//report filter dropdown
const filterBySelection = function (event) {
    event.preventDefault();

    const allergiesDivEl = document.querySelector('#allergies');
    const medicalDivEl = document.querySelector('#medical');
    const religiousDivEl = document.querySelector('#religious');
    const substanceDivEl = document.querySelector('#substance');
    const weightDivEl = document.querySelector('#weight');
    const otherDivEl = document.querySelector('#other');

    console.log(event.target.id);
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

const reportFilterDropDownEl = document.querySelector('#report-filter-dropdown');
reportFilterDropDownEl.addEventListener('click', filterBySelection);
