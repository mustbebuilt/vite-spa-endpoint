## Calling RESTful API Endpoints

This repo demonstrates RESTful API calls to a endpoints allowing for the reading, inserting, editing and deleting of a simple set of data.

Calls are made via `fetch` to a RESTful API, each call using the appriopriate HTTP method ie 
`GET`, `POST`, `PUT` and `DELETE`.

The routes are all handled by a `localhost/api` endpoint, that can be provided by this [NextJS repo](https://github.com/mustbebuilt/next-endpoint).

## Set up

Clone this and the [NextJS repo](https://github.com/mustbebuilt/next-endpoint) to see how the application works.  Clone and run:

```bash
npm install
```

## Built with React + Vite

The original application was build with Vite using:

```terminal
npm create vite@latest
```

Dev build with:

```terminal
npm run dev  
```

Build with:

```terminal
npm run build
```

Output is placed in the `dist` folder.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
