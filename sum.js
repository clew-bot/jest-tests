const fetch = require('cross-fetch');

const addition = (a, b) => a + b;

const fetchData = async () => {
    const res = await fetch("https://v2.jokeapi.dev/joke/Dark?format=json", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            }
            });
    const data = await res.json();
    return data;

}

fetchData();

module.exports = addition;
module.exports = fetchData;