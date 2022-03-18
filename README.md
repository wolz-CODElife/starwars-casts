# Star Wars Exercise

Star Wars is an American epic space opera media franchise created by
George Lucas, which began with the eponymous 1977 film and quickly
became a worldwide pop-culture phenomenon.
In this exercise, you’ll make a small React application that lists the names of
Star Wars movies in a dropdown and the opening crawl of the selected movie
below the selection along with a list of the characters that appear in that
movie.

## Development stages

In efforts to provide the participant with a logical step-by-step development
guide, the exercise has been broken down into 4 development stages:
1. Implement the views
2. Build the functionalities
3. Integrate APIs
4. Deployment

## Building the views

Layout, CSS and use of child components is up to you.
Here is the comprehensive list of the general requirements the app must
follow.
- The user interface should have a basic theme of black and yellow. The
style is up to you, there’s no need to copy the design shown above.

- Movie names in the dropdown to be sorted by release date from
earliest to newest.

- There should be no movie selected initially and the app should show
the Star Wars logo instead of movie information.

- The opening crawl of the selected movie should be animated, a simple
scrolling marquee text would be sufficient.

- Although, the main thing we care about is functionality, user experience
is very important, better user experience earns you extra points.
Building the functionalities
The functionalities of the Star Wars app must adhere to a set of specifications
described on this section.

- All characters that appear in that movie should be listed showing name,
gender, and height in the form of a table.

- Gender can be shown as an icon or abbreviation to save horizontal
space.

- Character list can be sorted by clicking on the table headers.

- Clicking on the same header twice toggles the sort order by the field
between ascending and descending.

- There should also be a gender filter selection right above the list so that
either all characters are listed or only the selected gender are listed.

- The last row of the table should show the total number of
characters currently visible on the list.

- The last row should also show the sum of the heights of the characters
currently visible.

- The sum of heights should be shown both in cm and in feet/inches in
parenthesis, for example, 170 cm (5ft/6.93in)

## Integrate APIs

- The data should be fetched online from https://swapi.dev/

- If you encounter CORS error CORS error connecting to SWAPI, use a
free online CORS proxy, like http://anyorigin.com/, for example you can
call https://swapi.dev/api/films without CORS issues
using http://anyorigin.com/go?url=https://swapi.dev/api/films

- Loading indicators should be shown in proper places while fetching
data

- Error messages should be shown if there are any errors

## Additional notes

CSS and UX are important, but secondary to logical functionality. Although
there is no predetermined single solution or set of requirements for style,
please take some time to present an interface that shows a fundamental
grasp of the domain.

## Demo
This demo exercises the application requirements: [starwars-casts.web.app](https://starwars-casts.web.app)

The following images previews the demo of the application:

![image](https://user-images.githubusercontent.com/55518764/159081570-cbd93061-d434-49d8-a020-efe494191f5c.png)

---
![image](https://user-images.githubusercontent.com/55518764/159095765-dee12b00-35be-475a-ae32-8a0a3bfd277e.png)

---

## Deployment

- Set up a deployment for your application to enable you to deploy to a
cloud service of your choice. (Recommendation: Heroku, Netlify or
GitHub pages).

- Share URL for preview.

- Ensure source code repository is publicly available. (Recommendation:
GitHub, bitbucket or Gitlab).

- Share source code URL for code reviews.

## Rubric

The task is designed to provide an opportunity for you to demonstrate
general JavaScript knowledge. You’ll be evaluated primarily based on the
following:

- Code efficiency and data manipulation

- Ability to write clean, structured, readable and maintainable code.

- Ability to fetch, transform and aggregate data from external APIs.

## Resources

Feel free to consult documentation as needed. Here are a few suggestions to
start with:
- React docs

- MDN

- Star Wars API documentation

May the force be with you!

---

## Contirbuting to the project



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
