import PuppeteerAdapter from "./adapters/puppeteer";
import GithubMiner from "./github-miner";

(async () => {
  const adapter = new PuppeteerAdapter();
  const gm = new GithubMiner({ adapter });

  const result = gm.search({
    username: "cloudever"
  });

  console.log(result);
})();
