import React from "react";
import "../Components/module.css";
import { Link,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { CreateJob } from "../store/CreateJobSlice";
import { getUserIdFromLocalStorage,getTokenFromLocalStorage } from "../store/authUtils";


function JobPostForm() {
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [email,setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const selector = useSelector((state) => state.CreateJobSlice);
  const dispatch = useDispatch();
  console.log(selector, "Create Job");

  const handleSubmit = ()=>{
   const userID = getUserIdFromLocalStorage();
   const token = getTokenFromLocalStorage();
    const obj = {
      data:{
        title,
        organization,
        location,
        type,
        salary,
        experience,
        description,
        email,
        userID
      },
      token
    }
    // console.log(obj);
    setIsLoading(true);
  dispatch(CreateJob(obj));
  if (selector.status === "idle") {
    setIsLoading(false);
    alert(selector.data.message);
    navigate("/dashboard");

  }
  }

 


  return (
    <>
      <form className=" p-5" id="jobForm">
        <h3>Job Informations</h3>
        <div className="col-lg-12 col-md-10 col-sm-8 mb-3">
          <input
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Job Title"
          />
        </div>
        <div
          className="col-lg-12 col-md-10 col-sm-8 mb-3 "
          style={{ display: "flex" }}
        >
          <input
          value={organization}
          onChange={(e)=>setOrganization(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Organization"
          />
          <input
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Job Location"
          />
        </div>
        <div
          className="col-lg-12 col-md-10 col-sm-8 mb-3"
          style={{ display: "flex" }}
        >
          <select
            value={type}
            onChange={(e)=>setType(e.target.value)}
            className="form-select pt-3"
            aria-label="Default select example"
            placeholder="Job types"
          >
            <option defaultValue>Job types</option>
            <option value="Remote">Remote</option>
            <option value="Part Time">Part Time</option>
            <option value="Full Time">Full Time</option>
          </select>
          </div>
        <div
          className=" col-lg-12 col-md-10 col-sm-8 mb-3"
          style={{ display: "flex" }}
        >
          <input
            value={salary}
            onChange={(e)=>setSalary(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Salary"
          />
          <input
            value={experience}
            onChange={(e)=>setExperience(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Experience"
          />
        </div>
        <div className=" col-lg-12 col-md-10 col-sm-8 mb-3">
          <textarea
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="job Description"
          ></textarea>
        </div>
        <div className=" col-lg-12 col-md-10 col-sm-8 mb-3">
        <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Application Email"
          />
        </div>
      </form>
      {isLoading ? (
               
               <div className='text-center'>
                 <div
                   className='spinner-border text-primary'
                   role='status'
                 >
                   <span className='visually-hidden'>Loading...</span>
                 </div>
               </div>
             ) : (
               
              <button onClick={handleSubmit} className="formBtn">Post job</button>
             )}
      
    </>
  );
}

export default JobPostForm;
