
import './style.css';
import Navbar from './Navbar'
import Body from './Body'
import axios from 'axios'
import {X_RapidAPI_Host, X_RapidAPI_Key} from './Utilities/constants'
import {useEffect} from 'react';

function App() {

  


  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    headers: {
      'X-RapidAPI-Key': X_RapidAPI_Key,
      'X-RapidAPI-Host': X_RapidAPI_Host
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });



  return (
    <div className='container'>
      <div className='head'>
        <Navbar />
      </div>
      <div className='body'>
        <Body />
      </div>

    </div>
  );
}

export default App;
