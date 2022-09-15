const puppeteer = require('puppeteer');
// const mail = "jocawiv632@carsik.com";
// const pass = "789456123";
// const code = require('./code');

let browserPromise = puppeteer.launch({headless : false});

let page;
browserPromise.then(function(browser){
    console.log("Browser is opened");
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function(pageInstance){
    console.log("Page is opened");
    page = pageInstance;
    let urlPromise = page.goto("https://www.hackerrank.com/");
    return urlPromise;
}).then(function(){
    console.log("Hackerrank page is opened");
    let waitPromise = page.waitForSelector("ul.menu a");
    return waitPromise;
}).then(function(){
    let clickPromise = page.click("ul.menu a");
    return;
})