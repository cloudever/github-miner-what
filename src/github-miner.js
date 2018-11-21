export type SearchField = "location" | "username" | "repos";

export type GithubMinerParams = {
  adapter: any
};

export type SearchQuery = {
  [key: SearchField]: string
};

class GithubMiner {
  constructor(params: GithubMinerParams) {
    const { adapter } = params;
    this.adapter = adapter;
  }

  search = async (searchQuery: SearchQuery, responseFields) => {
    const searchResponse = await this.adapter.resolve(searchQuery);
    return searchResponse;
  };
}

export default GithubMiner;
