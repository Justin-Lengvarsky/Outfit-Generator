let jacketDiv = document.querySelector("#jacketDiv")
let shirtDiv = document.querySelector("#shirtDiv")
let pantsDiv = document.querySelector("#pantsDiv")
let shoesDiv = document.querySelector("#shoesDiv")



$(indexText).animate({ opacity: 0 }, 0, function() {
  $(this).animate({ opacity: 1 }, 2000);
});

$(jacketDiv).animate({ opacity: 0 }, 0, function() {
  setTimeout(function() {
    $(jacketDiv).animate({ opacity: 1 }, 1000);
  }, 1500)
});
$(shirtDiv).animate({ opacity: 0 }, 0, function() {
  setTimeout(function() {
    $(shirtDiv).animate({ opacity: 1 }, 1000);
  }, 3000)
});
$(pantsDiv).animate({ opacity: 0 }, 0, function() {
  setTimeout(function() {
    $(pantsDiv).animate({ opacity: 1 }, 1000);
  }, 4500)
});
$(shoesDiv).animate({ opacity: 0 }, 0, function() {
  setTimeout(function() {
    $(shoesDiv).animate({ opacity: 1 }, 1000);
  }, 6000)
});





let jackets = {
  1: "navy",
  2: "charcoal",
  3: "burgundy",
  4: "black"
}

let shirts = {
  1: "lightBlue",
  2: "pink",
  3: "white",
  4: "grey"
}

let pants = {
  1: "khaki",
  2: "charcoal",
  3: "burgundy",
  4: "black"
}

let shoes = {
  1: "brown",
  2: "black",
  3: "black",
  4: "black"
}


let jacketI = 0;
let shirtI = 0;
let pantsI = 0;
let shoesI = 0;



let jackett = document.querySelector("#jackett")


function jacketLoop() {
  setTimeout(function() {
    $(jacketDiv).animate({ opacity: 0 }, 1000, function() {
      jackett.src = `/images/jackets/${jackets[jacketI]}.png`
      $(this).delay(1000).animate({ opacity: 1 }, 1000);
    });
    jackett.style.opacity = "1"
    jacketI++;
    if (jacketI <= 4) {
      jacketLoop();
    } else {
      jacketI = 1;
      jacketLoop();
    }
  }, 8000)
}
jacketLoop();


setTimeout(function() {

  let shirtt = document.querySelector("#shirtt")

  function shirtLoop() {
    setTimeout(function() {
      $(shirtDiv).animate({ opacity: 0 }, 1000, function() {
        shirtt.src = `/images/shirts/${shirts[shirtI]}.png`
        $(this).delay(1000).animate({ opacity: 1 }, 1000);
      });
      shirtI++;
      if (shirtI <= 4) {
        shirtLoop();
      } else {
        shirtI = 1;
        shirtLoop();
      } 
    }, 8000)
  }
  shirtLoop();

}, 2000)

setTimeout(function() {

  function pantsLoop() {
    setTimeout(function() {
      $(pantsDiv).animate({ opacity: 0 }, 1000, function() {
        pantss.src = `/images/pants/${pants[pantsI]}.png`
        $(this).delay(1000).animate({ opacity: 1 }, 1000);
      });
      pantsI++;
      if (pantsI <= 4) {
        pantsLoop();
      } else {
        pantsI = 1;
        pantsLoop();
      }
    }, 8000)
  }
  pantsLoop();

}, 4000)

setTimeout(function() {

  function shoesLoop() {
    setTimeout(function() {
      $(shoesDiv).animate({ opacity: 0 }, 1000, function() {
        shoess.src = `/images/shoes/${shoes[shoesI]}.png`
        $(this).delay(1000).animate({ opacity: 1 }, 1000);
      });
      shoesI++;
      if (shoesI <= 4) {
        shoesLoop();
      } else {
        shoesI = 1;
        shoesLoop();
      }
    }, 8000)
  }

  shoesLoop();

}, 6000)