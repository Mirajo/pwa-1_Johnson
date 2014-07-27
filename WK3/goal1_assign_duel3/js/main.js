/*
     Name: Miranda Johnson
     Date: 07- 25 -14
     Class & Section:  PWA1-####
     Comments: "Week 3 Duel game"
 */

(function(){                                                                     //self executing function

       console.log("** Let's Fight**");                                         //Print out Let's fight

       var playerOne = document.querySelector("kabal").querySelector("p");       // dom selection for player one
       var playerTwo = document.querySelector("krotas").querySelector("p");     //dom selection for player two
       var round_txt = document.querySelector("h5");                            //Text between h4, h5 html tag
       var button = document.getElementById("fight_btn");                       //Main button to start fight


       console.log();                                                           //Print to console log

      button.addEventListener("click", fight, false);                            //Event listener for fight button

      var fighters = [                                                          //array for players
          {
              name: "Kabal",                                                   //fighter name
              damage: 50,                                                      // amount of damage done
              health: 100                                                      // health value
          },
          {
              name: "Krotas",                                                  //fighter name
              damage: 50,                                                      // amount of damage done
              health: 100                                                      // health value
          }];

       var round = 1;

       round_txt.innerHTML = "Click Button to Start !";                         //Click button to start
       playerOne.innerHTML = fighters[0].name + ":" + fighters[0].health;       //
       playerTwo.innerHTML = fighters[1].name + ":" + fighters[1].health;       //

     function onClick(){
              fight();

         alert(fighters[0].name+":"+fighters[0].health+" *Start Fight* "+fighters[1].name+":"+fighters[1].health);
         for (var i = 0; i < 10; i++)
         {
              var minDamage1 = playerOne[1] * .5;                //min Damage variable for player 1
              var minDamage2 = playerTwo[1] * .5;                //min Damage variable for player 2

              var f1 = Math.floor(Math.random()*(playerOne[0]-minDamage1)+minDamage1);
              var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);

             playerOne[0]-=f1;
             playerTwo[1]-=f2;

             console.log(playerOne[0] + ":" + playerOne[0] + " "+ playerTwo[1] + ":"+ playerTwo[1]); //Print out players

             var result = winnerCheck();                          //variable to check for a winner

             if (result === "no winner")                          //If/else that will check for a winner
             {
                 round++;                                          //Display the round and health for each fighter
                 alert(playerOne[0] + ":" + playerOne[0] + " Round " + round + " OVER" + " " + playerTwo[1] + ":" + playerTwo[1]);

             }else{
                 alert(result);                                    //Print out results
                 break;
             };
         };
     };


     function winnerCheck(){                                        //check for a winner
            var result = "no winner";                               //No winner variable
     if (playerOne[0]<1 && playerTwo[1]<1)
     {
         result = "You Both Lose";                                 //Results for both players losing the games
     }else if(playerOne[0]<1){
          result = playerTwo[1]+" WINS !"                          //If player two wins
     }else if (playerTwo[1]<1){
          result = playerOne[0]+" WINS !"                          //If player one wins

         };

         return result;
     };

fight();                                                         //Call function start game

})();