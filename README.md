# CoinTracker

> Coinmarketcap portfolio clone. Built with React, Redux & Tailwind CSS for learning purpose

![screenshot](https://github.com/bleriotnoguia/cointracker/blob/main/screenshot.png)

## Available Scripts

In the project directory, you can run:

### `json-server --watch data.json --port 3004`

By default the project fetch data from `https://cointracker-api.vercel.app` to use data.json you must change the value of `window.url_api` in `./src/store.js` on line 25

For the demo this project use 5000 coins with default data. To get the real data you must clone the projet and update url/api

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
