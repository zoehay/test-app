import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import WelcomePage from "./routes/welcome-page";
import Products from "./routes/products";
import Profile from "./routes/profile";

const router = createBrowserRouter([
  {
    path: "/test-app",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/test-app/index.html",
        element: <WelcomePage />,
      },
      {
        path: "/test-app/products",
        element: <Products />,
      },
      {
        path: "/test-app/user",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
