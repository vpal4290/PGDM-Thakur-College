import React from 'react'
import './Contact.css'
import img_9 from '../../assets/img_9.jpg'
import img_10 from '../../assets/img_10.jpg'
import img_11 from '../../assets/img_11.jpg'



const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4769b3b9-da2e-4c92-86cd-859d0697c78c");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
    <div className='contact-col'>
     <h3>Send us a message</h3>
      <p>Feel free to contact us if you need any assistance, any help or another question.</p>
      <ul>
        <li> <img src={img_9} alt="" /> tgbs@thakureducation.org</li>
        <li> <img src={img_10} alt="" /> 022-6730 8098/99</li>
        <li> <img src={img_11} alt="" /> Thakur Global Business School, C-Block,<br/>
            Thakur Educational Campus, Shyamnarayan Thakur Marg,<br/> 
             Thakur Village, Kandivali (East), Mumbai 400 101.</li>

      </ul>
    </div> 
      <div className='contact-col'>
       <form onSubmit={onSubmit} >
        <label >Enter name</label>
        <input type="text" name='name' placeholder='Enter your name' required />
        <label >Enter Email Address</label>
        <input type="text" name='Email' placeholder='Enter your Email' required />
        <label >Enter Mobile Number</label>
        <input type="tel" name='phone' placeholder='Enter your number' required />
        <label >Write your messages here</label>
        <textarea name='message' rows='6' placeholder='Enter your messege' required> </textarea>
        <button type='submit' className='btn dark-btn'>Submit now</button>
       </form>
       <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
