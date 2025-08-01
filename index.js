let highestScore=Number(localStorage.getItem('hs'))||0;
    let calculation=0;
    document.querySelector('.js-highestScore').innerHTML=`Highest Score:${highestScore}`;
    function pickComputerMove(){
      const computerMove=Math.floor(Math.random()*(11-1)+1);
      return computerMove;
    }

    function playGame(playerMove){
      let computerMove=pickComputerMove();
      if(computerMove==playerMove){
        document.querySelector('.js-score').innerHTML=`You are Out Your Score is:${calculation}`;      
        calculation=0;
      }
      else{
        calculation+=playerMove;
        if(highestScore<calculation){
          highestScore=calculation;
        }
        document.querySelector('.js-score').innerHTML=`Your Score is:${calculation}`;
      }
      
      document.querySelector('.js-pick').innerHTML=`You Picked:${playerMove} - Computer Picked:${computerMove}`;
      document.querySelector('.js-highestScore').innerHTML=`Highest Score:${highestScore}`;
      if(calculation>=100 && calculation<200){
        document.querySelector('.js-congrats').innerHTML=`Congrats You hit a Century`;
      }
      else if(calculation>=200 && calculation<300){
        document.querySelector('.js-congrats').innerHTML=`Congrats You hit a Double Century`;
      }
      else if(calculation>=300 && calculation<400){
        document.querySelector('.js-congrats').innerHTML=`Congrats You hit a Triple  Century`;
      }
      localStorage.setItem('hs',highestScore.toString());
    }