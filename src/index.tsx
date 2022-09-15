import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorElement from "./components/Error/Error";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App active="home" />,
        errorElement: <ErrorElement />
    },
    {
        path: "/new",
        element: <App active="newProject" />,
        errorElement: <ErrorElement />
    },
    {
        path: "project/:projectId",
        element: <App active="project" />,
        errorElement: <ErrorElement />
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
