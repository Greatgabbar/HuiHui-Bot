const puppeteer = require('puppeteer');
const $=require('cheerio');
module.exports = async (title)=>{
    const browser= await puppeteer.launch();
    const page= await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 720,
        deviceScaleFactor: 1,
    });
    await page.goto(`https://www.google.com/search?q=${title}+lyrics`);
    let search=await page.$('.SALvLe.farUxc.mJ2Mod');
    console.log(1);
    if(search===null){
    console.log(2);
        const search2=await page.click('#wp-tabs-container g-text-expander');
        const res=await page.$('#wp-tabs-container')
        const title=await res.$$eval('.ujudUb span',options => options.map(option => option.textContent))
        // console.log(search2);
        return title.join('\n');
    }

    const title1=await search.$$eval('.ujudUb span',options => options.map(option => option.textContent))
    return title1.join('\n');
};