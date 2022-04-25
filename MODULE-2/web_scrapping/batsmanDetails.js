const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link, cb);

function cb(error, response, html) {
    if (error) {
        console.log(error);

    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsman = document.querySelectorAll(".batsman-cell.text-truncate.out a");
        //console.log(batsman.length); 
        for (let i = 0; i < batsman.length; i++) {
            let batsmanLink = batsman[i].href;
            let completeBatsmanlink = "https://www.espncricinfo.com" + batsmanLink;
            //console.log(completeBatsmanlink);
            request(completeBatsmanlink, cb2);
        }
    }
}

function cb2(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let playerDetails = document.querySelector(".player-card-padding .player_overview-grid");
        let playerH5 = playerDetails.querySelectorAll("div h5");
        let Fullname = playerH5[0].textContent;
        let DOB = playerH5[1].textContent;
        console.log("Full Nmae : ",Fullname,"       Date OF Birth : ",DOB);
    }
}