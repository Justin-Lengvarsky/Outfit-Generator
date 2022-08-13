
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
        const clothingOptions = document.querySelector("#clothingOptions")

        pickJacket.addEventListener("click", showJacketChoices)
        pickShirt.addEventListener("click", showJacketChoices)
        pickPants.addEventListener("click", showJacketChoices)
        pickShoes.addEventListener("click", showJacketChoices)

        function showJacketChoices () {
 
            function removeAllChildNodes(parent) {
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
              }
            removeAllChildNodes(clothingOptions)

            let articleValue = this.name
            console.log(this)

            for (let i=0; i<data[articleValue][0].colors.length; i++) {
                var li = document.createElement("li")
                li.appendChild(document.createTextNode(data[articleValue][0].colors[i]))
                clothingOptions.appendChild(li)
                li.addEventListener("click", selectArticle)
            }

            function selectArticle() {
                for (let i=1; i<=7; i+=2) {
                    if (articleValue === buttonChoices.childNodes[i].name) {
                        buttonChoices.childNodes[i].innerText = this.innerText
                        break;
                    }
                }
            }
        }


    });

// Three of each type of clothes, when press shirt, show an list of different shirts. Click one and that assigns your box as that color.
// When you press pants, that shows what options are available

//***********************************************************************************************************************