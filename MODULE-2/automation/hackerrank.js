const puppeteer = require('puppeteer');
const mail = "jocawiv632@carsik.com";
const pass = "789456123";
// const code = require('./code');

let browserPromise = puppeteer.launch({ headless: false });

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
    console.log("Hackerrank page is opened");
    let waitPromise = page.waitForSelector("ul.menu a");
    return waitPromise;
}).then(function () {
    let clickPromise = page.click("ul.menu a");
    return clickPromise;
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
    let waitPromise = page.waitForSelector("#input-2");
    return waitPromise;
}).then(function () {
    let passTypedPromise = page.type("#input-2", pass, { delay: 100 });
    return passTypedPromise;
}).then(function () {
    let clickPromise = page.click('button[data-analytics="LoginPassword"]');
    return clickPromise;
}).then(function () {
    console.log("Login successul hogya");
})