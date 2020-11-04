async function profileFormHandler(event) {
    event.preventDefault();

    const restrictions = doc.body;
    console.log(doc.body);


}
document
.querySelector(".profile-form")
.addEventListener("submit", profileFormHandler);