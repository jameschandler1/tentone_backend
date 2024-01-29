import React, { useState, useEffect } from'react';

function App() {
 const [apiData, setApiData] = useState('');
 useEffect(() => {
  fetch('/')
  .then((response) => response.text())
  .then((data) => setApiData(data))
  .then((error) => console.log(error));
}, []);
 return (
    <div>
      <h1> {apiData} </h1>
    </div>
  );
 };
export default App;
