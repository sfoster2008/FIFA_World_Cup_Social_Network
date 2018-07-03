# FIFA WORLD CUP SOCIAL NETWORK webapplication using MERN Stack.

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

RESTful Application architecture requires that a client make a request to the server in order to retrieve or modify data on the server.
There are 4 basic HTTP verbs we use in requests to interact with resources in a REST system: GET, POST, PUT, DELETE
Models contains CRUD functions ( CREATE, READ, UPDATE, DELETE) corresponds to the HTTP methods for persistent storage in relational databases.

MVC software architecture:

* MODEL is the application's dynamical data structure, independent of the user interface. It directly manages the data, logic and rules of the application. Post.Model and User.Model was used.

* VIEWS is the React to add an interactive user interface to the basic user and auth features implemented for the backend. In addition, to enable client-side routing we will use React Router, and to enhance the user experience with a sleek look and feel we will use Material-UI.

* CONTROLLER for authorization, posts, and user profiles are received by user input and makes calls to model objects and the view to perform appropriate actions.

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





### [Live Demo](http://social.mernbook.com/ "MERN Social")

