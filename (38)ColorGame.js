    //code first written in random manner and then cleaned up

    var numberOfSquares=6;
    var colors=[];
    var pickedColor;
    var squares=document.querySelectorAll(".square");
    var colorDisplay=document.getElementById("colorDisplay"); 
    var messageDisplay=document.querySelector("#message");
    var h1=document.querySelector("h1");
    var resetButton=document.querySelector("#reset");
    var modeButtons=document.querySelectorAll(".mode");

    init();

    function init()
    {
        setupModeButtons();
        setupSquares();
        reset();

    }

    function setupModeButtons()
    {
        for(var i=0;i<modeButtons.length;i++)
        {
          modeButtons[i].addEventListener("click",function()
          {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    // figure out how many squares to show
    if(this.textContent==="Easy")
        numberOfSquares=3;
    else
     numberOfSquares=6;
 reset();

});
      }
  }

  function setupSquares()
  {
    for(var i=0;i<squares.length;i++)
    {   // add colors to squares
        squares[i].style.background=colors[i];
    // add click listeners to each color
    squares[i].addEventListener("click",function(){

     var clickedColor=this.style.background;
     // compare color to picked color
     if(clickedColor === pickedColor)
     {
        messageDisplay.textContent="Correct!";
        changeColors(pickedColor);
        h1.style.background=pickedColor;
        resetButton.textContent="Play Again?";
    }
    else 
    {
      this.style.background="#232323";
      messageDisplay.textContent="Try Again!";
  }

});
}
}

resetButton.addEventListener("click",function(){
    reset();
});


function reset()
{
    //generate new colors
    colors=generateRandomColors(numberOfSquares);
    //pick a new color from random array
    pickedColor=pickColor();
    //change color display
    colorDisplay.textContent=pickedColor;
    //change colors of squares
    for(var i=0;i<squares.length;i++)
    {   
        if(colors[i])
        {
            squares[i].style.display="block";  // to display hidden squares
            squares[i].style.background=colors[i];  
        } 
        else
         squares[i].style.display="none";      // to hide last three squares in case of easy
 }
    //backgroung color reset
    h1.style.background="steelblue";
    messageDisplay.textContent="";
    resetButton.textContent="New Color";
}

function changeColors (color) { 
    // loop through all squares and change all colors
    for (var i = 0; i < squares.length; i++) 
    {
        squares[i].style.background=color;
    }
}

function pickColor()
{
    var random=Math.floor(Math.random()* colors.length);    // Math.random() gives any number between [0,1)
    return colors[random];
}

function generateRandomColors(num)
{
     // make an array    
     var arr=[];
     // add random colors to that array
     for(var i=0;i< num;i++)
     {
        arr.push(randomColor());
    }
     // return that array
     return arr;
 }

 function randomColor()
 {
    // pick a "red" from 0-255
    var r=Math.floor(Math.random()*256); 
    // pick a "blue" from 0-255
    var b=Math.floor(Math.random()*256);
    // pick a "green" from 0-255
    var g=Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
}