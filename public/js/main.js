const buttonChoices = document.querySelector("#generatorBox")
const pickJacket = document.querySelector("#pickJacket")
const pickShirt = document.querySelector("#pickShirt")
const pickPants = document.querySelector("#pickPants")
const pickShoes = document.querySelector("#pickShoes")
const clearButton = document.querySelector("#clearButton")
const saveButton = document.querySelector("#saveButton")
const clothingOptions = document.querySelector("#clothingOptions")

const jacketInput = document.querySelector("#jacketInput")
const shirtInput = document.querySelector("#shirtInput")
const pantsInput = document.querySelector("#pantsInput")
const shoesInput = document.querySelector("#shoesInput")

pickShirt.addEventListener("click", showChoices)
pickPants.addEventListener("click", showChoices)
pickShoes.addEventListener("click", showChoices)
pickJacket.addEventListener("click", showChoices)

saveButton.addEventListener("click", saveOutfit)
clearButton.addEventListener("click", clearOptions)

function showChoices () {

    function clearAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    clearAllChildNodes(clothingOptions)

    let thisImage = this
    let thisArticleType = this.dataset.articleType
    let thisArticleColor = this.dataset.articleColor

    for (let i=0; i<data[thisArticleType][0].colors.length; i++) {
        var image = document.createElement("img")
        image.src = `/images/${thisArticleType}/${data[thisArticleType][0].colors[i]}.png`
        clothingOptions.appendChild(image)
        image.dataset.articleColor = data[thisArticleType][0].colors[i]
        image.classList.add("articleListBoxClass");

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
        else {
            image.addEventListener("click", selectArticle)
        }
        if (image.style.opacity != "0.1") {
            image.style.order = 0
        } 
        if (image.dataset.articleColor === thisArticleColor) {
            image.style.border = "7px solid #51A3A3"
            // image.style.backgroundColor = "#DAA49A"
        }
    }

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

    if (pickShirt.dataset.articleColor != "baseShirt" &&
    pickPants.dataset.articleColor != "basePants" && 
    pickShoes.dataset.articleColor != "baseShoes" ) {
        jacketInput.value = pickJacket.dataset.articleColor;
        shirtInput.value = pickShirt.dataset.articleColor;
        pantsInput.value = pickPants.dataset.articleColor;
        shoesInput.value = pickShoes.dataset.articleColor;
        saveButton.type = "submit"
    } else {
        alert("Error: You must choose an option for Shirt, Pants and Shoes in order to save your outfit")
    }
    
}

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

    function clearAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    clearAllChildNodes(clothingOptions)
}


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