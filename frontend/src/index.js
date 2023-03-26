import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

//import InternshipPage from './routes/InternshipPage'
// import BlogPage from './routes/BlogPage'
import SignInPage from './routes/SignInPage'

import LogInPage from './routes/LogInPage'

// import AboutUs from './components/AboutUS'
 import ContactPage from './routes/ContactPage'
 import ChatScreenPage from './routes/ChatScreenPage'

// import  InternFormPage from './routes/InternFormPage'
// import  CustomerReviewPage from './routes/CustomerReviewPage'
// import  AccountPage from './routes/AccountPage'

// import  DoctorPage from './routes/DoctorPage'



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      {/* <Route path='/internship' element={<InternshipPage />} />
      <Route path='/blog' element={<BlogPage />} />
     
      <Route path={`#AboutUs`} element={<AboutUs />} />
      <Route path='/customer' element={<CustomerReviewPage />} />
      <Route path='/form' element={<InternFormPage />} />
      <Route path='/account' element={<AccountPage />} />
 
      <Route path='/doctors' element={<DoctorPage />} /> */}

<Route path='/contact' element={<ContactPage />} />

<Route path='/chat' element={<ChatScreenPage />} />
      
<Route path='/sigin' element={<SignInPage />} />
   
<Route path='/login' element={<LogInPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
