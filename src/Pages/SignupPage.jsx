import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signupUser } from '../store/signupSlice';

function SignupPage() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.signupSlice);
  const navigate = useNavigate();
  console.log(selector);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    const formattedPhoneNumber = phoneNumber.replace(/^0/, "+92");
    const obj = {
      name: fullName,
      email,
      password,
      phoneNumber:formattedPhoneNumber,
      otp,
    };
   
    setIsLoading(true);
    dispatch(signupUser(obj))
  };
  useEffect(() => {
    if (selector.status === "idle") {
      alert(selector.data.message); 
      navigate('/login'); 
    }
  }, [selector, navigate]);

  return (
    <MDBContainer fluid>
      <MDBRow
        className='d-flex justify-content-center align-items-center h-100'
        style={{ backgroundColor: '#cdd6eda8' }}
      >
        <MDBCol col='12'>
          <MDBCard
            className='bg-white my-5 mx-auto'
            style={{ borderRadius: '1rem', maxWidth: '500px' }}
          >
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <MDBCardImage
                src={logo}
                alt='login form'
                className='rounded-start w-30 mx-auto my-auto'
              />
              <h2 className='fw-bold mb-2 mt-3 text-center'>Sign Up</h2>
              <MDBInput
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                wrapperClass='mb-4 w-100'
                placeholder='Full name'
                type='text'
                size='lg'
              />
              <MDBInput
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                wrapperClass='mb-4 w-100'
                placeholder='Email address'
               
                type='email'
                size='lg'
              />
              <MDBInput
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                wrapperClass='mb-4 w-100'
                placeholder='Password'
                
                type='password'
                size='lg'
              />
              <MDBInput
                wrapperClass='mb-4 w-100'
                placeholder='Confirm Password'
                
                type='password'
                size='lg'
              />
              <MDBInput
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                wrapperClass='mb-4 w-100'
                placeholder='Phone number'
                
                type='number'
                size='lg'
              />
              <MDBInput
                onChange={(e) => setOtp(e.target.value)}
                value={otp}
                wrapperClass='mb-4 w-100'
                placeholder='Enter OTP (One Time Password)'
                
                type='number'
                size='lg'
              />
              <p className='mb-5 pb-lg-2' style={{ color: 'black' }}>
                Already have an account?{' '}
                <Link to='/login' style={{ color: '#393f81' }}>
                  Sign in
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
                  Sign Up
                </MDBBtn>
              )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignupPage;
