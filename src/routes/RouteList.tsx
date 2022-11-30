import { useRoutes } from "react-router";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Home } from '../pages/Home'
import { Products } from "../pages/Products";

export const RouteList = () => {

    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '/products', element: <Products /> },
    ])

}