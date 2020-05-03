This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[![CircleCI](https://circleci.com/gh/kriswep/cra-tailwindcss-in-js.svg?style=svg)](https://circleci.com/gh/kriswep/cra-tailwindcss-in-js)

It shows how you could setup [Tailwind CSS](https://tailwindcss.com/), a utility-first css framework, in an CRA environment with styled components and babel macros. Read more about the setup steps and benefits using [Tailwind and css-in-js combined](https://wetainment.com/articles/tailwind-css-in-js/).

*Updated to work with Tailwind version 1!*

## Why?
Tailwind is a great utility-first CSS framework. When used with React we want to be able to use as much JSX and CSS-in-JS in order to be able to modify objects' styles in the same class based on the actual state of the object / data.
[Here's](https://devmode.fm/episodes/css-in-js-an-emotional-topic) more explanation about the topic. IF you prefer to read then check [this](https://dev.to/lpbayliss/how-and-why-i-use-emotion-with-tailwind-4elj) one out.
Tailwind has shorter predefined methods to achieve great designs that don't depend on particular design language.
If you want to understand more on why to use both together. read [this](https://dev.to/lpbayliss/how-and-why-i-use-emotion-with-tailwind-4elj)
Some of the libraries that allow us to [achieve](https://nystudio107.com/blog/using-tailwind-css-with-gatsby-react-emotion-styled-components) that are emotion and styled-components.
Can't we achieve that with PostCSS exclusively? No quite.
### So how can we use Tailwind CSS along with CSS-in-JS in styled-components
We need to take a hybrid approach where PostCSS will be used to compile Tailwind base CSS styles, while using Babel macros to compile Tailwind CSS macros into Tailwind classes through our CSS-in-JS code.
You can find more information over [here](https://dev.to/lpbayliss/how-and-why-i-use-emotion-with-tailwind-4elj)
### What's PostCSS for?
We use PostCSS to build the base style sheets from the Tailwind CSS. Essentially it allows us to normalize the CSS across all pages in our project.
### Why should we use Babel macros
Babel macro is compilation-time plugin i.e it allows us to modify the original source code of our program during compilation to whatever value we need.
Perhaps, if we have defined placeholders in our code to be replace `babel-macro-plugin-*` could help us replace that.
Specifically, in our project we use `tailwind.macro` along with `babel-macro-plugin` to modify all `tw` in our CSS-in-JS entries to an actual Tailwind CSS code during compilation.
### So how can I achieve this setup on my own.
While inspired by many of the Gatsby posts about styled-components and Tailwind CSS, I first started with [this](https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/) guide. Which wasn't so thorough as I couldn't use CSS-in-JS yet due to the lack of Babel macros.
Right after I started building this CRA template to make to have a ready-to-use boilerplate by following the official CRA [docs](https://create-react-app.dev/docs/custom-templates/) and this article right [here](https://medium.com/@alexgrischuk/how-to-create-custom-create-react-app-cra-templates-73a5196edeb)
I then continued reading and bumped into the follwing guides:
* https://dev.to/dbshanks/an-efficient-react-tailwindcss-styled-components-workflow-458m
* https://wetainment.com/articles/tailwind-css-in-js/
* https://www.freecodecamp.org/news/how-to-style-your-react-apps-with-less-code-using-tailwind-css-and-styled-components/


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
