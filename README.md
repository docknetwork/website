## Repository is out of date, dock.io is now hosted on webflow

# The Dock Decentralized Autonomous Organization Website
It's the dock.io website!

# Installation
- install [node.js](https://nodejs.org)
- install [Yarn](https://yarnpkg.com)
- in project directory run `$ yarn` first time to install packages

# Development
- run `$ yarn dev` - this will launch dev server with auto-watch, auto-reload on source files modification.

# Linting
- run `$ yarn lint` before checking in code

# Building
Typically, builds are automatic and handled by [CircleCI](https://circleci.com) when committing to master, but there is a manual option:
- run `$ yarn build` to create an optimized production build
- run `$ yarn export` to create an a static export of HTML, JS, CSS and assets
- run `$ ./deploy.sh` to automatically commit to the GitHub pages branch

# Contributing
If you wish to contribute code, it is welcome. Just fork the repository and create a pull request.
