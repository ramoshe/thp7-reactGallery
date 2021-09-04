# FSJS Project 7: React Gallery App
 My seventh project for the Full Stack JavaScript Techdegree program at Treehouse. An app that displays a images from Flickr using navigation buttons or search.
 
## How To Use
 - You can view a live version of this project here: https://g.ramoshe.com/thp7-reactGallery/
 - If you want a local copy of the project:
    1. Download the files: https://github.com/ramoshe/thp7-reactGallery/archive/refs/heads/main.zip
    2. Follow the instructions below to add your API key
    3. In the console, navigate to the `gallery` folder and run `npm install` and then `npm start`
    4. In your browser go to http://localhost:3000

### API Key Instructions
In order to load the photos from flickr you must include a `config.js` file inside the `src` folder that contains the following code:
```
const apiKey = '1234567890';
export default apiKey;
```
Replace the numbers with your own API key. If you don't already have an API key, [you can get one here](https://www.flickr.com/services/apps/create/apply/).

## Project Description
*From Treehouse*

For this project, you'll use the very popular and in-demand React library to create an image gallery app. With the help of this powerful "MVC" (Model, View, Controller) library, the app will be built in the style of modern single-page applications to keep it fast, modular, and in sync with current web development trends.

You'll learn about some of the best practices of working with React, like using JSX to write markup-like syntax directly in your JS files and managing state in a container component that passes data down to reusable stateless components. Additionally, you'll get practice working with React supportive tools like the Create React App and React Router modules.

Using the powerful Create React App tool, you'll set up the initial project.

Then you will:
 - Use JavaScript and JSX to build out the gallery components in a modular fashion.
 - Use React Router to set up routes for three default topic pages and a search page.
 - Use the Fetch API or a tool like Axios to fetch data from the Flickr API and use it to display images in your app.
 - Add logic to handle the search and various requirements of the project.
 - Add to the supplied CSS to personalize the project.
 - React has a bit of a learning curve and can feel difficult to work with at first, but with hard work, time and practice, it can be mastered by anyone.

After building this project, you'll be able to start using React in all of your projects to demonstrate your skills with the powerful library to potential employers, which will make you a hot commodity in today's web development world. So really take your time, do a great job, and give this one your all.
