
const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

let leaderboard = [];
let counter = 0;

request(link, cb);

function cb(error, response, html) {
    if (error) {
        console.log(error);

    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;

        let allScorecardTags = document.querySelectorAll('a[data-hover = "Scorecard"]');
        //console.log(allScorecardTags.length);
        for (let i = 0; i < allScorecardTags.length; i++) {
            let link = allScorecardTags[i].href;
            let completelink = "https://www.espncricinfo.com" + link;
           // console.log(completelink);
            request(completelink, cb2);
        }
    }
}

function cb2(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;

        let batsmanRow = document.querySelectorAll(".table.batsman tbody tr");
        //console.log(batsmanRow.length);

        for(let i = 0 ; i < batsmanRow.length ; i++){
            let cells = batsmanRow[i].querySelectorAll('td');
            if(cells.length == 8){
                let name = cells[0].textContent;
                let runs = cells[2].textContent;
                let balls = cells[3].textContent;
                let Fours = cells[5].textContent;
                let sixes = cells[6].textContent;
               // console.log("Name : ",name,"Runs : ",runs,"Balls : ",balls,"Fours : ",Fours,"Sixes : ",sixes);
               processPlayer(name,runs,balls,Fours,sixes);
            }
        }

        counter--;
        if(counter == 0){
            console.log(leaderboard);
            let data = JSON.stringify(leaderboard);
            fs.writeFileSync('BatsmenStats.json',data);


        }

    }
}

function processPlayer(name,runs,balls,Fours,sixes){
    runs = Number(runs);
    balls = Number(balls);
    Fours = Number(Fours);
    sixes = Number(sixes);
    for(let i=0;i<leaderboard.length;i++){
        let playerObj = leaderboard[i];
        if(playerObj.Name == name){
            //will do some work here
            playerObj.Runs+=runs;
            playerObj.Innings+=1;
            playerObj.Balls+=balls;
            playerObj.Fours+=Fours;
            playerObj.Sixes+=sixes;
            return;
        }
    }
    // code coming here means we did not find our player inside leaderboard
    let obj = {
        Name:name,
        Innings:1,
        Runs:runs,
        Balls:balls,
        Fours:Fours,
        Sixes:sixes
    }
    leaderboard.push(obj);
}

// console.log("Line 80: ",leaderboard);



