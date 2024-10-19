import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Countries from "./Pages/Countries";
import Contact from "./Pages/Contact";
import AppLayout from './components/Layout/AppLayout'
import ErrorPage from "./Pages/ErrorPage";
import CountryDetails from "./components/Layout/CountryDetails";
   

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <AppLayout />,
    errorElement:  <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'country',
        element: <Countries />,

      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: "country/:id",
        element: <CountryDetails/>
      },


    ]
  }
  

])
function App() {
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
