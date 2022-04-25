const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link, cb);

function cb(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        //console.log(html);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let mostwicket = 0;
        let nameoFHighestwicketTaker = "";
        let bowlertable = document.querySelectorAll("table.bowler");

        // console.log(bowlertable.length);
        for (let i = 0; i < bowlertable.length; i++) {
            let rows = bowlertable[i].querySelectorAll("tbody tr");
            //console.log(rows.length);
            for (let j = 0; j < rows.length; j++) {
                let tds = rows[j].querySelectorAll("td");
                if (tds.length > 1) {
                    let name = tds[0].textContent;
                    let wicket = tds[4].textContent;
                    //console.log("Bowler name ---> " + name + "         " + "wickets ---> " + wicket);
                    if(wicket>mostwicket){
                        mostwicket = wicket;
                        nameoFHighestwicketTaker = name;
                    }

                }
            }
        }
        console.log("Name o Highest Wicket Taker : ", nameoFHighestwicketTaker);
        console.log("Number o Highest Wicket : ",mostwicket);
    }
}