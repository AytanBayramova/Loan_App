import React from 'react'
import UserList from './UserList'
import WorkList from './WorkList'
import LoanCalculator from './LoanCalculator'
import GuarantorList from './GuarantorList'
import { useNavigate } from 'react-router-dom';

export const Summary = () => {
  const navigate = useNavigate();
  return (
    
   <>
   
   <UserList/>
   
   <WorkList/>
   <LoanCalculator/>
   <GuarantorList/>
   <div className="ms-5 gap-2 mt-1">
                        <button onClick={() => navigate("/Summary")}  type="submit" className="btn btn-outline-primary 
                        ">Next</button>
                    </div>
   
   
   </>
  )
}

export default Summary