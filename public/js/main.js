const buttonChoices = document.querySelector("#generatorBox")
const pickJacket = document.querySelector("#pickJacket")
const pickShirt = document.querySelector("#pickShirt")
const pickPants = document.querySelector("#pickPants")
const pickShoes = document.querySelector("#pickShoes")
const clearButton = document.querySelector("#clearButton")
const saveButton = document.querySelector("#saveButton")
const clothingOptions = document.querySelector("#clothingOptions")
const outfitTypeMessage = document.querySelector("#outfitTypeMessage")
const guestSaveButton = document.querySelector("#guestSaveButton")

const jacketInput = document.querySelector("#jacketInput")
const shirtInput = document.querySelector("#shirtInput")
const pantsInput = document.querySelector("#pantsInput")
const shoesInput = document.querySelector("#shoesInput")
const outfitTypeInput = document.querySelector("#outfitTypeInput")

pickShirt.addEventListener("click", showChoices)
pickPants.addEventListener("click", showChoices)
pickShoes.addEventListener("click", showChoices)
pickJacket.addEventListener("click", showChoices)

saveButton.addEventListener("click", saveOutfit)
clearButton.addEventListener("click", clearOptions)
guestSaveButton.addEventListener("click", guestSaveOutfit)


// Called when the user presses one of the four article boxes, will show available colors
function showChoices () {
    // Removes previously displayed articles  
    function clearAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    clearAllChildNodes(clothingOptions)

    let thisImage = this;
    let thisArticleType = this.dataset.articleType;
    let thisArticleColor = this.dataset.articleColor;

    // Loops through all existing colors in clothing dictionary and displays them on the page
    for (let i=0; i<data[thisArticleType][0].colors.length; i++) {
        var image = document.createElement("img")
        image.src = `/images/${thisArticleType}/${data[thisArticleType][0].colors[i]}.png`
        clothingOptions.appendChild(image)
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
    // Changes the currently stored article icon to the chosen color
    function selectArticle() {
        for (let i=1; i<=7; i+=2) {
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
                // Clears displayed options
                function clearAllChildNodes(parent) {
                    while (parent.firstChild) {
                        parent.removeChild(parent.firstChild);
                    }
                }
                clearAllChildNodes(clothingOptions)
                break;
            }
        }
    }
}

// Base article icons are greyed out to show they haven't been given a color
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

function saveOutfit () {
    // Users must have at least a shirt, pair of pants and shoes chosen in order to save an outfit
    
    if (pickShirt.dataset.articleColor != "baseShirt" &&
    pickPants.dataset.articleColor != "basePants" && 
    pickShoes.dataset.articleColor != "baseShoes" ) {
        jacketInput.value = pickJacket.dataset.articleColor;
        shirtInput.value = pickShirt.dataset.articleColor;
        pantsInput.value = pickPants.dataset.articleColor;
        shoesInput.value = pickShoes.dataset.articleColor;
        outfitTypeInput.value = outfitTypeMessage.innerHTML;
        saveButton.type = "submit"
    } else {
        alert("Error: You must choose an option for Shirt, Pants and Shoes in order to save your outfit")
    }
}

// Users that didn't sign in can use the generator but cannot save their outfit unless they create an account
function guestSaveOutfit () {
    // Users must have at least a shirt, pair of pants and shoes chosen in order to save an outfit
    if (pickShirt.dataset.articleColor != "baseShirt" &&
    pickPants.dataset.articleColor != "basePants" && 
    pickShoes.dataset.articleColor != "baseShoes" ) {
        jacketInput.value = pickJacket.dataset.articleColor;
        shirtInput.value = pickShirt.dataset.articleColor;
        pantsInput.value = pickPants.dataset.articleColor;
        shoesInput.value = pickShoes.dataset.articleColor;
        outfitTypeInput.value = outfitTypeMessage.innerHTML;

        var ask = window.confirm("Nice outfit! Sign up now to save this to your account.");
        if (ask) {    
            window.location.href = "/signup";
        }
    } else {
        alert("Error: You must choose an option for Shirt, Pants and Shoes in order to save your outfit")
    }

}

// Clear button will reset all options 
function clearOptions () {

    pickJacket.dataset.articleColor = "baseJacket"
    pickShirt.dataset.articleColor = "baseShirt"
    pickPants.dataset.articleColor = "basePants"
    pickShoes.dataset.articleColor = "baseShoes"

    pickJacket.src = "/images/jackets/baseJacket.png"
    pickShirt.src = "/images/shirts/baseShirt.png"
    pickPants.src = "/images/pants/basePants.png"
    pickShoes.src = "/images/shoes/baseShoes.png"

    pickJacket.style.opacity = "0.7"
    pickShirt.style.opacity = "0.7"
    pickPants.style.opacity = "0.7"
    pickShoes.style.opacity = "0.7"

    outfitTypeMessage.innerHTML = "";


    function clearAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    clearAllChildNodes(clothingOptions)
}

clothingOptions.addEventListener("click", checkOutfitType)

// Decides whether an outfit is appropriate for business professional or business casual environments; displays text at top of icons
function checkOutfitType () {
    if (pickJacket.dataset.articleColor != pickPants.dataset.articleColor && pickJacket.dataset.articleColor != "baseJacket" && pickPants.dataset.articleColor != "basePants"){
        outfitTypeMessage.innerHTML = "Business Casual"
    } else if (pickJacket.dataset.articleColor == "brown" ||
                pickJacket.dataset.articleColor == "burgundy" ||
                pickJacket.dataset.articleColor == "khaki" || 
                pickShirt.dataset.articleColor == "grey" ||
                pickShirt.dataset.articleColor == "pink" ||
                pickPants.dataset.articleColor == "khaki" ||
                pickPants.dataset.articleColor == "brown" ||
    pickPants.dataset.articleColor == "burgundy") {
        outfitTypeMessage.innerHTML = "Business Casual"
    } else if (pickJacket.dataset.articleColor != "baseJacket" && 
                pickShirt.dataset.articleColor != "baseShirt" &&
                pickPants.dataset.articleColor != "basePants" && 
                pickShoes.dataset.articleColor != "baseShoes") {
        outfitTypeMessage.innerHTML = "Business Professional";
    } else {
        outfitTypeMessage.innerHTML = "";
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