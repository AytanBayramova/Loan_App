import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Login,  UserList, WorkList,LoanCalculator, UserInfo, Guarantor,GuarantorList,Work,  Summary } from './Pages';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';
import {useState, useEffect} from 'react'
const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);

    },2000);
  }, []);
  return (
  <div>
      {loading ? (
      <div className='center'>
      <div className='ring'></div>
        <span className='loading'>Loading...</span>
     </div> 
    ):(
    <BrowserRouter>
  <Navbar/>
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/userlist' element={<UserList/>}/>
        <Route path='/UserInfo' element={<UserInfo/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/worklist' element={<WorkList/>}/>
        <Route path='/LoanCalculator' element={<LoanCalculator/>}/>
        <Route path='/Guarantor' element={<Guarantor/>}/>
        <Route path='/GuarantorList' element={<GuarantorList/>}/>
        <Route path='/summary' element={<Summary/>}/>
    </Routes>

    <Footer/>
    
    </BrowserRouter>
        )}
  </div>
  )
}

export default App