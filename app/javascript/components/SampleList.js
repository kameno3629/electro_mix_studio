// app/javascript/components/SampleList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SampleItem from './SampleItem';

function SampleList() {
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    axios.get('/samples')
      .then(response => {
        setSamples(response.data);
      })
      .catch(error => {
        console.error("Error fetching samples", error);
      });
  }, []);

  return (
    <div>
      <h2>Samples</h2>
      {samples.map(sample => (
        <SampleItem key={sample.id} {...sample} />
      ))}
    </div>
  );
}

export default SampleList;
