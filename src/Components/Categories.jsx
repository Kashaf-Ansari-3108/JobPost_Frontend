import React from 'react';
import '../Components/module.css'; // Create a CSS file for styling
import design from '../assets/design.png'
import web from '../assets/web.png'
import mobile from '../assets/mobile.png'
import writing from '../assets/writing.png'
import sales from '../assets/sales.png'
import it from '../assets/it.png'

const Categories = () => {
  return(
    <>
    <div className='row col-12 offset-1'>
      <div className="col-lg-3 col-md-4 col-sm-12 p-3 cardd m-5" style={{width:'18rem'}}>
  <div className="card_body">
    <img src={design}/>
    <h5 className="card-title">Design & development</h5>
  </div>
</div>

<div className="col-lg-4 col-md-4 col-sm-12 p-3 cardd m-5" style={{width:'18rem'}}>
  <div className="card_body">
    <img src={web}/>
    <h5 className="card-title">Design & creative</h5>
  </div>
</div>

<div className="col-lg-3 col-md-4 col-sm-12 p-3 cardd m-5" style={{width:'18rem'}}>
  <div className="card_body">
    <img src={mobile}/>
    <h5 className="card-title">Mobile Application</h5>
  </div>
</div>

<div className="cardd m-5" style={{width:'18rem'}}>
  <div className="card_body">
    <img src={it}/>
    <h5 className="card-title">Information technology</h5>
  </div>
</div>

<div className="cardd m-5" style={{width:'18rem'}}>
  <div className="card_body">
    <img src={writing}/>
    <h5 className="card-title">Content Writing</h5>
  </div>
</div>

<div className="cardd m-5" style={{width:'18rem'}}>
  <div className="card_body">
    <img src={sales}/>
    <h5 className="card-title">Sales and marketing</h5>
  </div>
</div>
</div>
    </>
  )
 
};

export default Categories;
