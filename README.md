# Triplex Browser Frontend

This is the web frontend for the Triplex Triple Browser.
It is made with Angular 4 and much love. ❤️

**In order to use this frontend, you always need a running [node-triplex backend](https://github.com/triplex-browser/node-triplex).**

## Demo

We provide a running version of the Triplex Browser at [http://triplex.work](http://triplex.work)

## Issues, Bugs, Feature Requests

Thanks for using the Triplex Browser!
If you encounter any bugs or other issues,  feel free to file a pull request or submit an issue.

## Installation and start

You need Node.js and NPM to run this project.
Clone the repo and run npm install inside the repo directory:

```
git clone https://github.com/triplex-browser/ng-triplex
cd ng-triplex
npm install
```

This will install the [Angular CLI](https://github.com/angular/angular-cli) and all other dependencies.
Run the project with the following command:

```
npm start
```


## Change backend URL

The backend URL is provided in the environment files.
When starting the Angular application in development mode (which is the standard mode if you just run `npm start` or `ng serve`) the file in question is `src/environments/environment.ts`.
Change the value for `environment.apiUrl` when your backend is running on a different host or port.



## Build and publish

The demo at http://triplex.work is served via GitHub pages in the `gh-pages` branch of this repo. If you are in active development and want to publish a new version, do the following:

```
npm run build
npm run publish
```

This will build the application to the `dist` folder and push it to the `gh-pages` branch.
The `CNAME` file will be added automatically, so this app can be served statically from GitHub Pages.
