![Version](https://img.shields.io/badge/Version-1.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![runs with reactnative](https://img.shields.io/badge/Runs%20with%20React-000.svg?style=flat-square&logo=React&labelColor=f3f3f3&logoColor=61DAFB)](https://reactnative.dev/)
[![runs with router dom](https://img.shields.io/badge/Runs%20with%20React_Router_Dom-000.svg?style=flat-square&logo=React&labelColor=f3f3f3&logoColor=blue)](https://expo.io/)
[![runs with redux](https://img.shields.io/badge/Runs%20with%20Redux-000.svg?style=flat-square&logo=Redux&labelColor=f3f3f3&logoColor=7247B5)](https://redux.js.org/)
[![runs with firebase](https://img.shields.io/badge/Runs%20with%20Firebase-000.svg?style=flat-square&logo=Firebase&labelColor=f3f3f3&logoColor=FFCB2D)](https://firebase.google.com/)

# LinkedIn Clone

![LinkedIn Clone Demo](linkedIn.gif)

**_Built using React JS, Redux, Firebase & Styled-Components_**. It's created with help of the tutorial on YouTube by _'Clever Programmer'_. Added some features apart from the tutorial on my own like:

- Post like functionality
- Mobile responsiveness

## Features and Fuctionality

- Login using Google (Firebase Authentication)
- Create a new post
- Share photos and videos (React player for videos)
- Auto authenticate user on refresh
- Sign Out

## How to build your own..?

1. Clone this repo
1. Install all the dependencies
   ```bash
   npm i
   ```
1. Setup Firebase

   - Create Firebase account
   - Create a new project
   - Create a web app for that
   - Copy your config from there

     - Select config option
     - Paste those config inside src/fBase/fBase.js file

   - Setup authentication using Google

## Future Plans

- Write a backend (nod js/express/mongoDB) and attach it to this draft
- Make it on Redux Toolkit
- Add more login methods
- Post deleting functionality
- Add post's comments
- Add post's/comment's likes
- Add favorites
- Add user profile page
- Add company page
- Add jobs page

**_NOTE: PLEASE LET ME KNOW IF YOU DISCOVERED ANY BUG OR YOU HAVE ANY SUGGESTIONS_**
