const buttonChoices = document.querySelector("#space")
const noFavorites = document.querySelector("#noFavorites")
const editButton = document.querySelectorAll('.edit')
const deleteBtn = document.querySelectorAll('.del')
const editedOutfitTypeMessage = document.querySelector('#editedOutfitTypeMessage')
const clothingArticle = document.querySelectorAll('.favoritesBoxClass')
const favoritesTips = document.querySelector('#favoritesTips')

const optionSelect = document.querySelector('#optionSelect')
const recentFavorites = document.querySelector('#recentFavorites')
const oldFavorites = document.querySelector('#oldFavorites')

optionSelect.addEventListener('change', sortFavorites)

function sortFavorites(event) {
    if (event.target.value=="recentlyAdded") {
        $(oldFavorites).animate({ opacity: 0 }, 500, function() {
            oldFavorites.style.display="none"
            recentFavorites.style.display="flex"
            recentFavorites.style.opacity= 0
            $(recentFavorites).animate({ opacity: 1 }, 500);
          });
    } else {
        $(recentFavorites).animate({ opacity: 0 }, 500, function() {
            recentFavorites.style.display="none"
            oldFavorites.style.display="flex"
            oldFavorites.style.opacity= 0
            $(oldFavorites).animate({ opacity: 1 }, 500);
          });
    }   
    console.log(event.target.value)
}


Array.from(editButton).forEach((el)=>{
    el.addEventListener('click', editFavorite)
})

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteFavorite)
})

Array.from(clothingArticle).forEach((el)=>{
    el.addEventListener('click', editFavorite)
})

if (articleNums == 0) {
    noFavorites.style.display = "block"
    favoritesTips.style.display = "none"
    optionSelect.style.display = "none"
}

