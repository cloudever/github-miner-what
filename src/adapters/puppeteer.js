import type { PuppeteerBrowser, PuppeteerPage } from "puppeteer";

import puppeteer from "puppeteer";

class PuppeteerAdapter {
  constructor() {
    this.browser = this.createBrowser();

    process.on("beforeExit", async () => {
      await this.browser.close();
    });
  }

  createBrowser = async () => {
    const browser: PuppeteerBrowser = await puppeteer.launch();
    return browser;
  };

  createPage = async () => {
    const page: PuppeteerPage = await this.browser.newPage();
    return page;
  };

  performSearch = async () => {};
}

export default PuppeteerAdapter;
