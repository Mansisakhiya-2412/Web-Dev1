const puppeteer = require('puppeteer');
const mail = "jocawiv632@carsik.com";
const pass = "789456123";
const code = require('./code');

let browserPromise = puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-fullscreen'] }
);
let page;
browserPromise.then(function (browser) {
    console.log("Browser is opened");
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function (pageInstance) {
    console.log("Page is opened");
    page = pageInstance;
    let urlPromise = page.goto("https://www.hackerrank.com/");
    return urlPromise;
}).then(function () {
    return WaitAndClick("ul.menu a")
}).then(function () {
    let waitPromise = page.waitForSelector(".fl-module-content.fl-node-content .fl-button");
    return waitPromise;
}).then(function () {
    let domClickPromise = page.evaluate(function () {
        let btns = document.querySelectorAll(".fl-module-content.fl-node-content .fl-button");
        btns[1].click();
        return;
    });
    return domClickPromise;
}).then(function () {
    let waitPromise = page.waitForSelector("#input-1");
    return waitPromise;
}).then(function () {
    let mailTypedPromise = page.type("#input-1", mail, { delay: 100 });
    return mailTypedPromise;
}).then(function () {
    let passTypedPromise = page.type("#input-2", pass, { delay: 100 });
    return passTypedPromise;
}).then(function () {
    let clickPromse = page.click('button[data-analytics="LoginPassword"]');
    return clickPromse;
}).then(function () {
    return WaitAndClick('[data-automation="algorithms"]');
}).then(function () {
    return page.waitForSelector(".filter-group");
}).then(function () {
    let domSelectPromise = page.evaluate(function () {
        let allDivs = document.querySelectorAll(".filter-group");
        let div = allDivs[3];
        let clickSelector = div.querySelector(".ui-checklist-list-item input");
        clickSelector.click();
        return;
    })
    return domSelectPromise;
}).then(function () {
    console.log("warmup Selected");
    return page.waitForSelector(".challenges-list .js-track-click.challenge-list-item");
}).then(function () {
    let arrPromise = page.evaluate(function () {
        let arr = [];
        let aTags = document.querySelectorAll(".challenges-list .js-track-click.challenge-list-item");
        for (let i = 0; i < aTags.length; i++) {
            let link = aTags[i].href;
            console.log(link);
            arr.push(link);
        }
        return arr;
    })
    return arrPromise;
}).then(function(questionArr){
    console.log(questionArr);
    let questionPromise = questionSolver(questionArr[0],code.answers[0]);
})



function WaitAndClick(selector) {
    return new Promise(function (resolve, reject) {
        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(function () {
            let clickPromise = page.click(selector);
            return clickPromise;

        }).then(function () {
            resolve();
        })
    })
}

function questionSolver(question,answer){
    return new Promise (function(resolve,reject){
        let linkPromise = page.goto(question);
        linkPromise.then(function(){
            return WaitAndClick('.checkBoxWrapper input');
        }).then(function(){
            console.log("on the text area");
            let typePromise = page.type('.ui-tooltip-wrapper textarea',answer);
            return typePromise;
        }).then (function(){
            let holdControl = page.keyboard.down('Control');
            return holdControl;
        }).then (function(){
            let pressA = page.keyboard.press('A');
            return pressA;
        }).then (function(){
            let pressX = page.keyboard.press('X');
            return pressX;
        }).then (function(){
            let upControl = page.keyboard.up("Control");
            return upControl;
        }).then (function(){
            return WaitAndClick('.monaco-editor.no-user-select.vs');
        }).then(function(){
            let holdControl= page.keyboard.down('Control');
            return holdControl;
        }).then (function(){
            let pressA = page.keyboard.press('A');
            return pressA;
        }).then (function(){
            let pressV = page.keyboard.press('V');
            return pressV;
        }).then(function(){
            return WaitAndClick('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled');
        }).then(function(){
            console.log("question submitted successuFlly");
            resolve();
        })
    })
}