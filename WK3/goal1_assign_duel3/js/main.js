/*
     Name: Miranda Johnson
     Date: 07- 25 -14
     Class & Section:  PWA1-####
     Comments: "Week 3 Duel game"
 */

(function(){                                                                     //self executing function

       console.log("** Let's Fight**");                                         //Print out Let's fight

       var fighterOne = document.querySelector("#kabal").querySelector("p");       // dom selection for player one
       var fighterTwo = document.querySelector("#krotas").querySelector("p");     //dom selection for player two
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
       fighterOne.innerHTML = fighters[0].name + ":" + fighters[0].health;       //
       fighterTwo.innerHTML = fighters[1].name + ":" + fighters[1].health;       //

     function onClick(){
              fight();

         alert(fighters[0].name+":"+fighters[0].health+" *Start Fight* "+fighters[1].name+":"+fighters[1].health);
         fighterOne.innerHTML = fighters[0].name + ":" + fighters[0].health;       //
         fighterTwo.innerHTML = fighters[1].name + ":" + fighters[1].health;       //



              /* var minDamage1 = fighters[0] * .5;                //min Damage variable for player 1
              var minDamage2 = fighters[1] * .5;                //min Damage variable for player 2 */

              var f1 = Math.floor(Math.random() * (fighters[0].damage + fighters[0].damage * .5);
              var f2 = Math.floor(Math.random() * (fighters[1].damage + fighters[1].damage * .5);

             fighters[0]-=f1;
             fighters[1]-=f2;

             console.log(fighters[0] + ":" + fighters[0] + " "+ fighters[1] + ":"+ fighters[1]); //Print out players

             var result = winnerCheck();                          //variable to check for a winner

             if (result === "no winner")                          //If/else that will check for a winner
             {
                 round++;                                          //Display the round and health for each fighter
                 alert(fighters[0] + ":" + fighters[0] + " Round " + round + " OVER" + " " + fighters[1] + ":" + fighters[1]);

             }else {
                 alert(result);                                    //Print out results
                 break;

                 button.removeEventListerner("click", fight, false); //remove event listener
             }


     function winnerCheck() {                                        //check for a winner
         var result = "no winner";                               //No winner variable
         if (fighters[0].health < 1 && fighters[1].health < 1) {
             result = "You Both Lose !!";                                 //Results for both players losing the games
         } else if (fighters[0].health < 1) {
             result = fighters[1].name + " WINS !"                          //If player two wins
         } else if (fighters[1].health < 1) {
             result = fighters[0].name + " WINS !"                          //If player one wins

         }

         return result;
     }

})();