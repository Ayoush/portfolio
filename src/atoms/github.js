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
      const response = await axios.get(`${userData.repos_url}?sort=updated&direction=desc&per_page=50`, {
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