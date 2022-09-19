# Week 11 - Assignment 2

[Welcome to Pesto assignment - 2 from the Week 11](https://pestotech.teachable.com/courses/1782350/lectures/40231475)

# Redux Exercise 1:
Use the below Codesandbox link

https://codesandbox.io/s/github/dceddia/plain-react-state-lightswitch

It’s a plain React app displaying a “Room” with a lightswitch. Clicking the button toggles the state, which turns the light on and off.

The task is to add Redux to this app, and move the lightswitch state out of the React component and into Redux. Once you’re done, clicking the button should dispatch an action, and the reducer should return the updated lightswitch state.

You can leave everything in one file, or split out the Room component into its own file if you like.

If you do leave it all in index.js, you won’t need to export the connected Room component. Instead, save it in a separate variable, like `const ConnectedRoom = connect(mapStateToProps)(Room)` – and update the `ReactDOM.render` call to render the ConnectedRoom.

## Guidelines:

1. Add Redux into the application.

2. Wire Redux with the React App using built in methods.

3. The Action, Dispatchers and Reducer files should have been created.

4. Bonus for creating separate files for each.

5. The Action - Dispatch - Reducer - Store flow should work as expected.

## Snaps

![Snap1](./src/assets/images/screenshot1.PNG)

![Snap2](./src/assets/images/screenshot2.PNG)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
