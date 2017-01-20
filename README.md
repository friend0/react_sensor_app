# Naive Universal Application

In building this app, I first started with facebook create-react-app tool.
After becoming comfortable creating and using components, I used a second base project for building a universla app using express.
I did an initial merge from the original repo into the new universal app, and continued development.
After the app was up and running with the components I'd developed, I merged the universal app back into the original appcreated with Facebook's tool.

## Installation & Execution

The application is installed using:

```
npm install
```

and ran using:

```
npm start
```

You can access the application's server directly under http://localhost:6001 or via its BrowserSync access server http://localhost:3000. BrowserSync console is available under http://localhost:3001.

## Description

The idea behind this version of the application is to:

1. Render sensor data in the main view
2. Offer interfaces to various calculators, and backup features.
3. Future - component refactoring, sensor interaction, VISUALIZATION (d3?)