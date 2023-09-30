import React, { useState, useEffect } from 'react';
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
  MDBCardImage
} from 'mdb-react-ui-kit';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../store/otpSlice';

function RegisterPage() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.otpSlice);
  const navigate = useNavigate();
  console.log(selector);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    const formattedPhoneNumber = phoneNumber.replace(/^0/, "+92");
    dispatch(registerUser({ phoneNumber: formattedPhoneNumber }));
  };

  useEffect(() => {
    if (selector.status === "idle") {
      alert(selector.data.message); 
      navigate('/signup'); 
    }
  }, [selector, navigate]);

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100' style={{ backgroundColor: '#cdd6eda8' }}>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <MDBCardImage src={logo} alt="login form" className='rounded-start w-30 mx-auto my-auto' />
              <h2 className="fw-bold mb-2 mt-3 text-center">Register here</h2>
              <MDBInput onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} wrapperClass='mb-4 w-100' placeholder='Phone number' id='formControlLg' type='number' size="lg" />
              <p className="mb-5 pb-lg-2" style={{ color: 'black' }}>
                Already have an account? <Link to='/login' style={{ color: '#393f81' }}>Sign in</Link>
              </p>
              {selector.status === "loading" ? (
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <MDBBtn onClick={handleSubmit} size='lg' style={{ backgroundColor: '#fb246a', border: 'none' }}>
                  Submit
                </MDBBtn>
              )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default RegisterPage;
