const choice=["rock","paper","scissor"];
const computerChoice= choice[Math.floor(Math.random()*choice.length)];
const playerChoice=prompt("Please enter your result");
function checkWinner(){
    if(playerChoice===computerChoice){
        console.log("It's a tie")
    }else if(playerChoice==="rock"&& computerChoice==="paper"){
        console.log("sorry, you lose")
    }else if(playerChoice==="paper" &&  computerChoice==="rock"){
        console.log("Yay! You won!")
    }else if(playerChoice==="scissor" &&  computerChoice==="paper"){
        console.log("You won!")
    }else if(playerChoice==="rock" &&  computerChoice==="scissor"){
        console.log("you are the winner")

    }else if(playerChoice==="paper" &&  computerChoice==="scissor"){
        console.log("sorry, you lose")

    }else if(playerChoice==="scissor" &&  computerChoice==="rock"){
        console.log("you lose");
    }else{
        console.log("Hello, Please enter the right text")
    }
};
checkWinner();




  
   
  
    
   



