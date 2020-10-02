## Setup (to run server locally)
1. Install Node.js from [here](https://nodejs.org/en/)
2. Clone this repo (and switch to this branch):
```
git clone https://github.com/jiapingzeng/segmed-app
cd segmed-app
```
3. Install dependencies:
```
npm install
```
4. Generate sample data (this app currently uses a remote MySQL database; to use a local database, replace the connection strings in generate-data.js and server.js)
```
npm run data
```
5. Start local web server
```
npm start
```
6. View website in your browser at `http://localhost:3000/`
7. Done!
