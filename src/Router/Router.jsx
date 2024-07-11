import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
]);