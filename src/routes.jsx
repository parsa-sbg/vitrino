import { useRoutes } from "react-router-dom"
import Home from "./pages/Home"
import Posts from "./pages/Posts"

export default function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/posts',
            element: <Posts />
        },
        {
            path: '*',
            element: <div>404 page</div>
        },
    ])
    return routes
}