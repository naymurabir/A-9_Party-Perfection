import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "../Pages/PrivateRoutes/PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch('/services.json'),
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <PrivateRoutes> <Contact></Contact> </PrivateRoutes>
            },
            {
                path: '/blog',
                element: <PrivateRoutes> <Blog></Blog> </PrivateRoutes>
            },
            {
                path: '/details/:id',
                loader: () => fetch('/services.json'),
                element: <PrivateRoutes> <ServicesDetails></ServicesDetails> </PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router