// should fetch our data and update the result
export const fetchRepoInformation = async (name, repo, name1, repo1) => {
  console.log(name, repo);
  return await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: "bearer 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",
    },
    body: JSON.stringify({
      query: `{
        repoOne: repository(name: "${repo}", owner: "${name}") {
            name
            url
            description
            primaryLanguage {primaryLanguage: name}
            size: diskUsage
            releases {releases: totalCount}
            forks: forkCount
            pullRequests {pullRequests: totalCount}
            stargazers {stars: totalCount}
            totalIssues: issues {totalIssues: totalCount}
            openIssues: issues(states:[OPEN]) {openIssues: totalCount}
            repositoryTopics(first: 3) {nodes {topic {topics: name}}}
                updatedAt
        },
          repoTwo: repository(name: "${repo1}", owner: "${name1}") {
            name
            url
            description
            primaryLanguage {primaryLanguage: name}
            size: diskUsage
            releases {releases: totalCount}
            forks: forkCount
            pullRequests {pullRequests: totalCount}
            stargazers {stars: totalCount}
            totalIssues: issues {totalIssues: totalCount}
            openIssues: issues(states:[OPEN]) {openIssues: totalCount}
            repositoryTopics(first: 3) {nodes {topic {topics: name}}}
                updatedAt
        }
      }`,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
