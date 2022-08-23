
// json-server --watch db.json --port 8000

fetch("http://localhost:8000/articles")
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => {
    console.log('Success:', JSON.stringify(response));

    const data = response;

    const buttonChoices = document.querySelector("#generatorBox")
    const pickJacket = document.querySelector("#pickJacket")
    const pickShirt = document.querySelector("#pickShirt")
    const pickPants = document.querySelector("#pickPants")
    const pickShoes = document.querySelector("#pickShoes")
    const clearButton = document.querySelector("#clearButton")
    const clothingOptions = document.querySelector("#clothingOptions")

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
        // console.log(this)
        // console.log(thisArticleType)

        // console.log(data[thisArticleType][0].colors)

        for (let i=0; i<data[thisArticleType][0].colors.length; i++) {
            var image = document.createElement("img")
            image.src = `/Users/justinlengvarsky/Desktop/outfit-generator/images/${thisArticleType}/${data[thisArticleType][0].colors[i]}.png`
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

        }

        function selectArticle() {

            for (let i=1; i<=7; i+=2) {
                if (thisArticleType === buttonChoices.childNodes[i].dataset.articleType) {
                    buttonChoices.childNodes[i].dataset.articleColor = this.dataset.articleColor
                    thisImage.src = this.src
                    thisImage.style.opacity = "1"
                    thisImage.style.backgroundColor = "white"
                    // thisImage.style.borderColor = "#6946DE"

                    
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

        pickJacket.src = "/Users/justinlengvarsky/Desktop/outfit-generator/images/jackets/baseJacket.png"
        pickShirt.src = "/Users/justinlengvarsky/Desktop/outfit-generator/images/shirts/baseShirt.png"
        pickPants.src = "/Users/justinlengvarsky/Desktop/outfit-generator/images/pants/basePants.png"
        pickShoes.src = "/Users/justinlengvarsky/Desktop/outfit-generator/images/Shoes/baseShoe.png"

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
});