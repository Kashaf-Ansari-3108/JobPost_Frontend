import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBagShopping,
  faEdit,
  faTrash,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserIdFromLocalStorage,
  getTokenFromLocalStorage,
} from "../store/authUtils";
import { getUserJob } from "../store/getUserJobSlice";
import { deleteJob } from "../store/deleteJobSlice";
import Modal from "react-modal";
import { editJob } from "../store/editJobSlice";

function DashBoard() {
  const [editId, setEditId] = useState("");
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [email,setEmail] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editLoading, seteditLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.getUserJobSlice);
  const selectorD = useSelector((state) => state.deleteJobSlice);
  const selectorE = useSelector((state) => state.editJobSlice);
  const selectorU = useSelector((state) =>state.getUserSlice);
  // console.log(selector);
  // console.log(selectorD);
  // console.log(selectorE);
  const userID = getUserIdFromLocalStorage();
  const token = getTokenFromLocalStorage();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);
  useEffect(() => {
    const obj = {
      uId: userID,
      token,
    };
    dispatch(getUserJob(obj));
    if (selector.status === "idle") {
      setJobs(selector.data.data);
      setIsLoading(false);
    }
  }, [selector]);
  useEffect(() => {
  setUser(selectorU?.data.data);
 }, [selectorU]);
  const handleDelete = (itemId) => {
    const obj = {
      itemId,
      token,
    };
    setIsLoading(true);
    dispatch(deleteJob(obj));
    if (selectorD.status === "idle") {
      setJobs(selector.data.data);
    }
    setIsLoading(false);
  };
  const handleEdit = (val) => {
    setIsEdit(true);
    setEditId(val._id);
    setTitle(val.title);
    setOrganization(val.organization);
    setLocation(val.location);
    setType(val.type);
    setSalary(val.salary);
    setDescription(val.description);
    setExperience(val.experience);
    setEmail(val.email);
  };
  const handleUpdate = () => {
    const obj = {
      data: {
        title,
        organization,
        location,
        type,
        salary,
        experience,
        description,
        email
      },
      itemId: editId,
      token,
    };
    // seteditLoading(true);
    dispatch(editJob(obj)).then(() => {
      console.log('selectorE.status after editJob dispatch:', selectorE.status);
      if (selectorE.status === "idle") {
        // seteditLoading(false);
        setIsEdit(false);
      }
      console.log('editJob action dispatched');
    });
  };
 const handleLogout = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('uId');
    navigate("/");
  }

  return (
    <>
      <div>
        <div className="row" style={{ height: "100vh" }}>
          <div
            className="col-lg-3 col-md-4 col-sm-2 mt-3 p-3"
            style={{
              marginLeft: "60px",
              backgroundColor: "#fb246a",
              color: "white",
              height: "100%",
              
            }}
          >
            <img src={logo} alt="logo" width="300px" />
            <center>
            <div style={{backgroundColor:'black',
            height:"100px",
            width:"100px",
            borderRadius:"50px",
            alignSelf:'center'
            }}>
               <img style={{width:"100%",height:"100%"}} src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="logo" width="300px" />
               <p>{user?.name}</p>
            </div>
           </center>

            <ul
              style={{ listStyle: "none", marginTop: "20px", padding: "20px" }}
            >
              
              <Link to="/" style={{ textDecorationLine: "none" }}>
                {" "}
                <li
                  style={{ padding: "20px", fontSize: "20px", color: "white" }}
                >
                  <FontAwesomeIcon
                    icon={faHome}
                    color="black"
                    style={{ marginRight: "20px" }}
                  />{" "}
                  Home
                </li>
              </Link>
              <li style={{ padding: "20px", fontSize: "20px" }}>
                <FontAwesomeIcon
                  icon={faBagShopping}
                  color="black"
                  style={{ marginRight: "20px" }}
                />{" "}
                Jobs
              </li>
              
                <li
                  style={{ padding: "20px", fontSize: "20px", color: "white" }}
                >
                  <FontAwesomeIcon
                    icon={faSignOut}
                    color="black"
                    style={{ marginRight: "20px" }}
                    onClick={handleLogout}
                  />
                  LogOut
                </li>
             
            </ul>
          </div>
          <div
            className="col-lg-8 col-md-6 col-sm-4 p-3 mt-3"
            style={{ backgroundColor: "#cdd6eda8" }}
          >
            <div
              style={{
                backgroundColor: "#1d447e",
                color: "white",
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h1>Dashboard</h1>
              
              <Link to="/jobForm">
                {" "}
                <button
                  style={{
                    backgroundColor: "#fb246a",
                    border: "none",
                    color: "white",
                    fontSize: "20px",
                    padding: "10px",
                  }}
                >
                  Create Post
                </button>{" "}
              </Link>
            </div>

            <hr />
            <div
              className="container-fluid"
              style={{ backgroundColor: "#f9f9f9" }}
            >
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
                      <div key={val._id} className="col-lg-4 col-md-6 col-sm-12 p-3 m-5 boxx">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <h4>{val.title}</h4>
                          <ul style={{ listStyle: "none" }}>
                            <li>
                              <FontAwesomeIcon
                                icon={faEdit}
                                color="#fb246a"
                                style={{
                                  paddingLeft: "15px",
                                  fontSize: "20px",
                                }}
                                onClick={() => handleEdit(val)}
                              />
                              <FontAwesomeIcon
                                icon={faTrash}
                                color="#fb246a"
                                style={{
                                  paddingLeft: "20px",
                                  fontSize: "20px",
                                }}
                                onClick={() => handleDelete(val._id)}
                              />
                            </li>
                          </ul>
                        </div>

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
                            // display: "flex",
                            // flexDirection: "row",
                            justifyContent: "space-between",
                            // textAlign: "center",
                          }}
                        >
                          <p
                            className="box_p"
                            style={{
                              borderRadius: "10px",
                              // width: "20%",
                              // backgroundColor: "grey",
                              padding: "5px",
                            }}
                          >
                            Location:{val.location}
                          </p>
                          <p
                            className="box_p"
                            style={{
                              borderRadius: "10px",
                              // width: "20%",
                              // backgroundColor: "grey",
                              padding: "5px",
                            }}
                          >
                            Job:{val.type}
                          </p>
                          <p
                            className="box_p"
                            style={{
                              borderRadius: "10px",
                              // width: "20%",
                              // backgroundColor: "grey",
                              padding: "5px",
                            }}
                          >
                            Salary:{val.salary}
                          </p>
                          <p
                            className="box_p"
                            style={{
                              borderRadius: "10px",
                              // width: "20%",
                              // backgroundColor: "grey",
                              padding: "5px",
                            }}
                          >
                            Exp:{val.experience}
                          </p>
                        </div>

                        {/* <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            textAlign: "center",
                          }}
                        >
                        
                        </div> */}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <Modal
              isOpen={isEdit}
              // onAfterOpen={afterOpenModal}
              onRequestClose={() => setIsEdit(false)}
              // style={customStyles}
              contentLabel="Example Modal"
            >
              <>
                <form className=" p-5" id="jobForm">
                  <h3>Job Informations</h3>
                  <div className="col-lg-12 col-md-10 col-sm-8 mb-3">
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
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
                      onChange={(e) => setOrganization(e.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Organization"
                    />
                    <input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
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
                      onChange={(e) => setType(e.target.value)}
                      className="form-select pt-3"
                      aria-label="Default select example"
                      placeholder="Job types"
                    >
                      <option defaultValue>Job types</option>
                      <option value="1">Remote</option>
                      <option value="2">Part Time</option>
                      <option value="3">Full Time</option>
                    </select>
                  </div>
                  <div
                    className=" col-lg-12 col-md-10 col-sm-8 mb-3"
                    style={{ display: "flex" }}
                  >
                    <input
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Salary"
                    />
                    <input
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
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
                      onChange={(e) => setDescription(e.target.value)}
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="job Description"
                    ></textarea>
                  </div>
                  <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Experience"
                    />
                </form>
                <button onClick={() => setIsEdit(false)}>Cancel</button>
                {editLoading ? (
                  <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <button onClick={handleUpdate} className="formBtn">
                    Save
                  </button>
                )}
              </>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
