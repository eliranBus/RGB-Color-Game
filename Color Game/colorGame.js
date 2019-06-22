
    var numberOfSquares = 9;
var colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var veryHardButton = document.querySelector("#veryHard");


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
            changeColors(clickedColor);
            upperPage.style.backgroundColor = pickedColor;
            messageDisplay.textContent = "Correct !";
            messageDisplay.style.color = "green";
            resetButton.textContent = "Play Again?";
		} else {
            this.style.backgroundColor = "transparent";
            messageDisplay.textContent = "Try Again";
            messageDisplay.style.color = "red";
		}
	});
}

resetButton.addEventListener("click", function() {
 //generate all new colors
    colors = generateRandomColors(numberOfSquares);
 //pick a new random color from array
    pickedColor = pickColor();
 //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor; 
 //change colors of squares
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    upperPage.style.backgroundColor = "#65CCF5";
    document.getElementById("reset").style.fontFamily="Poiret One, cursive";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
});

/* When the user clicks on the difficulty dropdown button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the difficulty dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

veryHardButton.addEventListener("click", function(){
   veryHardButton.classList.add("selected");  
   hardButton.classList.remove("selected");  
   easyButton.classList.remove("selected");  
   numberOfSquares = 9
   colors = generateRandomColors(numberOfSquares);     
   pickedColor = pickColor();
   messageDisplay.textContent = "";
   resetButton.textContent = "New Colors";
   colorDisplay.textContent = pickedColor;
   upperPage.style.backgroundColor = "#65CCF5";
   for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
});

hardButton.addEventListener("click", function(){
   veryHardButton.classList.remove("selected");  
   hardButton.classList.add("selected");  
   easyButton.classList.remove("selected");  
   numberOfSquares = 6
   colors = generateRandomColors(numberOfSquares);     
   pickedColor = pickColor();
   messageDisplay.textContent = "";
   resetButton.textContent = "New Colors";
   colorDisplay.textContent = pickedColor;
   upperPage.style.backgroundColor = "#65CCF5";
   for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
        }
});

easyButton.addEventListener("click", function(){
   veryHardButton.classList.remove("selected");
   hardButton.classList.remove("selected");  
   easyButton.classList.add("selected"); 
   numberOfSquares = 3
   colors = generateRandomColors(numberOfSquares);   
   pickedColor = pickColor();
   messageDisplay.textContent = "";
   resetButton.textContent = "New Colors";
   colorDisplay.textContent = pickedColor;
   upperPage.style.backgroundColor = "#65CCF5";
   for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
        }
});


function changeColors(color){
//loop through all squares
for(i = 0; i < squares.length; i++){
//change each color to match correct color picked
    squares[i].style.backgroundColor = color;
    }
} 

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
    //get random color and push into array
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
    