import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Posts, {loader as postsLoader} from './routes/Posts.jsx'
import './index.css'
import NewPost, {action as newPostAction}from './routes/NewPost.jsx'
import Root from './routes/Root.jsx'
import EditPost, {loader as editPostLoader} from './routes/EditPost.jsx'

const router = createBrowserRouter([
  {
    path:'/', 
    element: <Root />, 
    children: [
      {
    path:'/', 
    element: <Posts />, 
    loader: postsLoader,
    children: [
      {
        path: '/create-post', 
        element: <NewPost/>, 
        action: newPostAction },
      {
        path: ':postId', 
        element: <EditPost/>,
        loader: editPostLoader
        },
  ]},
  ]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
