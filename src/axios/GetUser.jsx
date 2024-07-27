import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function GetUser() {
  let [api, apiSet] = useState([]);
  let navi = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:2020/details")
      .then((response) => {
        apiSet(response.data);
         
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  });

  let add = () => {
    navi("/add");
  };

  let remove=(id)=>{

    axios.delete(`http://localhost:2020/details/${id}`)
    // .then(() => {
    //   axios.get("http://localhost:2020/details")
    //     .then((x) => {
    //       apiSet(x.data);
    //     })
      
    // })
  }

  return (
    <div className="container">
      <h1 className="title" style={{ color: "#00aaff" }}>Crud operations...</h1>
                  <button className="btn add-user" onClick={add}>Add+</button>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {api.map((res) => (
            <tr key={res.id} className="table-row">
              <td>{res.id}</td>
              <td>{res.name}</td>
              <td>{res.email}</td>
              <td>
                <Link to={`/update/${res.id}`}>
                  <button className="btn update-button">Update</button>
                </Link>
                <button className="btn del-button" onClick={() => remove(res.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default GetUser;



