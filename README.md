# quizzical-app
An application for taking a quick quiz on sports topics.

## Available scrips:

- **`npm install`** : to install the packages needed to run the project from the npm package-lock.json tree file.
- **`npm start`** : to start the project on a hot reload webpack server.
- **`npm test`** : to run all the tests written in the test files inside each component.
- **`npm build`** : to build the distributed directory in the production mode.

## What is this project?
Quizzical app is an app that offer a short quiz on the sports topic. The questions are fixed, and don't vary on each quiz. 
The app is built using *Reactjs* library and deployed using *Heroku* deployment.

## User journey:
- When the user first opens the app, he/she will find the landing page which will take him to the quiz page by pressing the "Start quiz" button.
- When the user hit the "Start quiz" button, the quiz interface will appear to the user. The user should be able to click any of the answers to mark it as selected, then "Check answers" to see his result.
- When the user click the "Play again" button, a new quiz will be started.

## User stories: 
- As a user, I should be able to see the landing page of the app.
- As a user, I should be able to click the "Start quiz" button to start the quiz.
- As a user, I should be able to see 10 questions, each question includes 4 answers, one of them is correct.
- As a user, I should be able to click on one of the answers to mark it as selected.
- As a user, I should be able to click the "Check answers" button to see the result.
- As a user, I should be able to result statement at the bottom of the quiz page.
- As a user, I should be able to see the "Play again" button next to the result statement.
- As a user, I should be able to press the "Play again" button.
- As a user, I should be able to start a new quiz when I press the "Play again" button.