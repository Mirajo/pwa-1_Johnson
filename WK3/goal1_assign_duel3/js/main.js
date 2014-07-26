/*
     Name: Miranda Johnson
     Date: 07 -17 -14
     Class & Section:  PWA1-####
     Comments: "Week 2 Duel game"
 */
 (function(){                                                          //self executing function

         console.log("** Let's Fight**");                             //Print out Let's fight

         playerOne = {                                               //array for player one
             'name' : "Kabal",
             'damage': 50,
             'health': 100
         } ;

        playerTwo = {                                               //array for player two
            'name': "Kratos",
            'damage': 50,
            'health': 100

 };

       console.log("** We Are Fighting**");                         //Print out we are fighting

var players = [playerOne, playerTwo];                              //

var fight = true;


var rnd = 0;                                                      //variable for rounds

//var btn = document.querySelector('.buttonblue');  //Variable to select the fight button within the html page

     function fight(){                                            //fight function
         alert(playerOne[0]+":"+playerOne[2]+" *Start Fight* "+playerTwo[0]+":"+playerTwo[2]);
         for (var i = 0; i < 10; i++)
         {
              var minDamage1 = playerOne[1] * .5;                //min Damage variable for player 1
              var minDamage2 = playerTwo[1] * .5;                //min Damage variable for player 2

              var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);
              var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);

             playerOne[2]-=f1;
             playerTwo[2]-=f2;

             console.log(playerOne[0]+":"+playerOne[2] + " "+playerTwo[0]+":"+playerTwo[2]); //Print out players

             var result = winnerCheck();                          //variable to check for a winner
         }
     }












};