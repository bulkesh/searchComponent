This project is about Search component in angular 1.6.
If you enter text in input text box, API will search data from URL and return filtered data from object

How to run angular project(auto start the index.html)

A.
Install: npm install -g http-server
After installation cd into your project folder and run http-server -o. 
-o is to open browser to the page automatically.

or 

B.
1. Install Node.js
2. Add a package.json file to the project folder
{
   "name": "Demo",
   "version": "1.0.0",
   "description": "demo project.",
   "scripts": {
     "lite": "lite-server --port 10001",
     "start": "npm run lite"
   },
   "author": "",
   "license": "ISC",
   "devDependencies": {
     "lite-server": "^1.3.1"
   }
}

3. Install the web server in your project folder - npm install
4. Start the local web server! - npm start . This will open your index.html file in your default browser, and page is refreshed every time when you make changes in your js and css files.


