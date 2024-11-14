import React from 'react'
import './About.css'
import img_4 from '../../assets/img_4.png'
const About = () => {
  return (
    <div className='about '>
         <div className='about-left'>
        <img src={img_4} alt='' className='about-img'/>

         </div>
       <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>CEO’S MESSAGE</h2>
       <p >TGBS aims to impart high quality management education through our Post Graduate Programs.
            We aspire to prepare leader-managers who would contribute constructively towards improving the managerial practices both in public and private sectors. We endeavor to help our students reach new frontiers of knowledge and excellence to mould them into productive, ethically justifiable and socially responsible citizens.
            Keeping up with the vision of the Institute, we strive to empower the students with knowledge and the requisite soft-skills that shall help them blossom into adept leaders and efficient managers, skilled to handle all the challenges that the rapidly evolving work-places shall throw. The training they receive shall enable them to hold steady the delicate balance of work-life relationship and emerge victorious in the face of all oddities and challenges that shall be on offer.
               Perfection is a process and we are on our way</p>
        
       </div>
      
    </div>
  )
}

export default About
