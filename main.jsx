import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import '../css/style.css'
import About from './About'
import App from './App'
import Contact from './Contact'
import ErrorPage from './ErrorPage'
import Blog from './Blog'


const site = import.meta.env.BASE_URL


function Layout() {
  return (
      <>
        <Header />
        <div id='page-content'>
          <Outlet />
        </div>
        <Footer />
      </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />
          },
          {
            path: '/about',
            element: <About />
          },
          {
            path: '/Contact',
            element: <Contact />
          },
          {
            path: '/Blog',
            element: <Blog />
          },
    ]
  }
], {
  basename: site
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)