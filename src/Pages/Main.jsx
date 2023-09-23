import React from 'react'
import img from '../assests/digital-finance-and-banking-service-in-futuristic-background-bank-building-with-online-payment-transaction-secure-money-and-financial-innovation-technology-vector.jpg'
import './main.css'
import Typed from 'react-typed';
import { useNavigate } from 'react-router-dom';
const Main = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login'); // Navigate to the '/home' route when the button is clicked
  };
  return (
    <>
    <div className="main">
  <div className="image">
    <img src={img} className='backimg' alt="" />
    <div className="text-overlay">
      <Typed
        className='textEffekti'
        strings={[
          'Order a loan with Buta Bank',
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      ></Typed>
      <h2>Dear customer, Buta Bank Online loan order allows you to get a loan quickly and easily without going to the bank. You can apply for a loan by filling out the application form on the website. By using the online loan ordering service, you will be able to get cash loans that will help you meet your needs in no time.</h2>
      <button onClick={handleButtonClick} className='getLoan'>Get a loan</button>
    </div>
  </div>
</div>

    </>
  )
}

export default Main