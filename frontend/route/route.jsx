// should fetch our data and update the result
export const fetchRepoInformation = async (name, repo) => {
    console.log(name, repo)
  return await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: "bearer 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",
    },
    body: JSON.stringify({
      query: `query { 
          repositoryOwner(login: "${name}"){
            repository(name:"${repo}"){
              name
              url
            }
          }
        }`,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
