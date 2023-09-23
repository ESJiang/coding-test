const http = require("http");
const https = require("https");
const startTime = Date.now(); // start time

function checkConnection(url) {
    // set default policy when url is like "//www.example.com"
    if (!url.startsWith("http://") && !url.startsWith("https://")) url = "http://" + url;
    const requester = url.startsWith("https://") ? https : http;
    const req = requester.request(url, () => {
        const endTime = Date.now(); // end time
        const responseTime = endTime - startTime; // calculate response time
        if (responseTime <= 500) console.log("good");
        else if (responseTime > 500 && responseTime < 5000) console.log("fine");
        else {
            req.destroy();
            console.log("terrible");
        }
    });
    req.on("error", () => console.error("terrible")); // handle error
    req.end();
}

checkConnection("https://www.google.com");
