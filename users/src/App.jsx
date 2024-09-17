import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUp from "../src/REGISTER/SignUp"
import SignIn from "../src/SIGNIN/SignIn"
function App() {
const router= createBrowserRouter([
  {
    path: "/",
    element: <SignUp></SignUp>
  }, {
path: "/signIn",
element: <SignIn></SignIn>
  }
])
  return (
    <>

     <RouterProvider router= {router} />
    </>
  )
}

export default App
