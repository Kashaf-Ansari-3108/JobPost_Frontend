import React, { useState, useEffect } from "react";
import "../Components/module.css";
import { useSelector, useDispatch } from "react-redux";
import { getJobs } from "../store/getJobsSlice";
import { Link } from "react-router-dom";
import { getUser } from "../store/getUserSlice";
import {
  getUserIdFromLocalStorage,
  getTokenFromLocalStorage,
} from "../store/authUtils";

const AllJobPosts = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const selector = useSelector((state) => state.getjobsSlice);
  const selectorU = useSelector((state) => state.getUserSlice);
  // console.log(selectorU, "User");
  const dispatch = useDispatch();
  // console.log(selector, "All Jobs");
  useEffect(() => {
    dispatch(getJobs());
    if (selector.status === "idle") {
      setJobs(selector.data.data);
      setIsLoading(false);
    }
  }, [selector]);
  useEffect(() => {
    const uId = getUserIdFromLocalStorage();
    const token = getTokenFromLocalStorage();
    const obj ={
      uId,
      token
    }
    dispatch(getUser(obj));
   
  }, [selectorU]);
  const handleApplyNow = (applyEmail,subject) => {
    const userEmail = selectorU.data.data.email;
    // console.log(applyEmail,"apply");
    // console.log(userEmail,"User");

  const mailtoLink = `mailto:${applyEmail}?subject=${subject}&body=From:${userEmail}`;
  window.open(mailtoLink, '_blank');
  };

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#f9f9f9" }}>
        {isLoading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row col-12">
            {jobs?.map((val) => {
              return (
                <div key={val._id} className="col-lg-3 col-md-4 col-sm-12 p-3 m-5 box">
                  <h4>{val.title}</h4>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className="box_p">{val.organization}</p>
                  </div>
                  <p>{val.description}</p>
                  <hr />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <p
                      className="box_p"
                      style={{
                        borderRadius: "10px",
                        width: "auto",
                        backgroundColor: "grey",
                        padding: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      {val.location}
                    </p>
                    <p
                      className="box_p"
                      style={{
                        borderRadius: "10px",
                        width: "auto",
                        backgroundColor: "grey",
                        padding: "5px",
                      }}
                    >
                      {val.type}
                    </p>
                    <p
                      className="box_p"
                      style={{
                        borderRadius: "10px",
                        width: "auto",
                        backgroundColor: "grey",
                        padding: "5px",
                      }}
                    >
                      {val.salary}
                    </p>
                    <p
                      className="box_p"
                      style={{
                        borderRadius: "10px",
                        width: "auto",
                        backgroundColor: "grey",
                        padding: "5px",
                      }}
                    >
                      {val.experience}
                    </p>
                  </div>

                  <button onClick={() => handleApplyNow(val.email,val.title)}>
                    Apply Now
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default AllJobPosts;
