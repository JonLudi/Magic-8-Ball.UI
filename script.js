document.getElementById("askButton").addEventListener("click", function(){
let answer;
let randomIndex = Math.floor(Math.random()*5);
if(randomIndex === 0){
    answer = "It is certain";
} else if (randomIndex === 1){
    answer = "Ask Again Later";
} else if (randomIndex === 2){
  answer = "2";
} else if (randomIndex === 3){
  answer ="3";
} else if (randomIndex === 4){
  answer = "4";
} else if (randomIndex === 5){
  answer = "5"
}
});