import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import WelcomePage from "./components/WelcomPage";
import Products from "./routes/products";
import Profile from "./routes/profile";

const router = createBrowserRouter([
  {
    path: "/test-app",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <WelcomePage />,
      },
      {
        path: "/test-app/products",
        element: <Products />,
      },
      {
        path: "user",
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
