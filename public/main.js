
    fetch("http://localhost:7000/articles")
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        console.log('Success:', JSON.stringify(response));

        const data = response;

        console.log(data)

        const whiteShirt = document.querySelector("#whiteShirt")
        whiteShirt.addEventListener("click", showChoices)

        function showChoices () {
            const jacket = document.querySelector("#jacket")
            const pants = document.querySelector("#pants")
            const shoes = document.querySelector("#shoes")

            jacket.innerHTML = data.shirts[0].white[0].jackets[0]
            pants.innerHTML = data.shirts[0].white[0].pants[0]
            shoes.innerHTML = data.shirts[0].white[0].shoes[0]

        }
    });

// Three of each type of clothes, when press shirt, show an list of different shirts. Click one and that assigns your box as that color.
// When you press pants, that shows what options are available

//***********************************************************************************************************************