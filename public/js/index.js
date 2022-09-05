let jacketDiv = document.querySelector("#jacketDiv")
let shirtDiv = document.querySelector("#shirtDiv")


let jackets = {
    1: "navy",
    2: "grey",
    3: "black",
    4: "burgundy"
}

let shirts = {
    1: "lightBlue",
    2: "white",
    3: "grey",
    4: "white"
}

let pants = {
    1: "khaki",
    2: "grey",
    3: "black",
    4: "burgundy"
}

let shoes = {
    1: "brown",
    2: "burgundy",
    3: "black",
    4: "black"
}


let jacketI = 1;
let shirtI = 1;
let pantsI = 1;
let shoesI = 1;

setTimeout (function () {

    let jackett = document.querySelector("#jackett")


function jacketLoop () {
        setTimeout(function() {   
            $(jacketDiv).animate({ opacity: 0 }, 0, function () {
                $(this).animate({ opacity: 1 }, 1000);
            });
            jackett.src=`/images/jackets/${jackets[jacketI]}.png`
            jackett.style.opacity = "1"
            jacketI++;                    
            if (jacketI <= 4) {           
                jacketLoop();             
            } else {
                jacketI = 1;
                jacketLoop(); 
            }                   
        }, 2000)
}
jacketLoop();
}, 1000)

setTimeout (function () {

    let shirtt = document.querySelector("#shirtt")

    function shirtLoop () {
            setTimeout(function() {  
                $(shirtDiv).animate({ opacity: 0 }, 0, function () {
                    $(this).animate({ opacity: 1 }, 1000);
                }); 
                shirtt.src=`/images/shirts/${shirts[shirtI]}.png`
                shirtI++;                    
                if (shirtI <= 4) {           
                    shirtLoop();             
                } else {
                    shirtI = 1;
                    shirtLoop(); 
                }                   
            }, 2000)
    }
    shirtLoop();

}, 2000)

// setTimeout (function () {

//     function pantsLoop () {
//         setTimeout(function() {   
//             setTimeout(function() {   
//                 indexImage.childNodes[5].src=`/images/pants/${pants[pantsI]}.png`
//                 pantsI++;                    
//                 if (pantsI <= 4) {           
//                     pantsLoop();             
//                 } else {
//                     pantsI = 1;
//                     pantsLoop(); 
//                 }                   
//             }, 4000)
//         }, 1000)
//     }
//     pantsLoop();

// }, 3000)

// setTimeout (function () {

//     function shoesLoop () {
//         setTimeout(function() {   
//             setTimeout(function() {   
//                 indexImage.childNodes[7].src=`/images/shoes/${shoes[shoesI]}.png`
//                 shoesI++;                    
//                 if (shoesI <= 4) {           
//                     shoesLoop();             
//                 } else {
//                     shoesI = 1;
//                     shoesLoop(); 
//                 }                   
//             }, 4000)
//         }, 1000)
//     }
//     shoesLoop();

// }, 4000)





    // setTimeout(function() {   
    //     setTimeout(function() {   
    //         indexImage.childNodes[3].src=`/images/shirts/${shirts[shirtI]}.png`
    //         shirtI++;                    
    //         if (shirtI <= 4) {           
    //             jacketLoop();             
    //         } else {
    //             shirtI = 1;
    //             jacketLoop(); 
    //         }                   
    //         }, 1000)
    //     }, 1000)
    //     window.setInterval(newQuoteFunc, 5000)