import type { PuppeteerBrowser, PuppeteerPage } from "puppeteer";

import puppeteer from "puppeteer";
import genericPool from "generic-pool";

class PuppeteerAdapter {
  constructor() {
    const browser = this.createBrowser();
    const pool = genericPool.createPool(
      {
        create: opts => browser.newPage(opts),
        destroy: page => page.close()
      },
      {
        min: 1,
        max: 10
      }
    );

    this.browser = browser;
    this.pool = pool;

    process.on("beforeExit", async () => {
      await browser.close();
    });
  }

  createBrowser = async () => {
    const browser: PuppeteerBrowser = await puppeteer.launch();
    return browser;
  };

  createPage = async opts => {
    const page: PuppeteerPage = await this.pool.acquire(opts);
    return page;
  };

  performSearch = async () => {};
}

export default PuppeteerAdapter;
