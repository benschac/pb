# Playboy Front End Engineering Challenge

Welcome and thank you for taking the time to complete the Playboy take-home challenge for our senior frontend engineer position

You will have 2 days to complete the assignment. Once you have completed your solution, please reply with a link to a github repository and instructions on how to install / run the application

The goal of this challenge is to build out a "Playboy Awards 2021" interactive ballot. Please clone this repository and submit it once you are finished.

Here are the rules of this challenge.. you must:

1.  Build an application that displays a list of categories and nominees. Please follow the the essence of the wireframe below (feel free to make it your own). Run `yarn start` to start the application.
2.  Use the ![OMDB Database](http://www.omdbapi.com/) to populate 5 categories of 5 nominees each.
3.  When you click on a nominee, we should highlight the nominee card and save the selections. A user can only select one nominee per category, and we should be able to see all of their selections highlighted. The selected nominee card should follow the style guides below.
4.  Make the layout responsive with at least one breakpoint. On mobile, the app should look and feel like a native mobile app.
5.  Once the user is finished making their selections, they can click on a submit button that displays a results modal screen. A user can dismiss the modal by clicking on the close button (follow the wireframe below).

## Requirements:

1.  All navigation should happen in the same page
2.  Demonstrate use of React hooks
3.  Demonstrate knowledge of component modularization
4.  Utilize CSS to create the layout of the page. Add hover styles to the items the user is interacting with.
5.  Create components as you feel is best suited for your solution
6.  Deploy the page and send us the URL + github repo

![Ballot Wireframe](src/take-home-wire.jpg?raw=true "Ballot Wireframe")
![Ballot Success Modal Wireframe](src/take-home-success.jpg?raw=true "Ballot Success Modal Wireframe")

## Bonuses

2. Make it pretty
   2a) Animations?
3. Make it accessible
4. Add user flow tests
5. High Lighthouse score

## Styling Guidelines

- Use a custom (non-Google) served font of your choosing
- Use the following colors

  - Page background: - ![#0D2436](https://via.placeholder.com/15/0D2436/000000?text=+) `#0D2436`
  - Default/normal font color: ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) `#FFFFFF`
  - Hover font color: ![#CCCCCC](https://via.placeholder.com/15/CCCCCC/000000?text=+) `#CCCCCC`
  - Nominee card / submit button background: ![#009B86](https://via.placeholder.com/15/009B86/000000?text=+) `#009B86`
  - Selected Nominee card: ![#009B86](https://via.placeholder.com/15/009B86/000000?text=+) `#009B86`
  - Nominee card background hover / submit button background hover: ![#34AC9C](https://via.placeholder.com/15/#34AC9C/000000?text=+) `#34AC9C`

  Good luck!

## Required Node Version

1. Create React App requires node >= 10.14. `nvm use` to use the correct version of node.

## Available Scripts

In the project directory, you can run:

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
