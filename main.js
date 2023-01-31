const options=["rock","paper","scissors"];
function getComputerChoice(){
    const choice=options[Math.floor(Math.random()*options.length)];
    return choice
   
}
function getPlayerChoice(){
    const playerChoise=prompt("enter your text").toLocaleLowerCase();
    return playerChoise;
}
function checkWinner(playerSelection,computerSelection){
if(playerSelection===computerSelection){
return "Tie"
}else if((playerSelection==="rock" && computerSelection==="scissor") || (playerSelection==="paper" && computerSelection==="rock") || (playerSelection==="scissor" && computerSelection==="paper")){
return "player"    
 
}else {
    
    return "computer"
}
}


function playRound(playerSelection,computerSelection){
const result=checkWinner(playerSelection,computerSelection);
if(result=="Tie"){
console.log("its a Tie")
}else if(result==="player"){
console.log(`You won ${playerSelection} beat ${computerSelection}`)
}else{
    console.log(`you lose! ${computerSelection} beats ${playerSelection}`)
};
}
function game(){
    let playerScore= 0;
    let computrScore= 0;
    for(i=0;i<5;i++){
     console.log(playRound(getPlayerChoice(),getComputerChoice()))
     if(checkWinner(getPlayerChoice(),getComputerChoice())=="player"){
        playerScore++
        console.log(playerScore)
     }
     else if(checkWinner(getPlayerChoice(),getComputerChoice())=="computer"){
        computrScore++
       

     }
    }
    
   

    //traking who won
    if(playerScore>computrScore){
        console.log("The player Won")

    }else if(playerScore<computrScore){
        console.log("the computer won")
    }else{
        console.log("its a tie")
    }
}
game();
