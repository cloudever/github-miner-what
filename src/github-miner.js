export type SearchField = "location" | "username" | "repos";

export type GithubMinerParams = {
  adapter: any
};

export type SearchQuery = {
  [key: SearchField]: string
};

export type SearchFieldSet = {};

export type SearchResult = Array<{
  location: string,
  username: string,
  repos: [string]
}>;

interface GithubMinerInterface {
  constructor: (adapter: GithubMinerParams) => mixed;
  search: (query: SearchQuery) => SearchResult;
}

class GithubMiner implements GithubMinerInterface {
  constructor(params: GithubMinerParams) {
    const { adapter } = params;
    this.adapter = adapter;
  }

  search = async (
    searchQuery: SearchQuery,
    searchFieldSet: SearchFieldSet
  ): ResponseFieldSet => {
    const searchResponse = await this.adapter.resolve(searchFieldSet);
    return searchResponse;
  };
}

export default GithubMiner;
