import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Provider/authProvider';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home_Contents from './components/Home-Contents/Home_Contents';
import AddToys from './components/AddToys/AddToys';
import AllToys from './components/AllToys/AllToys';
import ToysDeatils from './components/ToysDeatils.jsx/ToysDeatils';
import MyToys from './components/MyToys/MyToys';
import UpdateToys from './components/MyToys/UpdateToys';
import PrivateRoutes from './components/Routes/PrivateRoutes';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element:<Home_Contents></Home_Contents>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>

      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: '/addToys',
        element: <PrivateRoutes><AddToys></AddToys></PrivateRoutes>
      },
      {path: '/allToys',
      element: <AllToys></AllToys>,
      loader:()=> fetch('https://toy-universe-server-kappa.vercel.app/toys')

      },
      {
        path: 'toysDeatils/:id',
        element:<PrivateRoutes><ToysDeatils></ToysDeatils></PrivateRoutes>,
        loader: ({params}) => fetch(`https://toy-universe-server-kappa.vercel.app/toys/${params.id}`)
      },
      {
        path:'/myToys',
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
      

      },
      {
        path: '/updateToys/:id',
        element: <PrivateRoutes><UpdateToys></UpdateToys></PrivateRoutes>,
        loader: ({params}) => fetch(`https://toy-universe-server-kappa.vercel.app/toys/${params.id}`)
      }
    ]
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </AuthProvider>
)