// If user selects an outfit or it's edit button, page will hide all other outfits and expand on the selected outfit
function editFavorite(){
    const thisOutfit = this.parentNode;
    const thisId = this.parentNode.dataset.id;
    const thisOutfitType = this.parentNode.dataset.outfit;
    const space = document.getElementById("space");
    space.dataset.id = thisId;
    space.style.display = "flex";
    editedOutfitTypeMessage.innerHTML = thisOutfitType
    editedOutfitTypeMessage.style.display = "block";
    favoritesTips.style.display = "none"
    optionSelect.style.display = "none"

    const editOptionInputs = document.getElementById("editOptionInputs")
    editOptionInputs.style.display = "flex"

    const editClothingOptions = document.querySelector("#editClothingOptions")
    editClothingOptions.style.display = "flex"

    for (let i=1; i<=4; i++) {
        space.appendChild(thisOutfit.childNodes[i])
    }

    document.querySelector("#recentFavorites").style.display = "none";
    document.querySelector("#oldFavorites").style.display = "none";


    Array.from(clothingArticle).forEach((el)=>{
        el.removeEventListener("click", editFavorite, false);
        el.classList.add('generatorBoxClass');
        el.classList.remove('favoritesBoxClass');
        el.style.opacity = "1"
    })

    const pickJacket = space.childNodes[1]
    const pickShirt = space.childNodes[2]
    const pickPants = space.childNodes[3]
    const pickShoes = space.childNodes[4]

    pickJacket.addEventListener("click", showChoices)
    pickShirt.addEventListener("click", showChoices)
    pickPants.addEventListener("click", showChoices)
    pickShoes.addEventListener("click", showChoices)

    // Called when the user presses one of the four article boxes, will show available colors
    function showChoices () {
        // Removes previously displayed articles  
        function clearAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
        clearAllChildNodes(editClothingOptions)

        let thisImage = this
        let thisArticleType = this.dataset.articleType
        let thisArticleColor = this.dataset.articleColor

        // Loops through all existing colors in clothing dictionary and displays them on the page
        for (let i=0; i<data[thisArticleType][0].colors.length; i++) {
            var image = document.createElement("img")
            image.src = `/images/${thisArticleType}/${data[thisArticleType][0].colors[i]}.png`
            editClothingOptions.appendChild(image)
            image.dataset.articleColor = data[thisArticleType][0].colors[i]
            image.classList.add("articleListBoxClass");

            /* All colors for different colors conains data on what colors of other articles will match; if the user has already selected a color for a different clothing article, 
            this will allow a color to be chosen and will grey out clothing color if it does not match with what is alrady selected */
            if (pickJacket.dataset.articleColor != "baseJacket" && !data[pickJacket.dataset.articleType][0][pickJacket.dataset.articleColor][0][thisArticleType].includes(data[thisArticleType][0].colors[i])) {
                image.style.opacity = "0.1"
            }
            else if (pickShirt.dataset.articleColor != "baseShirt" && !data[pickShirt.dataset.articleType][0][pickShirt.dataset.articleColor][0][thisArticleType].includes(data[thisArticleType][0].colors[i])) {
                image.style.opacity = "0.1"
            }
            else if (pickPants.dataset.articleColor != "basePants" && !data[pickPants.dataset.articleType][0][pickPants.dataset.articleColor][0][thisArticleType].includes(data[thisArticleType][0].colors[i])) {
                image.style.opacity = "0.1"
            }
            else if (pickShoes.dataset.articleColor != "baseShoes" && !data[pickShoes.dataset.articleType][0][pickShoes.dataset.articleColor][0][thisArticleType].includes(data[thisArticleType][0].colors[i])) {
                image.style.opacity = "0.1"
            }
            /* Below conditionals will blur out specific combinations that don't 
            match but could not be filtered out through the dicitonary */
            else if (
                thisArticleType == "shirts" &&
                pickJacket.dataset.articleColor == "grey" &&
                pickPants.dataset.articleColor == "navy" &&
                data[thisArticleType][0].colors[i] == "pink" ||
    
                thisArticleType == "jackets" &&
                pickShirt.dataset.articleColor == "pink" &&
                pickPants.dataset.articleColor == "navy" &&
                data[thisArticleType][0].colors[i] == "navy" ||
    
                thisArticleType == "pants" &&
                pickJacket.dataset.articleColor == "grey" &&
                pickShirt.dataset.articleColor == "pink" &&
                data[thisArticleType][0].colors[i] == "navy" 
            ) {
                image.style.opacity = "0.1"
            }
            else if (
                thisArticleType == "shirts" &&
                pickJacket.dataset.articleColor == "navy" &&
                pickPants.dataset.articleColor == "grey" &&
                data[thisArticleType][0].colors[i] == "pink" ||
    
                thisArticleType == "jackets" &&
                pickShirt.dataset.articleColor == "pink" &&
                pickPants.dataset.articleColor == "grey" &&
                data[thisArticleType][0].colors[i] == "navy" ||
    
                thisArticleType == "pants" &&
                pickJacket.dataset.articleColor == "navy" &&
                pickShirt.dataset.articleColor == "pink" &&
                data[thisArticleType][0].colors[i] == "grey" 
            ) {
                image.style.opacity = "0.1"
            }
            else if (
                thisArticleType == "shoes" &&
                pickJacket.dataset.articleColor == "grey" &&
                pickPants.dataset.articleColor == "navy" &&
                data[thisArticleType][0].colors[i] == "burgundy" ||
    
                thisArticleType == "jackets" &&
                pickShoes.dataset.articleColor == "burgundy" &&
                pickPants.dataset.articleColor == "navy" &&
                data[thisArticleType][0].colors[i] == "grey" ||
    
                thisArticleType == "pants" &&
                pickJacket.dataset.articleColor == "grey" &&
                pickShoes.dataset.articleColor == "burgundy" &&
                data[thisArticleType][0].colors[i] == "navy" 
            ) {
                image.style.opacity = "0.1"
            }
            else if (
                thisArticleType == "shoes" &&
                pickJacket.dataset.articleColor == "navy" &&
                pickPants.dataset.articleColor == "grey" &&
                data[thisArticleType][0].colors[i] == "burgundy" ||
    
                thisArticleType == "jackets" &&
                pickShoes.dataset.articleColor == "burgundy" &&
                pickPants.dataset.articleColor == "grey" &&
                data[thisArticleType][0].colors[i] == "navy" ||
    
                thisArticleType == "pants" &&
                pickJacket.dataset.articleColor == "navy" &&
                pickShoes.dataset.articleColor == "burgundy" &&
                data[thisArticleType][0].colors[i] == "grey" 
            ) {
                image.style.opacity = "0.1"
            }
            else {
                image.addEventListener("click", selectArticle)
            }
            if (image.style.opacity != "0.1") {
                image.style.order = 0
            } 
            if (image.dataset.articleColor === thisArticleColor) {
                image.style.border = "7px solid #51A3A3"
            }

        }

        editClothingOptions.addEventListener("click", checkOutfitType)

        // Decides whether an outfit is appropriate for business professional or business casual environments; displays text at top of icons
        function checkOutfitType () {
            if (pickJacket.dataset.articleColor != pickPants.dataset.articleColor && pickJacket.dataset.articleColor != "baseJacket" && pickPants.dataset.articleColor != "basePants"){
                editedOutfitTypeMessage.innerHTML = "Business Casual"
            } else if (pickJacket.dataset.articleColor == "brown" ||
                        pickJacket.dataset.articleColor == "burgundy" ||
                        pickJacket.dataset.articleColor == "khaki" || 
                        pickShirt.dataset.articleColor == "grey" ||
                        pickShirt.dataset.articleColor == "pink" ||
                        pickPants.dataset.articleColor == "khaki" ||
                        pickPants.dataset.articleColor == "brown" ||
            pickPants.dataset.articleColor == "burgundy") {
                editedOutfitTypeMessage.innerHTML = "Business Casual"
            } else if (pickJacket.dataset.articleColor != "baseJacket" && 
                        pickShirt.dataset.articleColor != "baseShirt" &&
                        pickPants.dataset.articleColor != "basePants" && 
                        pickShoes.dataset.articleColor != "baseShoes") {
                editedOutfitTypeMessage.innerHTML = "Business Professional";
            } else {
                editedOutfitTypeMessage.innerHTML = "";
            }
        }

        // Changes the currently stored article icon to the chosen color
        function selectArticle() {
            for (let i=1; i<=4; i++) {
                if (thisArticleType === buttonChoices.childNodes[i].dataset.articleType) {
                    if (this.dataset.articleColor === buttonChoices.childNodes[i].dataset.articleColor) {
                        buttonChoices.childNodes[i].dataset.articleColor = buttonChoices.childNodes[i].dataset.defaultValue
                        thisImage.src = `/images/${thisArticleType}/${buttonChoices.childNodes[i].dataset.articleColor}.png`
                        thisImage.style.opacity = "0.7"
                        thisImage.style.backgroundColor = "rgb(223, 208, 249)"
                    } else {  
                        buttonChoices.childNodes[i].dataset.articleColor = this.dataset.articleColor
                        thisImage.src = this.src
                        thisImage.style.opacity = "1"
                        thisImage.style.backgroundColor = "white"
                    }
                    
                function clearAllChildNodes(parent) {
                    while (parent.firstChild) {
                        parent.removeChild(parent.firstChild);
                    }
                }
                clearAllChildNodes(editClothingOptions)
                break;
                }
            }
        }
    }

    // Brings user back to seeing all saved outfits
    const returnButton = document.querySelector("#returnButton");
    returnButton.addEventListener("click", () => {
        location.reload()
    });

    const saveButton = document.querySelector("#saveButton")
    const deleteButton = document.querySelector("#deleteButton")
    const jacketInput = document.querySelector("#jacketInput")
    const shirtInput = document.querySelector("#shirtInput")
    const pantsInput = document.querySelector("#pantsInput")
    const shoesInput = document.querySelector("#shoesInput")

    saveButton.addEventListener("click", saveOutfit)
    deleteButton.addEventListener("click", deleteThisFavorite)

    function saveOutfit(){
        const outfitId = buttonChoices.dataset.id
        // Users must have at least a shirt, pair of pants and shoes chosen in order to save an outfit
        if (pickShirt.dataset.articleColor != "baseShirt" &&
        pickPants.dataset.articleColor != "basePants" && 
        pickShoes.dataset.articleColor != "baseShoes" ) {
            jacketInput.value = pickJacket.dataset.articleColor;
            shirtInput.value = pickShirt.dataset.articleColor;
            pantsInput.value = pickPants.dataset.articleColor;
            shoesInput.value = pickShoes.dataset.articleColor;
            saveButton.type = "submit";

            // Submits put request to edit outfit in database
            async function submitSavedOutfit(){
            try{
                const response = await fetch('favorites/editFavorite', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'outfitIdFromJSFile': outfitId,                
                        'jacketChoice': pickJacket.dataset.articleColor,
                        'shirtChoice': pickShirt.dataset.articleColor,
                        'pantsChoice': pickPants.dataset.articleColor,
                        'shoesChoice': pickShoes.dataset.articleColor,
                        'outfitTypeChoice': editedOutfitTypeMessage.innerHTML
                    })
                })
                const data = await response.json()
                console.log(data)
                location.reload()
            }catch(err){
                console.log(err)
            }
        }
        submitSavedOutfit()
        } else {
            alert("Error: You must choose an option for Shirt, Pants and Shoes in order to save your outfit")
        }
    }      
}

// Delete outfit in edit mode
async function deleteFavorite(){
    const outfitId = this.parentNode.dataset.id
    console.log(outfitId)
    try{
        const response = await fetch('favorites/deleteFavorite', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'outfitIdFromJSFile': outfitId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// Delete outfit in view mode
async function deleteThisFavorite(){
    try{
        const response = await fetch('favorites/deleteFavorite', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'outfitIdFromJSFile': space.dataset.id
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// Animation for mobile navbar
$(document).ready(function() {
    // JQUERY NAV TOGGLE
    $('#menu').bind('click',function(event){
        $('#mainnav ul').slideToggle();
    });

    $(window).resize(function(){  
        var w = $(window).width();  
        if(w > 768) {  
            $('#mainnav ul').removeAttr('style');  
        }  
    });
});