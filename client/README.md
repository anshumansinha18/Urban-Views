# Urban-Views: A movie library web application built with React.js

Note: This project is under development. UI Design for the web application is completed, backend functionalities are being added.
Switch to experimental branch to see progress.

## Description

* The project is named Urban-Views.
* Application provides features like login, signing up user, netflix like animation to scroll through movies list.
* Trailer of movie can be played in the card component itself just by hovering over any movie title.
* Dedicated 'watch page' to watch trailer of movies in separate page.
* The application is built using React (Custom Hooks, Context).
* Extensive use of SASS to design every part of application.
* The movies list will be fetched from MONGODB Database with CRUD option available in the admin section.(Under Development).


## Screenshots


![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/39727166/130365714-04fd8312-3fa9-4a13-b5c4-eacfb6fa8198.gif)

![Screenshot (267)](https://user-images.githubusercontent.com/39727166/130365552-808f191d-62fd-476e-b1e2-044aeec92488.png)

![Screenshot (265)](https://user-images.githubusercontent.com/39727166/130365555-d532a78a-a25a-429c-aad2-ee2f001f78d1.png)

![Screenshot (266)](https://user-images.githubusercontent.com/39727166/130365559-606900fb-3bee-4875-8736-a47ac7569593.png)



## Running the application on your development server


### `git clone git@github.com:anshumansinha18/Urban-Views.git`
Open terminal and run this command to create a clone of this repository.


### `cd client`

cd to client directory.

### `npm install`

Inside the client directory, run this command.
This will install all the dependencies and packages which are required to run this application.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Viewing Login, Signup, Home and Watch page

In App.jsx file(inside src directory), make changes as follows to view various pages:

For Home Page:
```
 const App = () => {
        return <Home />;
      };
```
For login Page

```
const App = () => {
  return <Login />;
};
```
For Register Page: 
``` 
const App = () => {
  return <Register />;
};
```
For Watch Page:

```
const App = () => {
  return <Watches />;
};
```
