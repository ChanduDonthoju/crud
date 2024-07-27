import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function AddUser(){


    let [val,setVal]=useState({name:"",email:""})

    let change=(e)=>{
        
        setVal({...val,[e.target.name]:e.target.value})
    }
    console.log(val);

    let navigate=useNavigate()
    let sendData=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:2020/details",val).
        then(()=>{
            navigate("/")
        })
    }

 return (
    <div className="add-user-container">
      <h1 className="title">Add User</h1>
      <div id="add-user-div" className="form-container">
             <form onSubmit={sendData}>
                 
                   <input
            autoFocus
            type="text"
            placeholder="Name"
            name="name" 
            onChange={change}
            className="input-field"
          />
          <input
           
            type="email"
            placeholder="Email"
            name="email"
            onChange={change}
            className="input-field"
          />
        
        
          <br /><br />
          <button className="add-user-button" type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddUser
