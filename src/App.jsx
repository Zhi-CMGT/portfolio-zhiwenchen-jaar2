import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import {ProjectsPage} from "./pages/ProjectsPage.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/projects",
                element: <ProjectsPage/>
            },
        ]
    }
])

function App() {
    return <RouterProvider router={router}/>
}

export default App
