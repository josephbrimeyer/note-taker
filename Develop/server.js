// Require/import the HTTP module
let http = require("http");
let fs = require("fs");
let express = require("express");
let app = express();
let path = require("path");

// Sets an initial port. We"ll use this later in our listener
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

// app.listen(PORT, function () {
//     console.log("App listening on PORT: " + PORT);
// });

// function handleRequest(req, res) {

//     // Here we use the fs package to read our index.html file
//     fs.readFile(__dirname + "/index.html", function(err, data) {
//       if (err) throw err;
//       // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//       // an html file.
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   }

// function handleRequest(req, res) {

//     // Capture the url the request is made to
//     var path = req.url;

//     // Depending on the URL, display a different HTML file.
//     switch (path) {

//     case "/":
//       return displayRoot(res);

//     case "/portfolio":
//       return displayPortfolio(res);

//     default:
//       return display404(path, res);
//     }
//   }

  // When someone visits the "http://localhost:8080/" path, this function is run.
//   function displayRoot(res) {
//     var myHTML = "<html>" +
//       "<body><h1>Home Page</h1>" +
//       "<a href='/portfolio'>Portfolio</a>" +
//       "</body></html>";

//     // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
//     res.writeHead(200, { "Content-Type": "text/html" });

//     // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
//     res.end(myHTML);
//   }

//   // When someone visits the "http://localhost:8080/portfolio" path, this function is run.
//   function displayPortfolio(res) {
//     var myHTML = "<html>" +
//       "<body><h1>My Portfolio</h1>" +
//       "<a href='/'>Go Home</a>" +
//       "</body></html>";

//     // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
//     res.writeHead(200, { "Content-Type": "text/html" });

//     // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
//     res.end(myHTML);
//   }

//   // When someone visits any path that is not specifically defined, this function is run.
//   function display404(url, res) {
//     var myHTML = "<html>" +
//       "<body><h1>404 Not Found </h1>" +
//       "<p>The page you were looking for: " + url + " can not be found</p>" +
//       "</body></html>";

//     // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
//     res.writeHead(404, { "Content-Type": "text/html" });

//     // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
//     res.end(myHTML);
//   }
