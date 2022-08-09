
    fetch("http://localhost:8000/articles")
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        console.log('Success:', JSON.stringify(response));

        const data = response;

        console.log(data)


        const pickJacket = document.querySelector("#pickJacket")
        const pickShirt = document.querySelector("#pickShirt")
        const pickPants = document.querySelector("#pickPants")
        const pickShoes = document.querySelector("#pickShoes")
        const clothingOptions = document.querySelector("#clothingOptions")


        pickJacket.addEventListener("click", showJacketChoices)

        function showJacketChoices () {

            function removeAllChildNodes(parent) {
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
            }
            removeAllChildNodes(clothingOptions)

            for (let i=0; i<data.jackets[0].colors.length; i++) {
                var li = document.createElement("li")
                li.appendChild(document.createTextNode(data.jackets[0].colors[i]))     
                clothingOptions.appendChild(li)
            }
        }



        // const white = document.querySelector("#whiteShirt")
        // const lightBlue = document.querySelector("#lightBlueShirt")
        // const grey = document.querySelector("#greyShirt")

        // white.addEventListener("click", showChoices)

        // function showChoices () {
        //     const jacket = document.querySelector("#jacket")
        //     const pants = document.querySelector("#pants")
        //     const shoes = document.querySelector("#shoes")

        //     for (let i=0; i<data.shirts[0].white[0].jackets.length; i++) {
        //         var li = document.createElement("li")
        //         li.appendChild(document.createTextNode(data.shirts[0].white[0].jackets[i]))     
        //         jacket.appendChild(li)
        //     }

        //     for (let i=0; i<data.shirts[0].white[0].pants.length; i++) {
        //         var li = document.createElement("li")
        //         li.appendChild(document.createTextNode(data.shirts[0].white[0].pants[i]))     
        //         pants.appendChild(li)
        //     }

        //     for (let i=0; i<data.shirts[0].white[0].shoes.length; i++) {
        //         var li = document.createElement("li")
        //         li.appendChild(document.createTextNode(data.shirts[0].white[0].shoes[i]))     
        //         shoes.appendChild(li)
        //     }

            // jacket.innerHTML = data.shirts[0].white[0].jackets[0]
            // pants.innerHTML = data.shirts[0].white[0].pants[0]
            // shoes.innerHTML = data.shirts[0].white[0].shoes[0]

        // }


    });

// Three of each type of clothes, when press shirt, show an list of different shirts. Click one and that assigns your box as that color.
// When you press pants, that shows what options are available

//***********************************************************************************************************************