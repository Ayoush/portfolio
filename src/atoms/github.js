import axios from "axios";
import { selector, selectorFamily } from "recoil";
import config from "../../config";

export const githubData = selector({
  key: "githubData",
  get: async ({ get }) => {
    try {
      const response = await axios.get(config.github, {
        headers: {
          Authorization: `Bearer ${config.github_token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});


export const followersData = selector({
  key: "followersData",
  get: async ({ get }) => {
    try {
      const userData = get(githubData);
      const response = await axios.get(userData.followers_url, {
        headers: {
          Authorization: `Bearer ${config.github_token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});


export const repoDetails = selector({
  key: "repoDetails",
  get: async ({ get }) => {
    try {
      const userData = get(githubData);
      const response = await axios.get(`${userData.repos_url}?per_page=200`, {
        headers: {
          Authorization: `Bearer ${config.github_token}`,
        },
      });

      const repoData = response.data
        .filter((repo) => !repo.fork)
        .map((repo) => ({
          name: repo.name,
          htmlUrl: repo.html_url,
          description: repo.description,
          language: repo.language,
          details: [
            {data: repo.stargazers_count},
            {data: repo.forks_count},
            {data: repo.watchers_count}
          ],
          languages: repo.languages_url
        }));
      return repoData;
    } catch (error) {
      throw error;
    }
  },
});



export const repoLanguages = selector({
  key: "repoLanguages",
  get: async ({ get }) => {
    try {
      const repos = get(repoDetails);
      const languagesData = await Promise.all(
        repos.map(async (repo) => {
          const response = await axios.get(repo.languages, {
            headers: {
              Authorization: `Bearer ${config.github_token}`,
            },
          });
          return {
            repoName: repo.name,
            languages: response.data,
          };
        })
      );
      return languagesData;
    } catch (error) {
      throw error;
    }
  },
});


export const repoDetailsSelector = selectorFamily({
  key: "repoDetailsSelector",
  get: (repoUrl) => async () => {
    try {
      const response = await axios.get(repoUrl, {
        headers: {
          Authorization: `Bearer ${config.github_token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});