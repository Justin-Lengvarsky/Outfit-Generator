console.log(data)

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


saveButton.addEventListener("click", plz)

function plz () {
    jacketInput.value = pickJacket.src;
    shirtInput.value = pickShirt.src;
    pantsInput.value = pickPants.src;
    shoesInput.value = pickShoes.src;
}


pickShirt.addEventListener("click", showChoices)
pickPants.addEventListener("click", showChoices)
pickShoes.addEventListener("click", showChoices)
pickJacket.addEventListener("click", showChoices)
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

    // console.log(this)

    // console.log(data[thisArticleType][0].colors)

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
            image.style.order = -1
            // image.style.backgroundColor = "#DAA49A"
        }

    }

    function selectArticle() {

        console.log(this.dataset.articleColor)
        console.log(buttonChoices.childNodes[1].dataset.articleColor)
        // console.log(thisArticleType)
        // console.log(thisArticleType)


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





// const deleteBtn = document.querySelectorAll('.del')
// const todoItem = document.querySelectorAll('span.not')
// const todoComplete = document.querySelectorAll('span.completed')

// Array.from(deleteBtn).forEach((el)=>{
//     el.addEventListener('click', deleteTodo)
// })

// Array.from(todoItem).forEach((el)=>{
//     el.addEventListener('click', markComplete)
// })

// Array.from(todoComplete).forEach((el)=>{
//     el.addEventListener('click', markIncomplete)
// })

// async function deleteTodo(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/deleteTodo', {
//             method: 'delete',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markComplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markComplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markIncomplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markIncomplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }