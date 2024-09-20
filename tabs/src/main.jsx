import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Xyz from './Components/Xyz.jsx'
import Ijk from './Components/Ijk.jsx'
import Abc from './Components/Abc.jsx'
const router=createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Xyz/>}/>
      <Route path='ijk' element={<Ijk/>}/>
      <Route path='abc' element={<Abc/>}/>
    </Route>
   )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
