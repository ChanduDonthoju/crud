import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate,useParams } from "react-router-dom";

function UpdateUser(){


    let [val,setVal]=useState({name:"",email:""})

    let change=(e)=>{
        
        setVal({...val,[e.target.name]:e.target.value})
    }
    console.log(val);

   
    let {id}=useParams()
    console.log(id);
    useEffect(() => {
        axios.get("http://localhost:2020/details/"+id)
          .then((response) => {
            setVal(response.data);  
          })
      },[]);

      let navigate=useNavigate()
      let updateData=(e)=>{
          e.preventDefault()
          axios.put("http://localhost:2020/details/"+id,val).
          then(()=>{
              navigate("/")
          })
      }
  

  return (
    <div className="update-user-container">
      <h1 className="update-user-title">Update User</h1>
      <div className="update-user-form-container">
        <form onSubmit={updateData}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={val.name}
            onChange={change}
            className="update-user-input-field"
          />
          <br /><br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={val.email}
            onChange={change}
            className="update-user-input-field"
          />
          <br /><br />
          <button className="update-user-button" type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser
