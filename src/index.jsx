import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

//root.render(
//    <App />
    // <h1>gfdkjgkfdjkgfdkjgkfd</h1>
//);

root.render(
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </React.StrictMode>
);
