export type SearchField = "location" | "username" | "repos";

export type GithubMinerParams = {
  adapter: any
};

export type SearchQuery = {
  [key: SearchField]: string
};

export type ResponseFieldSet = {
  username: string,
  repose: [string]
};

interface GithubMinerInterface {
  search: (query: SearchQuery) => SearchResult;
}

class GithubMiner implements GithubMinerInterface {
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
