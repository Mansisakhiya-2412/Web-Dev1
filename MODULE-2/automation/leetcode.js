const puppeteer = require('puppeteer');
const mail = "sokkoyotra@vusra.com";
const pass = "123@bc456";

let browserPromise = puppeteer.launch({ headless: false });
let page;
browserPromise.then(function (browser) {
    console.log("Browser is opened");
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function (pageInstance) {
    console.log("Page is opened");
    page = pageInstance;
    let urlPromise = page.goto("https://leetcode.com/");
    return urlPromise;
}).then(function () {
    console.log("leetcode is opened");
    let waitPromise = page.waitForSelector(".nav-menu>a");
    return waitPromise;
}).then(function () {
    let clickPromise = page.click(".nav-menu>a");
    return clickPromise;
}).then(function () {
    let waitPromise = page.waitForSelector(".inner .nav-right .nav-menu>a");
    return waitPromise;
}).then(function () {
    let domClickPromise = page.evaluate(function () {
        let btns = document.querySelectorAll(".inner .nav-right .nav-menu>a");
        btns[4].click();
        return;
    });
    return domClickPromise;
 }).then(function () {
    let waitPromise = page.waitForSelector("#id_login");
    return waitPromise;
}).then(function () {
    let mailTypedPromise = page.type("#id_login", mail, { delay: 100 });
    return mailTypedPromise;
}).then(function () {
     let passTypedPromise = page.type("#id_password", pass, { delay: 100 });
    return passTypedPromise;
 }).then(function () {
     let clickPromise = page.click(".btn-content-container__2HVS>span");
     return clickPromise;
 }).then(function () {
    console.log("Login succesFully completed");
 })