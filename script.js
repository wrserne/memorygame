const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  if (event.target.classList.contains("flipped")){
    // telling to remove flipped label if it exists on card that is clicked
    event.target.classList.remove("flipped")
    event.target.style.backgroundColor= null;

    
    return;
  }
  

  let numberFlipped = 0;

  for (let card of gameContainer.children){


    if (card.classList.contains("flipped")){
      console.log("it is flipped");
      numberFlipped = numberFlipped +1;
    if (numberFlipped>1){
      console.log(numberFlipped, "No more");
      return
    }
    }

  }




  event.target.style.backgroundColor= event.target.classList;
  //ONLY if card is flipped, set it's background color to the class that's been randomly set
  event.target.classList.add("flipped");
  //adding flipped if it isn't already there^


}

// when the DOM loads
createDivsForColors(shuffledColors);

/* */