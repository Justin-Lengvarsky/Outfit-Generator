
    // json-server --watch db.json --port 8000
    
    
    fetch("http://localhost:8000/articles")
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        console.log('Success:', JSON.stringify(response));

        const data = response;

        const buttonChoices = document.querySelector("#buttonChoices")

        const pickJacket = document.querySelector("#pickJacket")
        const pickShirt = document.querySelector("#pickShirt")
        const pickPants = document.querySelector("#pickPants")
        const pickShoes = document.querySelector("#pickShoes")
        const clearOptionsButton = document.querySelector("#clearOptionsButton")
        const clothingOptions = document.querySelector("#clothingOptions")

        pickJacket.addEventListener("click", showChoices)
        pickShirt.addEventListener("click", showChoices)
        pickPants.addEventListener("click", showChoices)
        pickShoes.addEventListener("click", showChoices)
        clearOptionsButton.addEventListener("click", clearOptions)


        function showChoices () {

            function clearAllChildNodes(parent) {
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
              }
            removeAllChildNodes(clothingOptions)
            }
            clearAllChildNodes(clothingOptions)

            let articleValue = this.name
            console.log(this)
            console.log(articleValue)

            for (let i=0; i<data[articleValue][0].colors.length; i++) {
                var li = document.createElement("li")
                li.appendChild(document.createTextNode(data[articleValue][0].colors[i]))
                clothingOptions.appendChild(li)

                if (pickJacket.innerText != "Jacket" && !data[pickJacket.name][0][pickJacket.innerText][0][articleValue].includes(data[articleValue][0].colors[i])) {
                    li.style.color = "red"
                }
                else if (pickJacket.innerText != "Jacket" && !data[pickJacket.name][0][pickJacket.innerText][0][articleValue].includes(data[articleValue][0].colors[i])) {
                    li.style.color = "red"
                } else if (pickShirt.innerText != "Shirt" && !data[pickShirt.name][0][pickShirt.innerText][0][articleValue].includes(data[articleValue][0].colors[i])) {
                    li.style.color = "red"
                }
                else if (pickPants.innerText != "Pants" && !data[pickPants.name][0][pickPants.innerText][0][articleValue].includes(data[articleValue][0].colors[i])) {
                    li.style.color = "red"
                }
                else if (pickShoes.innerText != "Shoes" && !data[pickShoes.name][0][pickShoes.innerText][0][articleValue].includes(data[articleValue][0].colors[i])) {
                    li.style.color = "red"
                }
                else {
                    li.style.color = "green"
                    li.addEventListener("click", selectArticle)
                }

            }

            function selectArticle() {
                for (let i=1; i<=7; i+=2) {
                    if (articleValue === buttonChoices.childNodes[i].name) {
                        buttonChoices.childNodes[i].innerText = this.innerText
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
        

        function clearOptions () {

            pickJacket.innerText = "Jacket"
            pickShirt.innerText = "Shirt"
            pickPants.innerText = "Pants"
            pickShoes.innerText = "Shoes"

 
            function clearAllChildNodes(parent) {
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
            }
            clearAllChildNodes(clothingOptions)
        }


    });

// Three of each type of clothes, when press shirt, show an list of different shirts. Click one and that assigns your box as that color.
// When you press pants, that shows what options are available

//***********************************************************************************************************************