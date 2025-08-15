async function getLeetCodeStats(username) {
    const query = `
        query getUserProfile($username: String!) {
            matchedUser(username: $username) {
                username
                submitStats {
                    acSubmissionNum {
                        difficulty
                        count
                    }
                }
            }
        }
    `;

    const response = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query,
            variables: { username }
        })
    });

    const data = await response.json();
    return data.data.matchedUser.submitStats.acSubmissionNum;
}

getLeetCodeStats("your_username").then(stats => {
    console.log("LeetCode Stats:", stats);
    // Example: Insert into HTML
    document.getElementById("leetcode-solved").textContent =
        `LeetCode: ${stats.reduce((sum, item) => sum + item.count, 0)} problems solved`;
});


async function getHackerRankStats(username) {
    const response = await fetch(`https://hacker-rank-api.p.rapidapi.com/user/${username}`, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'hacker-rank-api.p.rapidapi.com',
            'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY'
        }
    });
    const data = await response.json();
    console.log(data);
    document.getElementById("hackerrank-solved").textContent =
        `HackerRank: ${data.solved} problems solved`;
}

