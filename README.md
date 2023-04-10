# Portafolio Project: FullStack Admin Dashboard

Portafolio Project using Nuxt 3, Vuetify and AWS Amplify to create an Admin Dashboard.

This project it is inspired by [FullStack Admin](https://github.com/ed-roh/fullstack-admin) by [EdRoh](https://github.com/ed-roh): [Youtube](https://youtu.be/0cPCMIuDk2I).

## Features

- Use Nuxt 3 with Server APIs & Composables
- Use Vuetify 3 for UI Framework and Theme
- Use AWS Amplify as backend (DynamoDB, AppSync, Cognito) and Deployment
- Use AWS Amplify with SSR on Nuxt Serve APIs
- Use Nuxt `useFetch` or `useAsyncData` to query AWS AppSync with API Key or Auth Sesion Access Token
- Use Vue Reactivity to make API Call on data change
- Use [ObservableHQ/Plot](https://github.com/observablehq/plot/) & D3 for data visualization

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
