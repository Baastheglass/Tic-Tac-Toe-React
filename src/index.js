import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './App.css';
import App from './App';
import Message from './components/message'
import ErrorPage from './components/errorPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const messageStyle = 
{
  marginTop: "25%"
}

const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
  errorElement: <ErrorPage/>
},
{
  path: "/win",
  element: <Message style = {messageStyle} message = "You have won!"/>,
  errorElement: <ErrorPage/>
},
{
  path: "/lose",
  element: <Message style = {messageStyle} message = "Borben has won ;--;"/>,
  errorElement: <ErrorPage/>
},
{
  path: "/boardFull",
  element: <Message style = {messageStyle} message = "The board is full"/>,
  errorElement: <ErrorPage/>
}
]);

root.render(
  <>
    <RouterProvider router = {router}/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
