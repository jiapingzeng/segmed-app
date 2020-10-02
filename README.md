## How to use
1. Visit [https://segmed-app.herokuapp.com/](https://segmed-app.herokuapp.com/)
2. Scroll on the images to navigate through them, click on the button on each image to flag and unflag
   - Note: horizontal scrolling works best on Chromium browsers as FireFox has a smaller deltaY distance by default (scrollbar may be easier to use there). Natural scrolling works on mobile Safari and Chrome. Other browsers were not tested.

## Local setup
1. Install Node.js from [here](https://nodejs.org/en/)
2. Clone this repo:
```
git clone https://github.com/jiapingzeng/segmed-app
cd segmed-app
```
3. Install dependencies:
```
npm install
```
4. Generate sample data (this app currently uses a remote MySQL database; to use a local database, replace the connection strings in `generate-data.js` and `server.js`)
```
npm run data
```
5. Start local web server
```
npm start
```
6. View website in your browser at `http://localhost:3000/`
7. Done!

## Other details
- This app was built using Node.js (Express) and hosted on Heroku with a MySQL database hosted on AWS
- Front-end was built using plain HTML, CSS and JavaScript for simplicity
- Images pulled from Unsplash; sample entries are placed in the database using script `generate-data.js`
- Thanks for your time!
