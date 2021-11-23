import React from 'react';
import ReactDOM from 'react-dom';
// Import custom css file with styles
import './custom.css';
import reportWebVitals from './reportWebVitals';
// Import Figure component from React Bootstrap
import Figure from 'react-bootstrap/Figure';

/* References: This site helped me iterate through the "users" object with the Object.keys() function
 to display its contents:
 https://www.pluralsight.com/guides/how-to-display-key-and-value-pairs-from-json-in-reactjs

This site helped me get my image source to work (I ended up putting the image folder in "public/assets" as it suggests):
https://stackoverflow.com/questions/34582405/react-wont-load-local-images

*/

const user = {"name": "Evan", "surname": "Malherbe", "date_of_birth": "7 Jan 1983", "country": "South Africa", "email": 
"evanmalherbe@gmail.com", "telephone": "0854853884", "company": "bestDev", "profile_picture": "/assets/images/profileImg.jpg",
"interests": ["cycling", "coding", "fitness", "reading"]};

// Function to loop through "user" object and add each key/value pair to a list item
function displayInfo() {
  return (
        // Loop through "user" object
        Object.keys(user).map((key, value) => (

          // Add each key/value pair to a list item 
          <li key={value}><b>{key}</b>:{" " + user[key]} </li>
          
        ) ) )
  }

// I learned how to use a React "Figure" here: https://react-bootstrap.netlify.app/components/figures/
// Used Flexbox to position info and image neatly

const element = (
  <div className="container">
      <div className="info">
        <h1>Learning React</h1>
        <h2>User info: </h2>
        <ul>{displayInfo()}</ul>
      </div>
      <div className="image">
        <Figure>
          <Figure.Image
            width={250}
            height={350}
            alt="Profile pic of Evan Malherbe"
            src={user.profile_picture}
            />
          <Figure.Caption>
            Photo of Evan Malherbe
          </Figure.Caption>
        </Figure>
      </div>
  </div>
  
);

// Render element created above to DOM
ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
