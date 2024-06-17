import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import '../Contact/form.css'

const Result=() => {
  return(
    <p><i>Message sent successfully!!</i> </p>
  )

}


export const ContactUs = (props) => {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_frw4yio', 'template_f38qxs3', e.target, 'M3ASY_vAlcOBVgvVw')
      .then(
        (result) => {
          console.log(result.text);
      }, 
      (error) => {
          console.log(error.text);
      }
      );
e.target.reset();
showResult(true);
      
  };

  return (

<div className='formContainer'>



    <form className="hi" onSubmit={sendEmail}>
   <div className='cc'> CONTACT US</div>
   
    <input type="text" placeholder="Subject" name="user_subject" />
      <input type="text" placeholder="Your Name" name="user_name" />
  
      <input type="email" placeholder="Your email" name="user_email" />
      
      
      <textarea name="message" cols="30" rows="10" placeholder="Message"  />
      <input type="submit" className='ll' value="Send" />

      <div className='row'>
      {result ? <Result/>: null}

      </div>
    </form>
    </div>
  );
};




export default ContactUs; 