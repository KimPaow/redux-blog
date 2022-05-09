# Redux Toolkit Blog

[See the live demo here](https://reduxblog.bjorkman.kim/)

This is a fun little experiment to test the waters with Redux Toolkit. 

It also features:
- Data fetching from [jsonplaceholder](https://jsonplaceholder.typicode.com/) with [RTK Query](https://redux-toolkit.js.org/tutorials/rtk-query).
- A node.js api built with Next.js api-routes which connects to a cloud-hosted [MongoDB Atlas](https://www.mongodb.com/atlas/database) database.
- Secure authentication which;
  * ... has countermeasures for CSRF, XSS, NoSQL injection attacks.
  * ... persists the JWT token used for authenticating users in secure http-only cookies

## Running the project

From the root, follow these steps:

1. Run `yarn` to install dependencies
2. Run `yarn dev` to start the local development server

## Architecture

- `/components` - contains all the UI components.
- `/db` - contains mongodb (database) models and logic
- `/redux` - state management
  * `/api` - requests to the api for communicating with mongodb and jsonplaceholder
  * `/slices` - slices of state for different features
- `/pages` - the app entrypoint is in `_app`, and the landingpage is `index.jsx`.
  * `/api` - the API lives here, it features custom built authentication.
- `/theme` - contains the design tokens and other theme data.
- `/utils` - a collection of hooks and other helpers.

## Notable dependencies used

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Redux + Redux Toolkit](https://redux-toolkit.js.org/) for state management and data fetching
- [MongoDB Atlas](https://www.mongodb.com/) database
- [Stitches](https://stitches.dev/) for theming and component composition
- [Framer Motion](https://www.framer.com/motion/) for the animations

## Upcoming features
- [ ] Testing
- [ ] Refactor to TypeScript
- [ ] Implement Storybook (or similar)
