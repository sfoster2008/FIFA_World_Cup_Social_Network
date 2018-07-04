# FIFA WORLD CUP SOCIAL NETWORK using MERN Stack

A simple social media application with users, posts, likes and comments - developed using React, Node, Express and MongoDB. 
The views needed for the MERN Social application will be developed by extending and modifying the existing React components in the MERN skeleton application.

* [MERN Skeleton](https://github.com/shamahoque/mern-skeleton)

We will also add new custom components to compose views, including a Newsfeed view where the user can create a new post and also browse a list of all the posts from people they follow on MERN Social. The following component tree shows all the custom React components that
make up the MERN Social frontend and also exposes the composition structure we will use to build out the views.

<img src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/36500408_10155422016690896_8356809423645048832_o.jpg?_nc_cat=0&oh=21c7fac026a22de09c4c6c6d1056e967&oe=5BE032A4" align="center" width="100%" alt="Home">
<img src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/36405919_10155419008040896_5792739279650160640_o.jpg?_nc_cat=0&oh=c45cb97ead9246d3603e8108d82c7d0f&oe=5BEBDB9F" align="center" width="100%" alt="login page">
<img src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/36388712_10155419008005896_1750411928619974656_o.jpg?_nc_cat=0&oh=bcc1ea7840c678cc7453958c13b4ae4e&oe=5BE1A476" align="center" width="100%" alt="newsfeed">

## React Compnonent View
<img src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/36436123_10155419009510896_5938018038791012352_n.jpg?_nc_cat=0&oh=081a7b7b4393a0e18480bea94fe29646&oe=5BA33F21" align="center" width="100%" alt="Views">

## RESTful Application architecture:

* requires that a client make a request to the server in order to retrieve or modify data on the server.
* There are 4 basic HTTP verbs we use in requests to interact with resources in a REST system: GET, POST, PUT, DELETE
Models contains CRUD functions ( CREATE, READ, UPDATE, DELETE) corresponds to the HTTP methods for persistent storage in relational databases.

## MVC software architecture:

* MODEL is the application's dynamical data structure, independent of the user interface. It directly manages the data, logic and rules of the application. Post.Model and User.Model was used.

* VIEWS is the React to add an interactive user interface to the basic user and auth features implemented for the backend. In addition, to enable client-side routing we will use React Router, and to enhance the user experience with a sleek look and feel we will use Material-UI.

* CONTROLLER for authorization, posts, and user profiles are received by user input and makes calls to model objects and the view to perform appropriate actions.

## Security - JSON web tokens – client-side or server-side storage
Auth-related security implementation is simplified with JSON Web Tokens.  With the JWT authentication mechanism, the client side becomes responsible for maintaining user state. Once the user signs in, the token sent by the server is stored and maintained by the client-side code on browser storage, such as sessionStorage. Hence, it is also up to the client-side code to invalidate the token by removing it when a user signs out or needs to be signed out. This mechanism works out well for most applications that need minimal authentication to protect access to resources. However, for instances where it may be necessary to track user sign-ins, sign-outs, and to let the server know that a specific token is no longer valid for sign-in, just the client-side handling of the tokens is not enough.

## How JWT works
When a user successfully signs in using their credentials, the server side generates a JWT signed with a secret key and a unique user detail. Then, this token is returned to the requesting client to be saved locally either in localStorage, sessionStorage, or a cookie in the browser, essentially handing over the responsibility of maintaining user state to the client side:

<img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/36686749_10155425595980896_8900476996836917248_n.jpg?_nc_cat=0&oh=ea147b7824cd66d8c3af85cf7e2fa926&oe=5BA62C64" align="center" margin-left="auto" margin-right="auto" width="100%" alt="JWT">

For HTTP requests made following a successful sign-in, specially requests for API endpoints that are protected and have restricted access, the client side has to attach this token to the request. 

This token will then be required for verification when a user tries to view any user profiles, update their account details, or delete their user account.  Implementing the user model to store and validate user data, then integrating it with APIs to perform CRUD operations based on auth with JWT, will produce a functioning standalone backend. 

## Securing password storage
While storing user credentials for authentication in the User collection, we made sure that the original password string provided by the user is never stored directly in the database. Instead we generated a hash of the password along with a salt value using the crypto module in Node.

In user.model.js from our applications, we defined the following functions to generate the hashed password and salt value.

With this implementation, every time a user enters a password to sign in, a hash is generated with the salt. If the generated hash matches the stored hash, then the password is correct, otherwise the password is wrong. So in order to check whether a password is correct, the salt is required, and hence it is stored with the user details in the database along with the hash.

This is standard practice for securing passwords stored for user authentication, but there
are other advanced approaches that may be explored if a specific application's security
requirements demand it. Some options that can be considered include multi-iteration hashing approaches, other secure hashing algorithms, limiting login attempts per user account, and multi-level authentication with additional steps such as answering security questions or entering security codes.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

1. Node (8.11.1)
2. NPM (5.8.0)
3. MongoDB (3.6.3)

### Installing

1. Make sure MongoDB is running on your system 
2. Clone this repository
3. Open command line in the cloned folder,
   - To install dependencies, run ```  npm install  ```
   - To run the application for development, run ```  npm run development  ```
4. Open [localhost:3000](http://localhost:3000/) in the browser

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [MERN](http://mern.io/) - Combination of Javascript technologies used to develop fullstack web applications
* [npm](https://www.npmjs.com/) - Package manager for JavaScript

  #### Front-end
* [React](https://reactjs.org/) -  a declarative and component-based JavaScript library for building user interfaces.
* [react-dom](https://www.npmjs.com/package/react-dom) - package serves as the entry point of the DOM-related rendering paths.
* [Axios](https://github.com/mzabriskie/axios) - Promise based HTTP client for the browser and node.js
* [Material - UI ](https://material-ui.com/) - React components that implement Google's Material Design.
* [Babel](https://babeljs.io/) - JavaScript compiler
* [Webpack](https://webpack.js.org/) - Module bundler for modern JavaScript applications

  #### Back-end
* [Node.js](https://nodemon.io/) -  JavaScript run-time environment that executes JavaScript code server-side
* [Nodemon](https://nodemon.io/) - Auto-refresh the server on code change
* [express](https://nodemon.io/) -   Web application framework for Node.js
* [JWT](https://jwt.io/) - Allows you to decode, verify and generate JSON Web Tokens.
* [Mongoose](http://mongoosejs.com/) - Elegant mongodb object modeling for node.js
* [MongoDB](http://mongoosejs.com/) - Document-oriented database that stores data in flexible, JSON-like documents.

## Authors

* **Christopher Tran** - *Initial work* - [Co-Fullstack Developer](https://github.com/PsychoChris89)
* **Steve Foster** - *Initial work* - [Co-Fullstack Developer](#)


## Acknowledgments

* [MERN Skeleton](https://github.com/shamahoque)

## Get the book
#### [Full-Stack React Projects](https://www.packtpub.com/web-development/full-stack-react-projects)
*Unleash the power of MERN stack by building diverse web applications using React, Node.js, Express, and MongoDB*

<a href="https://www.packtpub.com/web-development/full-stack-react-projects"><img src="https://s3.amazonaws.com/mernbook/git+/B09550_MockupSmall.png" align="center" width="400" alt="Full-Stack React Projects"></a>



