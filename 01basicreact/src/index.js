//React is our core library which takes all the references
import React from 'react';
// React-DOM implementation of React for Websites
import ReactDOM from 'react-dom/client';

//Impoted the App.js
import App from './App';

//root variable created
//React can creates its own Virtual DOM inside DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
//jsx
root.render(
  //Property of React(StrictMode) - helps in development
  // jsx helps to create App tag (Custom tags)
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
