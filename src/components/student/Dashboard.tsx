import React from 'react';
import { Link } from 'react-router-dom';
import SecureFooter from '../shared/SecureFooter';
import SecureHeader from '../shared/SecureHeader';
import SecureLeftPanel from '../shared/SecureLeftpanel';

const Dashboard = () => {
  return (
    <>
    <SecureHeader/>
     <div className='row '>
      <SecureLeftPanel/>
     <div className='col-6 bg-info bg-opacity-50'>
     <h3>ExamLog</h3>
     
       </div>
       <div className='col-6 bg-info bg-opacity-50'>
       <div className='text-right d-flex justify-content-end'></div>
       </div>
      </div>
      <div className='row '>
      <div className='col-2 bg-info bg-opacity-50'>
      <Link to='/qslist' className='btn btn-primary'>Question CURD</Link>
      <Link to='/' className='btn btn-primary'>Subject CURD</Link>
      
      </div>
      <div className='col-10 bg-info bg-opacity-10'>






     </div>
     </div>
      <SecureFooter />
    </>
  )
}

export default Dashboard