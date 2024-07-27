import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Crud from './Crud';
import App from './App';
import Error404 from './axios/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <h1>Api fetching</h1> */}
    {/* <Crud></Crud> */}
    <App></App>
  </>
);
