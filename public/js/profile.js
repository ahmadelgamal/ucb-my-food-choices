async function profileFormHandler(event) {
    event.preventDefault();

    // each checkbox value is declared indivually
    const eggsAllergy = document.querySelector("#eggs-allergy").value.trim();
    const fishAllergy = document.querySelector("#fish-allergy").value.trim();
    const glutenAllergy = document.querySelector("#gluten-allergy").value.trim();
    const peanutAllergy = document.querySelector("#peanut-allergy").value.trim();
    const shellfishAllergy = document.querySelector("#shellfish-allergy").value.trim();
    const soyAllergy = document.querySelector("#soy-allergy").value.trim();
    const treenutAllergy = document.querySelector("#treenut-allergy").value.trim();
    const wheatAllergy = document.querySelector("#wheat-allergy").value.trim();

    const celiac = document.querySelector("#celiac").value.trim();
    const sugerFree = document.querySelector("#sugar-free").value.trim();
    const gout = document.querySelector("#gout").value.trim();
    const hypertension = document.querySelector("#hypertension").value.trim();
    const lactoseIntolerant = document.querySelector("#lactose-intolerant").value.trim();
    
    const buddhist = document.querySelector("#buddhist").value.trim();
    const hindu = document.querySelector("#hindu").value.trim();
    const jewish = document.querySelector("#jewish").value.trim();
    const muslim = document.querySelector("#muslim").value.trim();
    
    const alcoholFree = document.querySelector("#alcohol-free").value.trim();
    const caffineFree = document.querySelector("#caffine-free").value.trim();

    const atkins = document.querySelector("#atkins").value.trim();
    const keto = document.querySelector("#keto").value.trim();
    const lowCarb = document.querySelector("#low-carb").value.trim();
    const lowFat = document.querySelector("#low-fat").value.trim();
    const paleo = document.querySelector("#paleo").value.trim();

    const pescetarian = document.querySelector("#pescetarian").value.trim();
    const vegan = document.querySelector("#vegan").value.trim();
    const vegitarian = document.querySelector("#vegitarian").value.trim();


    // checkbox values are stored in an array
    const restrictionsArray = { 
        eggsAllergy, fishAllergy, glutenAllergy, peanutAllergy, shellfishAllergy, soyAllergy, treenutAllergy, 
        wheatAllergy, celiac, sugerFree, gout, hypertension, lactoseIntolerant, buddhist, hindu, jewish, muslim, 
        alcoholFree, caffineFree, atkins, keto, lowCarb, lowFat, paleo, pescetarian, vegan, vegitarian
    }

    // for each element (checkbox)...
    restrictionsArray.forEach(checkPostData);

    // check if item has a value & post data
    function checkPostData(item) {
        if (item) {
            const response = await fetch("/api/profile", {
                method: "post",
                body: JSON.stringify({item}),
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
                console.log(item);
            } else {
                alert(response.statusText);
            }
        }
    }
}


// event listener
document.querySelector(".profile-form").addEventListener("submit", profileFormHandler);