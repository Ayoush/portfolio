import axios from 'axios';
import cheerio from 'cheerio';

export async function getMediumFollowersCount() {
    
        try {
            const response = await axios.get("https://followerscount.vercel.app");
            return response.data;
        } catch (error) {
            console.error("Error:", error);
            throw new Error("Internal server error");
        }
    
}

export async function getMediumStoryStats(storyUrl) {
    if (!storyUrl.includes("medium.com")) {
        throw new Error("Not authorized");
    } else {
        try {
            const response = await axios.get(storyUrl);
            const html = response.data;
            // const $ = cheerio.load(html);
            const clapsIndex = html.indexOf("clapCount\":") + "clapCount\":".length;
            const endIndex = html.indexOf(",", clapsIndex);
            const claps = parseInt(html.substring(clapsIndex, endIndex));
            // const comments = parseInt($('.pw-responses-count').first().text().trim());
            return claps;
        } catch (error) {
            console.error("Error:", error);
            throw new Error("Internal server error");
        }
    }
}

export async function queryGraphQL(query, token) {
    // Set the GraphQL endpoint URL
    const endpoint = 'https://gql.hashnode.com/';

    try {
        // Send a POST request with the query and token in the headers
        const response = await axios.post(endpoint, { query }, {
            headers: {
                Authorization: `${token}`
            }
        });
        
        // Return the response data
        return response.data;
    } catch (error) {
        // Throw an error if request fails
        throw new Error('Failed to query GraphQL:', error.message);
    }
}
export async function fetchMediumPosts(username) {
    // Set the API endpoint URL
    const endpoint = `https://mediumpostsapi.vercel.app/api/${username}`;

    try {
        // Send a GET request to the API endpoint
        const response = await axios.get(endpoint);
        
        // Return the response data
        return response.data;
    } catch (error) {
        // Throw an error if request fails
        throw new Error('Failed to fetch Medium posts:', error.message);
    }
}
