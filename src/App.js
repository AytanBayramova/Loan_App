import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Login,  UserList, WorkList,LoanCalculator,LoanResultsTable, Guarantor,GuarantorList,Work,  Summary } from './Pages';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
  <div>
    <BrowserRouter>
  <Navbar/>
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/userlist' element={<UserList/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/worklist' element={<WorkList/>}/>
        <Route path='/LoanCalculator' element={<LoanCalculator/>}/>
        <Route path='/LoanResultsTable' element={<LoanResultsTable/>}/>
        <Route path='/Guarantor' element={<Guarantor/>}/>
        <Route path='/GuarantorList' element={<GuarantorList/>}/>
        <Route path='/summary' element={<Summary/>}/>
    </Routes>

    <Footer/>
    
    </BrowserRouter>
  </div>
  )
}

export default App