# hackernews-ui

## Requirements

- Node.js 12+ installed


## Setup

Install all dependencies

```
npm i
```


## Start in dev mode

```
npm run dev
```

Go to `http://localhost:3000` in your browser


## Build and start in production mode

```
npm run build
npm start
```

Go to `http://localhost:3000` in your browser


## Notes

Site is build with SSR using Next.js as the framework to handle bundling, routing as well as server side and client side compatability of the code.

A higher order component handles hydrating the redux store both on the server (initialise always) as well as hooking up the `Provider` to persist the redux store across routing handled in the client side after the first page load.

To allow both SSR and client side routing I've use the `next/link` component make routing consistent between server and browser.

### Routing

Routes are controlled through files setup in the `/pages` directory with `[foo]` denoting parameters.

The routes were setup with SEO friendliness in mind, so the `slug` part of the route is currently just generated and ignore on the page of that route.

#### Routes

- `/`
  - the root of the site which handles the index/home page
- `/[slug]/[itemId]`
  - details route which handles loading of the story item and it's top 20 comments


### Data

Data is handled with `redux`, which has been configure with `redux-thunk` in case asynchronous actions are required. But as the majority of asynchonous data fetching is properly handled in asynchronous functions during server rendering, asynchoronous fetching in the browser in this example is unnecessary, which provides some great opportunities for caching of the pages.

`getInitialProps` is the function that allows for this server side fetching and hydration of the `redux` store.