import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
])
// we use react router as it gives us a way to manage the state of the application and the url
// we can transfer data between pages and navigate between pages
// via hooks like useNavigate and useLocation and useParams
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
