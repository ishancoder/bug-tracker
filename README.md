# Bug Tracker
This repository conatins the code for a minimal bug tracker built as a challenge from CauseCode.

First of all thanks CauseCode for considering me and giving me this challenge. I chose to build a BugTracker application from the given list and This is what I came up with.
Don't expect it to be a highly featurefull BugTracker it's just a minimal one which gets the job done. However the UI is kind of pretty.

**I'm a big fan of custom CSS. So this project is done using only CSS3 and no other frameworks like BootStrap, Foundation etc. is used**

## Process that I took to create this.
1. First I chose to split up the project in Back End and Front End part and chose Node, Express, MongoDB(with Mongoose) as my Back End stack.
2. I chose React to develop the Front End.
3. I started by building all the API's required for the project and then moved to the front end.
4. Since React needs a lot of tooling to be set up. I used ```create-react-app``` to make my life a little easier.
5. But since my server is running on port 3000. I have to run the fron end development server that comes with ```create-react-app``` on port 3001. I've added an ```access-control-allow-origin``` header to make AJAX request to server. (JUST FOR DEVELOPMENT PURPOSE ONLY)
6. After developing the Front End. I used ```yarn build``` (```react-scripts build```) to build the front end. And then served it using my express server.

## Some Improvements that can be done.
1. Showing error messages to the user when something that he is doing is invalid for our Schema. Actually I'm validating everything in the backend but not showing any Error to user.
2. Can add search feature for the bugs and repository.

## How to run on your machine
**Prerequisites**:
- You should have MongoDB, Node and npm installed on your PC.
- You should have MongoDB server listening on port ```27017```.

**Let's run it**:
- ```git clone``` the repository or download the ```.zip```.
- ```cd``` into the repository.
- Run ```npm install```.
- Wait... Get a Coffee.
- Run ```npm run server```.
- Open up your favourite Browser and visit (http://localhost:3000).
