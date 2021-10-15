document.addEventListener("keydown",jump);

function jump(){
  if(document.getElementById("character").classList!=".jumpcharacter"){
  document.getElementById("character").classList.add("jumpcharacter");
  }

setTimeout(function(){document.getElementById("character").classList.remove("jumpcharacter"); }, 1000);
}

var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;
function countTimer() {
           ++totalSeconds;
           var hour = Math.floor(totalSeconds /3600);
           var minute = Math.floor((totalSeconds - hour*3600)/60);
           var seconds = totalSeconds - (hour*3600 + minute*60);
           if(hour < 10)
             hour = "0"+hour;
           if(minute < 10)
             minute = "0"+minute;
           if(seconds < 10)
             seconds = "0"+seconds;
           document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
        }

        var checkDead = setInterval(function(){
          var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
          var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
          if(blockLeft<20 && blockLeft>0 && characterTop>= 250){
            block.style.animation = "none";
            block.style.display = "none";
            document.querySelector("h1").innerHTML = "Game Over!!";
            setTimeout(function(){
                document.querySelector("h1").innerHTML = "Just For Funn!!";
            },3000);
            clearInterval(timerVar);
          }
        },10);
