import { CheckOABRequest } from 'interface/request';
import puppeteer from 'puppeteer';

export async function checkIfOABExists({ name, oabNumber }: CheckOABRequest) {
    let nameFound = null;
    let oabNumberFound = null;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setRequestInterception(true);

    const responsePromise = new Promise<void>((resolve, reject) => {
        page.on('request', (interceptedRequest) => {
            if (interceptedRequest.isInterceptResolutionHandled()) return;

            if (interceptedRequest.url().endsWith('/Search')) {
                interceptedRequest.continue();
            } else {
                interceptedRequest.continue();
            }
        });

        page.on('response', async (response) => {
            if (response.url().endsWith('/Search')) {
                try {
                    const responseBody = await response.text();
                    const jsonResponse = JSON.parse(responseBody);

                    if (jsonResponse.Data.length === 0) {
                        resolve();
                    } else {
                        nameFound = jsonResponse.Data[0].Nome ?? null;
                        oabNumberFound = jsonResponse.Data[0].Inscricao ?? null;
                        resolve();
                    }
                } catch (error) {
                    console.log(error);
                    reject(error);
                }
            }
        });
    });

    await page.goto('https://cna.oab.org.br/home');

    await page.waitForSelector('#txtName');
    await page.waitForSelector('#txtInsc');
    await page.type('#txtName', `${name}`);
    await page.type('#txtInsc', `${oabNumber}`);

    await page.waitForSelector('#btnFind');
    await page.click('#btnFind');

    await responsePromise;
    await browser.close();

    return {
        isValid: name === nameFound && oabNumber === oabNumberFound,
    };
}
