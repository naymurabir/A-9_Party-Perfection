import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                loader: () => fetch('/services.json'),
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            }
        ]
    }
])

export default router