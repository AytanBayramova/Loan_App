import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login,  UserList, Work, Currency, Zamin, Pay, Summary } from './Pages';
import Navbar from './Components/Navbar';
const App = () => {
  return (
  <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/userlist' element={<UserList/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/currency' element={<Currency/>}/>
        <Route path='/zamin' element={<Zamin/>}/>
        <Route path='/pay' element={<Pay/>}/>
        <Route path='/summary' element={<Summary/>}/>
    </Routes>
    
    </BrowserRouter>
  </div>
  )
}

export default App