import './App.css';
import LayoutDefault from './layouts/LayoutDefault';
import Home from './components/Home/Home.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Crud from './components/Home/Crud.jsx';
import Static from './components/Static/index.jsx';
import Login from './components/clients/Login/index.jsx';
import SignUp from './components/clients/Signup/index.jsx';
const routerLogin = createBrowserRouter(
  createRoutesFromElements(
   
      <Route path='/' element={<LayoutDefault/>}>
        <Route path='/login' element={<Login/>}/>
        <Route index element={<Home/>} />
        <Route path='/crud' element={<Crud/>}/>
        <Route path='/static' element={<Static/>}/>
        <Route path='/delete' element={<Home/>}/>
      </Route>
    
     
  )
)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
    <Route index element={<SignUp/>}/>
    <Route path='/signup' element={<Login/>}/>
    </Route>

  )
)
function App() {
  return (
    <>
    
      <RouterProvider router={true?router:routerLogin}/>
    </>
  );
}

export default App;
