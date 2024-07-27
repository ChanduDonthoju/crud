import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Crud() {
  let [api, apiSet] = useState([]);
  let [head, setHead] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2020/details")
      .then((response) => {
        apiSet(response.data);
        
        setHead(Object.keys(response.data[0]));
        
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      <table border="1" style={{borderCollapse:"collapse"}}>
        <thead>
          <tr>
            {head.map((val, index) => (
              <th key={index}>{val}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {api.map((res) => (
            <tr key={res.id}>
              <td>{res.id}</td>
              <td>{res.name}</td>
              <td>{res.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Crud;
