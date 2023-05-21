import logo from './logo.svg';
import './App.css';
import {  Route, Routes, useNavigate } from 'react-router-dom'
import Login from './views/Login';
import Orders from './views/Orders';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
   let {user,loggedIn}= useSelector(state=> state.auth)
   useEffect(()=>{
    if(loggedIn){
      navigate('/orders')
    } else navigate('/')
   },[loggedIn])
  return (
    <div className="App">
      <Routes>
        <Route element={<Login/>} path='/'/>
        <Route element={<Orders/>} path='/orders'/>
      </Routes>
    </div>
  );
}

export default App;
