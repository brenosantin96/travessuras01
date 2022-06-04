import { useRoutes } from "react-router";
import { Home } from '../pages/Home'

export const RouteList = () => {

    return useRoutes([
        { path: '/', element: <Home /> }
    ])

}