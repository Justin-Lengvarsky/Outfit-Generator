
    // json-server --watch db.json --port 8000
    
    function run(){

        var URL = "file:///C:\002.jpg";
     
        window.open(URL, null);
     
     }
     run();
    
    fetch("http://localhost:8000/articles")
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        console.log('Success:', JSON.stringify(response));

        const data = response;

        const buttonChoices = document.querySelector("#imagesContainer")

        const pickJacket = document.querySelector("#pickJacket")
        pickJacket.addEventListener("click", showChoices)




        const pickShirt = document.querySelector("#pickShirt")
        const pickPants = document.querySelector("#pickPants")
        const pickShoes = document.querySelector("#pickShoes")
        const clearOptionsButton = document.querySelector("#clearOptionsButton")
        const clothingOptions = document.querySelector("#clothingOptions")

        pickShirt.addEventListener("click", showChoices)
        pickPants.addEventListener("click", showChoices)
        pickShoes.addEventListener("click", showChoices)
        // clearOptionsButton.addEventListener("click", clearOptions)


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
            // console.log(thisArticleType)

            // console.log(data[thisArticleType][0].colors)

            for (let i=0; i<data[thisArticleType][0].colors.length; i++) {
                var image = document.createElement("img")
                image.src = `/Users/justinlengvarsky/Desktop/outfit-generator/images/${thisArticleType}/${data[thisArticleType][0].colors[i]}.png`
                clothingOptions.appendChild(image)
                image.dataset.articleColor = data[thisArticleType][0].colors[i]

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

            }

        //     function selectArticle() {
        //         for (let i=1; i<=7; i+=2) {
        //             if (articleValue === buttonChoices.childNodes[i].name) {
        //                 buttonChoices.childNodes[i].innerText = this.innerText
        //                 function clearAllChildNodes(parent) {
        //                     while (parent.firstChild) {
        //                         parent.removeChild(parent.firstChild);
        //                     }
        //                 }
        //                 clearAllChildNodes(clothingOptions)
        //                 break;
        //             }
        //         }
        //     }
        // }


            function selectArticle() {

                console.log(thisArticleType)
                console.log(this.dataset.articleColor)
                console.log(buttonChoices.childNodes[1].dataset.articleType)
                console.log(thisImage)
                console.log(this.src)


                for (let i=1; i<=7; i+=2) {
                    if (thisArticleType === buttonChoices.childNodes[i].dataset.articleType) {
                        buttonChoices.childNodes[i].dataset.articleColor = this.dataset.articleColor
                        thisImage.src = this.src
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


            // OG COPY

            // for (let i=0; i<data[articleValue][0].colors.length; i++) {
            //     var li = document.createElement("li")
            //     li.appendChild(document.createTextNode(data[articleValue][0].colors[i]))
            //     clothingOptions.appendChild(li)

            //     if (pickJacket.innerText != "Jacket" && !data[pickJacket.name][0][pickJacket.innerText][0][articleValue].includes(data[articleValue][0].colors[i])) {
            //         li.style.color = "red"
            //     } else if (pickShirt.innerText != "Shirt" && !data[pickShirt.name][0][pickShirt.innerText][0][articleValue].includes(data[articleValue][0].colors[i])) {
            //         li.style.color = "red"
            //     }
            //     else if (pickPants.innerText != "Pants" && !data[pickPants.name][0][pickPants.innerText][0][articleValue].includes(data[articleValue][0].colors[i])) {
            //         li.style.color = "red"
            //     }
            //     else if (pickShoes.innerText != "Shoes" && !data[pickShoes.name][0][pickShoes.innerText][0][articleValue].includes(data[articleValue][0].colors[i])) {
            //         li.style.color = "red"
            //     }
            //     else {
            //         li.style.color = "green"
            //         li.addEventListener("click", selectArticle)
            //     }

            // }

        //     function selectArticle() {
        //         for (let i=1; i<=7; i+=2) {
        //             if (articleValue === buttonChoices.childNodes[i].name) {
        //                 buttonChoices.childNodes[i].innerText = this.innerText
        //                 function clearAllChildNodes(parent) {
        //                     while (parent.firstChild) {
        //                         parent.removeChild(parent.firstChild);
        //                     }
        //                 }
        //                 clearAllChildNodes(clothingOptions)
        //                 break;
        //             }
        //         }
        //     }
        // }

    //     function clearOptions () {

    //         pickJacket.innerText = "Jacket"
    //         pickShirt.innerText = "Shirt"
    //         pickPants.innerText = "Pants"
    //         pickShoes.innerText = "Shoes"

 
    //         function clearAllChildNodes(parent) {
    //             while (parent.firstChild) {
    //                 parent.removeChild(parent.firstChild);
    //             }
    //         }
    //         clearAllChildNodes(clothingOptions)
    //     }


    });

// Three of each type of clothes, when press shirt, show an list of different shirts. Click one and that assigns your box as that color.
// When you press pants, that shows what options are available

//***********************************************************************************************************************