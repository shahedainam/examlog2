import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SecureFooter from '../shared/SecureFooter';
import SecureHeader from '../shared/SecureHeader';
import SecureLeftPanel from '../shared/SecureLeftpanel';
import axios from 'axios';


const Dashboard = () => {

  const [examList, setexamList] = useState<any[]>([]);

  const callApiQsList = async () => {
    try{
      const url = process.env.REACT_APP_API_URL + 'exams/fetchallexams';

      const response  = await axios.get(url);
      console.log(response);
      setexamList(response.data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    callApiQsList();
  },[])

  const startexam = () =>{}

  return (
    <>
    <SecureHeader/>
     <div className='row '>
      <SecureLeftPanel/>
    
     
       <div className='col-10 bg-info bg-opacity-10'>


       <table className='table table-striped'>
            <thead>
            <tr>
              <th>Sr No</th>
              <th>Questions</th>
              <th>Answer 1</th>
              <th>Answer 2</th>
              <th>Answer 3</th>
              <th>Answer 4</th>
              <th>Answer 5</th>
              <th>Correct Answer</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {
              examList && examList.map((item, index) => (
                <tr>
                  <td>{index}</td>
                  <td>{item.exam_name}</td>
                  <td>{item.subject_id}</td>
                  <td>{item.duration}</td>
                  <td>{item.total_questions}</td>
                 
                  <td>
                    <button onClick={startexam} className='btn btn-primary'>Start Exam</button>

                  </td>
                </tr>
              ))
            }
            </tbody>
          </table>
                
       
    </div>
     </div>
      <SecureFooter />
    </>
  )
}

export default Dashboard