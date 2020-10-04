# Fullstack Messaging App
A responsive MERN Fullstack messaging application where users can send and receive messages (similar to emails) from each other, as well as display all their messages they have.
The project is implementing a REST API using Express.js that is connected to a remote Mongo Atlas database.

The code is deployed to heroku. Check it out for yourself:
https://morning-lowlands-27081.herokuapp.com/

### Setup
1. Make sure you have Node.js/NPM on your computer
2. Clone the project to your computer and open it
3. Install all the dependencies:
  ```
  1. npm install
  2. npm run client-install
  ```
4. Start the application (both client and server):
  ```
  npm run dev
  ```
5. Enjoy

### The application
Users will be presented with the start page where they can choose to create a message or manage their messages (each action is in its own page - directed by React-router-dom).
* When posting a new message, enter the relevant fields and wait for the message to be sent. If an error occurs it will be shown next to the submit button.
* When managing your messages, type in your sender id. Notice how each character typed displays an updated set of messages - each tap fires a GET request to the server to fetch that current id's messages. Choose to view your messages (separated by 'sent' and 'received' tabs) or choose to delete a message.

### Authentication
One can implement register and login authentication logic for users. Once a user has logged in and makes a request to fetch messages from the server, he should receive only his messages and not other people's. The authentication can be created like so:

Instructions:
1. Create register and login components with individual forms. On submit, they should send requests to the server and if approved, go back to the start page. The user now posses an access token that can be kept in the redux store, session storage object, etc. With that token he can make requests regarding only his messages.
2. Create a User model for the database. A basic model should contain a name, email and password.
3. Create a users endpoint that will handle all the user-related requests. Create api methods that send requests to that endpoint.
4. When saving a user, make sure to hash his password so it won't be visible to everyone (suggested bcrypt and jsonwebtoken).
5. Consider creating a users slice and saga with redux.
6. Make sure to add the authentication process as a middleware before the messages requests.

# Using
0. Node.js
1. React
2. Redux (implemented with slices and sagas)
3. React router dom
4. Axios
5. Express.js
6. Mongoose
