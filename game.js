var score = [0,1];

var team1={
    name: "Real Madrid",
    runs: [],
    score:0
}

var team2={
    name: "Manchester United",
    runs: [],
    score:0
}

var toss;


// window.addEventListener("load", () => {


// })

window.onload = () =>{
    selectToss(); // Deciding the strike
    updateButtonText(); // update the text of the button according to the strike
    updateNames(); // Updating the teams that are playing
    updateScore();
}


// Function for deciding the toss
var selectToss = () =>{
    toss = Math.round(Math.random())+1;
    console.log(toss);
}

// Function to change the button text
var updateButtonText = () =>{
    var button = document.getElementById("strike-button");
    console.log(button);
    var result = document.getElementById("result");
    result.style.visibility ="";
    // check if game is over
    if(team1.runs.length == 6 && team2.runs.length == 6){
        button.remove();
        result.textContent = team1.score === team2.score ? `Its a draw`: `${team1.score > team2.score? team1.name:team2.name} Wins`;
    }
    else{
        // check if the strike is over
        toss = team1.runs.length ===6 ? 2 : team2.runs.length === 6 ? 1 : toss;
    }


    button.textContent = `${toss === 1 ? team1.name:team2.name} Shooting`;
};

// Function to update the teams name that are playing
var updateNames = () =>{
    // Update Team - 1 name
    document.getElementById("team-1-name").textContent = team1.name;
    // Update Team - 2 name
    document.getElementById("team-2-name").textContent = team2.name;
}

var updateScore = () =>{
    // updating the score of team1 and team2
    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
    updateRuns(); //update the scoreboard
}

// Strike button click
var handleStrikeButtonClick = () =>{
 var runs = score[Math.floor(Math.random()*score.length)];
 console.log(runs);

//  runs = runs === 5?"W": runs; // if run is 5 we mark it as a wicket
 console.log(runs);

 // check which team is on strike
 if (toss ===1)
   {
    team1.runs.push(runs);
   team1.score= calculateScore(team1.runs); // Update the team score
    
   } 
   else{
    team2.runs.push(runs);
    team2.score = calculateScore(team2.runs); // Update the team score
    
   }

   updateButtonText();
   updateScore();
}

var calculateScore = (runs) =>{
console.log("Calculate score method");

return runs.map(num =>{
    
return num == 0 ? 0 : num;

}).reduce((total,num) => total + num

);

};
        


var updateRuns = () =>{
    var teamOneRunsElement = document.getElementById("team-1-round-runs").children;
    var rmygoal = document.getElementById("rmygoal");
    var gmygoal = document.getElementById("gmygoal");
    var teamTwoRunsElement = document.getElementById("team-2-round-runs").children;
    // update runs on score board
    team1.runs.forEach((run,index)=>{
        // teamOneRunsElement[index].textContent = run;
        // run == 1 ? teamOneRunsElement[index].classList.add("gdot") : teamOneRunsElement[index].classList.add("rdot");
        if(run==1)
        {
            teamOneRunsElement[index].textContent=" ";
            teamOneRunsElement[index].classList.add("gdot");
        }
        else{
            teamOneRunsElement[index].textContent=" ";
            teamOneRunsElement[index].classList.add("rdot");           
        }
    });
    team2.runs.forEach((run,index)=>{
        // teamTwoRunsElement[index].textContent = run;
        // run == 1 ? teamTwoRunsElement[index].classList.add("gdot") : teamTwoRunsElement[index].classList.add("rdot");
        if(run==1)
        {
            // teamTwoRunsElement[index].textContent=" ";
            teamTwoRunsElement[index].innerHTML=" ";
            teamTwoRunsElement[index].classList.add("gdot");
        }
        else{
            // teamTwoRunsElement[index].textContent=" ";
            teamTwoRunsElement[index].innerHTML=" ";
            teamTwoRunsElement[index].classList.add("rdot");           
        }
    });
};