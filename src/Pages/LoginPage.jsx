import React,{useState,useEffect} from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  MDBCardImage,
} from "mdb-react-ui-kit";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../store/loginSlice";

function LoginPage() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.loginSlice);
  const navigate = useNavigate();
  console.log(selector);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    const obj = {
      email,
      password,
    };
    setIsLoading(true);
    dispatch(loginUser(obj));
  };
  useEffect(() => {
    if (selector.status === "idle") {
      alert(selector.data.message);
      localStorage.setItem('token', selector.data.token);
      localStorage.setItem('uId',selector.data.data._id);
      navigate("/");

    }
  }, [selector, navigate]);
  return (
    <MDBContainer fluid>
      <MDBRow
        className="d-flex justify-content-center align-items-center h-100"
        style={{ backgroundColor: "#cdd6eda8" }}
      >
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{
              borderRadius: "1rem",
              maxWidth: "500px",
            }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <MDBCardImage
                src={logo}
                alt="login form"
                className="rounded-start w-30 mx-auto my-auto"
              />

              <h2 className="fw-bold mb-2 text-center">
                Login to your account
              </h2>
              <p className="text-black-50 mb-3 text-center">Welcome Back!</p>

              <MDBInput
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                wrapperClass="mb-4 w-100"
                placeholder="Email address"
                type="email"
                size="lg"
              />
              <MDBInput
              onChange={(e) => setPassword(e.target.value)}
              value={password}
                wrapperClass="mb-4 w-100"
                placeholder="Password"
                type="password"
                size="lg"
              />

              <a className="small text-muted" style={{ textAlign: "right" }}>
                Forgot password?
              </a>

              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                className="mb-4"
                label="Remember me"
              />
              <p className="mb-5 pb-lg-2" style={{ color: "black" }}>
                Don't have an account?
                <Link to="/register" style={{ color: "#393f81" }}>
                  {" "}
                  Register here
                </Link>
              </p>

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
               
               <MDBBtn
                 onClick={handleSubmit}
                 size='lg'
                 style={{
                   backgroundColor: '#fb246a',
                   border: 'none',
                 }}
               >
                 Log In
               </MDBBtn>
             )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginPage;
