import { useRoutes } from "react-router-dom"
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import MyVitrin from "./pages/MyVitrin"
import UserPosts from "./components/MyVitrin/posts/UserPosts/UserPosts"
import UserBookmarks from "./components/MyVitrin/posts/UserBookmarks/UserBookmarks"
import UserNotes from "./components/MyVitrin/posts/UserNotes/UserNotes"
import UserRecentSeens from "./components/MyVitrin/posts/UserRecentSeens/UserRecentSeens"

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
            path: '/myvitrin',
            element: <MyVitrin />,
            children: [
                {
                    path: 'posts',
                    element: <UserPosts />
                },
                {
                    path: 'bookmarks',
                    element: <UserBookmarks />
                },
                {
                    path: 'notes',
                    element: <UserNotes />
                },
                {
                    path: 'recent-seens',
                    element: <UserRecentSeens />
                }  
            ]
        },
        {
            path: '*',
            element: <div>404 page</div>
        },
    ])
    return routes
}