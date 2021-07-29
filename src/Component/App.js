import '../App.css';
import Formulaire from './Formulaire';
import CardBrawler from './CardBrawler';
import React, { useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState('');
  const [data, setData] = useState('');


  // const handleSearch = (e) => {
  //   setUserInput(e.target.value)
  // }

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImU3ZjBhNGYyLTk4ZTUtNGNkNy05OWQzLTM3NTc3ZGJhODE2MSIsImlhdCI6MTYyNzU2NTIwMiwic3ViIjoiZGV2ZWxvcGVyL2IwMjAwNTFiLTljYjYtZWI4MS0yOGE0LTM3MmNmYWM3ZjkyYSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNjIuMzUuMjQ1LjU1Il0sInR5cGUiOiJjbGllbnQifV19.x1E62DWt_VST1OEKP0amBdqWhw_Ndx3Y6Yn9bqDksjTfdzNGFcn6wEwS9mdRtSQ8sIzJCjslzPxsEuX5_G6stw"

  const handleSubmit = () => {
    // fetch("https://api.brawlstars.com/v1/brawlers", {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     Authorization: `Bearer  ${token}`,
    //     // AccessControlAllowOrigin: *


    //   }
    // }).then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //   })
    const playerurl = 'https://api.brawlstars.com/v1/players/';

    const getJSON = async url => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            ContentType: 'application/json',
            Authorization: 'Bearer <yourapitoken>',
          },
        });
        if (!response.ok) { throw new Error(response.statusText); }
        const data = await response.json();
        return data;
      }
      catch (error) {
        return error;
      }
    };
    getJSON(playerurl)
  }

  return (
    <div>
      <div className="App">
        <Formulaire submit={handleSubmit} />
      </div>
      <div>
        <CardBrawler />
      </div>
    </div>
  );
}

export default App;
