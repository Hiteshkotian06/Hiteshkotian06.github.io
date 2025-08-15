// Updated LeetCode function with error handling
async function getLeetCodeStats(username) {
    try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        document.getElementById("leetcode-solved").textContent = 
            `LeetCode: ${data.totalSolved} problems solved (Easy: ${data.easySolved}, Medium: ${data.mediumSolved}, Hard: ${data.hardSolved})`;
    } catch (error) {
        console.error("Error fetching LeetCode stats:", error);
        document.getElementById("leetcode-solved").textContent = 
            "LeetCode: Data unavailable";
    }
}

// Updated HackerRank function with error handling
async function getHackerRankStats(username) {
    try {
        // Note: HackerRank doesn't have an official API, so we'll use a badge approach
        document.getElementById("hackerrank-solved").innerHTML = 
            `<img src="https://img.shields.io/badge/HackerRank-${username}-brightgreen?logo=hackerrank&style=flat" alt="HackerRank Profile">`;
    } catch (error) {
        console.error("Error with HackerRank badge:", error);
        document.getElementById("hackerrank-solved").textContent = 
            "HackerRank: Data unavailable";
    }
}

// Call the functions when the page loads
window.onload = function() {
    getLeetCodeStats("hiteshkotian"); // Replace with your LeetCode username
    getHackerRankStats("hitesh_kotian06"); // Replace with your HackerRank username
};
