# Exam Voyager 🚀 🛸 ❤ 👾 👁️
> A simple SPA CRUD Blog written in React, Redux (Thunk) and React-Router. You can check the current site here: <http://aldrenterante.exam-voyager.surge.sh>

## Table of Contents

* [Background](#background)
* [Tools](#Tools)
* [Install](#Install)
* [Usage](#Usage)
* [Todo](#Todo)

## Background
It's a take home exam to assess technical knowledge by building basic blog platform with CRUD features written in react, redux (thunk) and react-router. For quick clean user interface I use reactstrap.

## Tools
I use CRA (create-react-app) to quick react boilerplate paired with redux-thunk and react-router and serve the build static file in surge.sh for quick and free hosting.

* [Create React App](https://github.com/facebook/create-react-app) - easy react boilerplate
* [Surge](https://surge.sh/) - for quick static web publishing
* [LowDB](https://github.com/typicode/lowdb) - small local JSON database powered by lodash
* [Reactstrap](https://reactstrap.github.io/) - bootstrap components written in react
* [Redux](https://redux.js.org/) - state container management
* [Redux Form](https://redux-form.com/8.1.0/) - to manage form state in redux
* [Enzyme](https://airbnb.io/enzyme/)/[Jest](https://jestjs.io/) - for unit testing
## Install
```
yarn install
```

## Usage

For local dev
```
yarn start
```

to run unit tests (current unit tests are still low :( don't much have time sorry :()
```
yarn tests
```

to update current site (<http://aldrenterante.exam-voyager.surge.sh>)
```
yarn build
```

## Todo
- add more unit tests
- implement e2e testing using cypress.io
- add flow for type checking
- and more...