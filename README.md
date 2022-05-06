# Redux Toolkit Blog

[See the live demo here](https://reduxblog.bjorkman.kim/)

This is a fun little experiment to test the water with Redux Toolkit. It fetches data from jsonplaceholder api with [RTK Query](https://redux-toolkit.js.org/tutorials/rtk-query)

## Running the project

From the root, follow these steps:

1. Run `yarn` to install dependencies
2. Run `yarn dev` to start the local development server

## Architecture

- `/components/` - contains all the UI components.
- `/slices/` - contains state management for the different features and logic for fetching data.
- `/pages/` - the app entrypoint is in `_app`, and the landingpage is `index.jsx`.
- `/theme/` - contains the design tokens and other theme data.
- `/utils/` - a collection of hooks and other helpers.
- `/store.js` - the global state is initiated and configured here.

## Notable dependencies used

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Redux + Redux Toolkit](https://redux-toolkit.js.org/) for state management and data fetching
- [Stitches](https://stitches.dev/) for theming and component composition
- [Framer Motion](https://www.framer.com/motion/) for the animations
