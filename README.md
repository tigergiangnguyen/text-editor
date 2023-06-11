# 19 Progressive Web Applications (PWA): Text Editor

## Link to Deployed Application

[Click here to see the magic!]()

## Description

In this assignment, I was challenged to build a text editor that runs in the browser. This week is an odd week meaning that I was given a starter code and needed to finish the "TODO" section in order to complete and run the application with no errors. To do this, I use a method that does a getting and storing data to an IndexedDB database. This was built with a client and server side (Front end and back end) and the app will be a single application that uses Progressive Web Application.

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Installations

These downloads are needed in order to run this application!

 - Visual Studio Code
 - Node.js

These Node Package Manager are what is needed to run the application!

 - express
 - concurrently

## How to Run Application (If Cloning)

1. Clone the application then once you open the code in Visual Code, Open in Integrated Terminal by right clicking on server.js

2. In the terminal type "npm i" to install node packages that are required to run the application.

3. Finally type in terminal "npm run start:dev" run build and start server on a browser through localhost.

## Walkthrough Video

Full Video Link: [Click Here]()

## Credits

Contact and connect with me at my [Github](https://github.com/tigergiangnguyen)