// rock paper scissor


// name a function for the computer choice 

 function getComputerChoice()
 {

    let choice ;

    // make a randomizer for values for 1 to 3 as an integer 

     let randomNum = Math.floor((Math.random() * 3) + 1); 

    // return string values randomly "rock" "paper" "scissor"

        switch (randomNum) {
            case 1:
                choice = "rock";
            break;
            case 2:
                choice = "paper";
            break;
            default:
             choice = "scissor";
            break;
        }

        // return the string value of the random choice
        return choice;
 }


 // name a function for human choice

 function getHumanChoice()
 {
    let userInput;

    // prompt for the human use input

    do {

    userInput = +prompt("Please Choose Between (Rock, Paper and Scissor). \n \n Type 1 for ROCK \n Type 2 for PAPER \n Type 3 for SCISSOR \n");

     if (userInput === null){

        alert('Bye');
     }

    
     if (userInput === 1)
     {
        return "rock";
     }else if(userInput === 2)
     {
        return "paper";
     }
     else if(userInput === 3){

        return "scissor";
     }
        
    } while (userInput > 3); 
      

 }

 
 function playRound(humanSelection,computerSelection){

    // logic for the rock paper scissor

    if(humanSelection == 'scissor' && computerSelection == 'paper' || computerSelection == 'paper' && humanSelection == 'scissor')
    {
   
        humanScore++;
        console.log(`You: ${humanSelection}  Computer: ${computerSelection}`)
        console.log(`You Win, You: ${humanScore} Computer : ${computerScore}`)

       
    
    }else if(humanSelection == 'scissor' && computerSelection == 'rock' || computerSelection == 'rock' && humanSelection == 'scissor'){

      
        computerScore++;
          console.log(`You: ${humanSelection}  Computer: ${computerSelection}`)
        console.log(`Computer Win, You: ${humanScore} Computer : ${computerScore}`)

    }else if(humanSelection == 'rock' && computerSelection == 'paper' || computerSelection == 'paper' && humanSelection == 'rock')
    {
      
        computerScore++;
          console.log(`You: ${humanSelection}  Computer: ${computerSelection}`)
         console.log(`Computer Win, You: ${humanScore} Computer : ${computerScore}`)

    }else if(humanSelection == 'rock' && computerSelection == 'scissor' || computerSelection=='scissor' && humanSelection == 'rock') {

   
         humanScore++;
          console.log(`You: ${humanSelection}  Computer: ${computerSelection}`)
         console.log(`You Win, You: ${humanScore} Computer : ${computerScore}`)

        

    }else if (humanSelection == 'paper' && computerSelection == 'scissor' || computerSelection == 'scissor' && humanSelection == 'paper'){

        computerScore++;
         console.log(`You: ${humanSelection}  Computer: ${computerSelection}`)
         console.log(`Computer Win, You: ${humanScore} Computer : ${computerScore}`)

        

    }else if (humanSelection == 'paper' && computerSelection == 'rock' || computerSelection == 'rock' && humanSelection == 'paper') {

     
         humanScore++;
           console.log(`You: ${humanSelection}  Computer: ${computerSelection}`)
         console.log(`You Win, You: ${humanScore} Computer : ${computerScore}`)
        
    }else if (humanSelection === computerSelection){

         console.log(`You: ${humanSelection}  Computer: ${computerSelection}`)
        console.log(`Its a Tie, You: ${humanScore} Computer : ${computerScore}`)

       
    }else {

        alert('bye');

    }


 }


 function playGame(raceTo)
 {
    

   for (let i = 1; i < raceTo+1; i++) {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if(humanSelection == null){

        break;
    }

    console.log('Round '+ i);
    playRound(humanSelection, computerSelection);

    if (i == 5)
    {
          console.log('-------------Result--------------');
        if(computerScore > humanScore)
        {

            console.log(`Computer Win at the Score of ${computerScore}`);

        }else if(humanScore > computerScore){

             console.log(`You Win at the Score of ${humanScore}`);

        }else{
            
            console.log(`The two score are tie at the score of ${computerScore} and ${humanScore}`)

        }
        

    }

   }

  

   



 }



 let humanScore = 0;
 let computerScore = 0;



 playGame(5);

  
 