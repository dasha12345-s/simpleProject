import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Posts from './routes/Posts.jsx'
import './index.css'
import NewPost from './routes/NewPost.jsx'
import Root from './routes/Root.jsx'

const router = createBrowserRouter([
  {path:'/', element: <Root />, children: [

  {path:'/', element: <Posts />, children: [
    {path: '/create-post', element: <NewPost/>}
  ]},
  ]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
