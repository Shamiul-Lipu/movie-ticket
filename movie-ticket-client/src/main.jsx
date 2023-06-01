import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home/Home";
import MovieDetails from "./Pages/Movie/Details/MovieDetails";
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: '/', element: <Home></Home> },
      {
        path: '/details/:id',
        element: <MovieDetails></MovieDetails>,
        loader: ({ params }) => fetch(`https://api.tvmaze.com/search/shows?q=all`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);