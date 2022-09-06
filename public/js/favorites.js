const buttonChoices = document.querySelector("#space")
const noFavorites = document.querySelector("#noFavorites")
const editButton = document.querySelectorAll('.edit')
const deleteBtn = document.querySelectorAll('.del')
const editedOutfitTypeMessage = document.querySelector('#editedOutfitTypeMessage')


Array.from(editButton).forEach((el)=>{
    el.addEventListener('click', editFavorite)
})

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteFavorite)
})


if (articleNums == 0) {
    noFavorites.style.display = "block"
}


function editFavorite(){

    const thisOutfit = this.parentNode;
    const thisId = this.parentNode.dataset.id;
    const space = document.getElementById("space");
    space.dataset.id = thisId;
    space.style.display = "flex";

    const editOptionInputs = document.getElementById("editOptionInputs")
    editOptionInputs.style.display = "flex"

    const editClothingOptions = document.querySelector("#editClothingOptions")
    editClothingOptions.style.display = "flex"

    console.log(this.parentNode.dataset.outfit)

    for (let i=1; i<=4; i++) {
        space.appendChild(thisOutfit.childNodes[i])
    }

    document.querySelector("#allFavorites").style.display = "none";

    const clothingArticle = document.querySelectorAll('.favoritesBoxClass')

    Array.from(clothingArticle).forEach((el)=>{
        el.classList.add('generatorBoxClass');
        el.classList.remove('favoritesBoxClass');
        el.style.opacity = "1"
    })

    editedOutfitTypeMessage.innerText = this.parentNode.dataset.outfit


    const pickJacket = space.childNodes[1]
    const pickShirt = space.childNodes[2]
    const pickPants = space.childNodes[3]
    const pickShoes = space.childNodes[4]

    pickJacket.addEventListener("click", showChoices)
    pickShirt.addEventListener("click", showChoices)
    pickPants.addEventListener("click", showChoices)
    pickShoes.addEventListener("click", showChoices)


    function showChoices () {

        function clearAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
        clearAllChildNodes(editClothingOptions)

        let thisImage = this
        let thisArticleType = this.dataset.articleType
        let thisArticleColor = this.dataset.articleColor

        for (let i=0; i<data[thisArticleType][0].colors.length; i++) {
            var image = document.createElement("img")
            image.src = `/images/${thisArticleType}/${data[thisArticleType][0].colors[i]}.png`
            editClothingOptions.appendChild(image)
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
            }

        }

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

    saveButton.addEventListener("click", plz)
    deleteButton.addEventListener("click", deleteThisFavorite)


    function plz(){

        const outfitId = buttonChoices.dataset.id

        if (pickShirt.dataset.articleColor != "baseShirt" &&
        pickPants.dataset.articleColor != "basePants" && 
        pickShoes.dataset.articleColor != "baseShoes" ) {
            jacketInput.value = pickJacket.dataset.articleColor;
            shirtInput.value = pickShirt.dataset.articleColor;
            pantsInput.value = pickPants.dataset.articleColor;
            shoesInput.value = pickShoes.dataset.articleColor;
            saveButton.type = "submit";

            async function work(){
            
            try{
                const response = await fetch('favorites/editFavorite', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'outfitIdFromJSFile': outfitId,                
                        'jacketChoice': pickJacket.dataset.articleColor,
                        'shirtChoice': pickShirt.dataset.articleColor,
                        'pantsChoice': pickPants.dataset.articleColor,
                        'shoesChoice': pickShoes.dataset.articleColor
                    })
                })
                const data = await response.json()
                console.log(data)
                location.reload()
            }catch(err){
                console.log(err)
            }
        }
        work()
        } else {
            alert("Error: You must choose an option for Shirt, Pants and Shoes in order to save your outfit")
        }
    }
      
    }

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