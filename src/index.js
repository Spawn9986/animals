//import files
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//access client root node on the DOM
const el = document.getElementById('root')

//create our root
const root = ReactDOM.createRoot(el)

// render App component to the created root dispalying it in the browser
root.render(<App />);