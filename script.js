
// on load display message 
alert("Hello!, myself Vishwajeet Shetgaonker, a young UI/UX and a Front End Developer with the craze to Seek More.");

// download resume 
function downloadResume() {
    console.log("download resume")
    window.open('./Assets/Resume.pdf','Download');
}

// change color random logic 

// generation of randon color 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(){
    var span = document.getElementById("name");
    span.style.color= getRandomColor();
}

//  interval to change color every 1 second 
setInterval(changeColor,1000);


//  read more / less function 

function readMoreLess() {
    var dots = document.getElementById("readLess");
    var moreText = document.getElementById("readMore");
    var btnText = document.getElementById("readMoreLessBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
      readMoreLessBtn.style.background = "#7DC24B"
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
      readMoreLessBtn.style.background = "#8a0600"
      
    }
  }
