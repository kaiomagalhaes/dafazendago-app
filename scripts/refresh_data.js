const https = require('https');
fs = require('fs');

https.get('https://api.roadrunner.codelitt.dev/open_pull_requests.json', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    const d = JSON.parse(data);

    fs.writeFile('./data/products.json', data, function (err) {
      if (err) return console.log(err);
      console.log('Data refreshed');
    });

  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});