import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './assets/Components/Home/Home.jsx';
import About from './assets/Components/About/About.jsx';
import Contact from './assets/Components/Contact/Contact.jsx';
import Users from './assets/Components/Users/Users.jsx';
import UserDetails from './assets/Components/UserDetails/UserDetails.jsx';
import Posts from './assets/Components/Posts/Posts.jsx';
import PostDetails from './assets/Components/PostsDetails/PostDetails.jsx';
import GraphChart from './assets/Components/GraphChart/GraphChart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [{
      path: "/about",
      element: <About></About>,
    },
    {
      path: "/contact",
      element: <Contact></Contact>,
    },
    {
      path: "/users",
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
      element: <Users></Users>,
    },
    {
      path: "/users/:id",
      loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      element: <UserDetails></UserDetails>,
    },
    {
      path: "/posts",
      loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
      element: <Posts></Posts>,
    },
    {
      path: "/post/:id",
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
      element:<PostDetails></PostDetails>,
    },
    {
      path: "/graph",
      element: <GraphChart></GraphChart>
    }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
