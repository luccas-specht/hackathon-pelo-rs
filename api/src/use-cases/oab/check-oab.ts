import { CheckOABRequest } from 'interface/request';
import puppeteer from 'puppeteer';

function sleepFor(seconds: number) {
    var secondsToWait = seconds * 1000;

    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, secondsToWait);
    });
}

export async function checkIfOABExists({ name, oabNumber }: CheckOABRequest) {
    return (async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://cna.oab.org.br/');

        await page.waitForSelector('#txtName');
        await page.waitForSelector('#txtInsc');
        await page.type('#txtName', `${name}`);
        await page.type('#txtInsc', `${oabNumber}`);

        await page.waitForSelector('#btnFind');
        await page.click('#btnFind');

        await page.waitForSelector('#divResult');

        await page.waitForSelector('.rowName span');

        const secondSpanRowName = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.rowName span')).map(
                (e: HTMLElement) => e.outerText
            )[1];
        });

        await page.waitForSelector('.rowInsc span');

        const secondSpanRowInsc = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.rowInsc span')).map(
                (e: HTMLElement) => e.outerText
            )[1];
        });

        //await browser.close();

        return {
            isValid:
                name === secondSpanRowName && oabNumber === secondSpanRowInsc,
        };
    })();
}
