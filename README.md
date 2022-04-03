# Attuned Assignment

[See the live version here](https://attuned-assignment.vercel.app/)

## Running the project

From the root, follow these steps:

1. Run `yarn` to install dependencies
2. Run `yarn dev` to start the local development server

## Architecture

`/components/` - contains all the UI components
`/features/` - contains state management for the different features and logic for fetching data
`/pages/` - the app entrypoint is in `_app`, and the landingpage is `index.jsx`
`/theme/` - contains the design tokens and other theme data
`/utils/` - a collection of hooks and other helpers
`/store.js` - the global state is initiated and configured here

## Libraries used

- [Next.js](https://nextjs.org/)
- [Stitches](https://stitches.dev/) for theming and component composition
- [Framer Motion](https://www.framer.com/motion/) for animations
- [React](https://reactjs.org/)
- [Redux + Redux Toolkit](https://redux-toolkit.js.org/) for state management and data fetching
