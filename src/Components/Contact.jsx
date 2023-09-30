import React from 'react';
import '../Components/module.css';
import contact from '../assets/contact bg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';



const Contact = () => {
  return (
    <>
    <div className='image-container'>
      <img src={contact} className='contact-background'/>
      <h1 className='contactHeading'>Contact us</h1>
    </div>

<div className='contact-col mt-5 p-5 offset-1'>
  <div className='row'>
    <div className='col-lg-6 mx-3'>
      <p style={{color:'#fb246a'}}>Contact us</p>
      <h2>We Are Best About This Job Solution.</h2>
      <p>
        If you have any questions or inquiries, please feel free to contact us
        using the form below or via email.
      </p>
    </div>
    <div className='col-lg-4 mt-5'>
      <p>There are many variations of passages of Lorem Ipsum Fasts There are many variations of passages of Lorem Ipsum Fastsby injected humour, by injected humour, or randomised coved ceilings.

</p>
    </div>
  </div>
</div>

    <div className="contact-container">
    <div className='row'>
      <div className="contact-form offset-1 col-6">
        <form>
          <div className="form-group" style={{display:'flex'}}>
            
            <input type="text" id="name" name="name" placeholder='Your Name'/>
            <input type="email" id="email" name="email" placeholder='Your email' />
          </div>

          <div className="form-group">
          <input type="text" id="subject" name="subject" placeholder='subject' />
          
          </div>

          <div className="form-group">
            <textarea id="message" name="message" rows="4" placeholder='Write here your Message'></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className='col-4 contact-fonts mt-5 mx-5'>
      <p><FontAwesomeIcon icon={faMapMarkerAlt} color='#fb246a'/><b>  Location</b> :1270 London Ave street 2</p>
      <p><FontAwesomeIcon icon={faEnvelope} color='#fb246a'  /> <b>  Email</b>:jobfinder098@gmail.com</p>
      <p><FontAwesomeIcon icon={faPhone}  color='#fb246a' /> <b> Call</b>:+93245890</p>
      </div>
    </div>
    </div>
</>
    
  );
};

export default Contact;
