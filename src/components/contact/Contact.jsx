import React,{useRef} from 'react'
import "./contact.css"
import {AiFillGithub,AiFillFacebook,AiOutlineInstagram} from 'react-icons/ai'
import {MdPlace,MdEmail} from 'react-icons/md'
import { IconContext } from "react-icons";
import emailjs from 'emailjs-com'
import swal from 'sweetalert'
const Contact = () => {




   


  return (
    <div className='contact-wrapper' id='contact'>
        <div className='contact'>
 <h1 className='contact-title' id='h1--contact'>CONTACT</h1>
 </div>
            <div className="contact-form">
                <div className="left">
                <ContactItem 
icon = {
<IconContext.Provider value={{ color: "black", size:"33px", className: "global-class-name" }}>
<a href='mailto:saradgyawali234@gmail.com'>

<MdEmail />
</a>


</IconContext.Provider>


}
text = "saradgyawali234@gmail.com"

/>
<ContactItem 
icon = {
    
<IconContext.Provider  value={{ color: "black", size:"33px", className: "global-class-name" }}>
<a href='https://github.com/sarad096' target="_blank" rel='noreferrer'>
<AiFillGithub />
    </a>



</IconContext.Provider>


}
text = "sarad096"

/>

<ContactItem 
icon = {
<IconContext.Provider value={{ color: "black", size:"33px", className: "global-class-name" }}>

<MdPlace />


</IconContext.Provider>


}
text = "Butwal, Province-5, Nepal"

/>
<ContactItem 
icon = {
<IconContext.Provider value={{ color: "black", size:"33px", className: "global-class-name" }}>

<a href='https://facebook.com/itsmesarad' target="_blank" rel='noreferrer'>
<AiFillFacebook />

</a>


</IconContext.Provider>


}
text = "Butwal, Province-5, Nepal"

/>
<ContactItem 
icon = {
<IconContext.Provider value={{ color: "black", size:"33px", className: "global-class-name" }}>
<a href='https://instagram.com/itssaradgyawali' target="_blank" rel='noreferrer'>

<AiOutlineInstagram />
</a>


</IconContext.Provider>


}
text = "Butwal, Province-5, Nepal"

/>




</div>

                


                <div className="right">


<ContactForm />
                </div>
            </div>
            </div>
        

  )
}

export default Contact






function ContactItem(props){
    return(
        

        
        <div className='container'>
        <div className='icon'>
            {props.icon}

        </div>
        <div className="info">
            <p>

            {props.text}
            </p>
        </div>

        </div>
        
    )
}

function ContactForm(){
  
    const form = useRef();
    const sendEmail =  (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_iu1apzv', 'template_zrulhih', form.current, 'PvcMbFiLJ3RcAHUSF')
          .then((result) => {
            //   console.log(result.text);
            swal({
                title: "Sent",
                text: "Your message has been sent successfully",
                icon: "success",
              });
          }, (error) => {
            //   console.log(error.text);
            swal({
                title: "OOPS!",
                text: "Something went wrong",
                icon: "error",
              });
          });
          
          e.target.reset()
        
      };



    return (
        <div>
            <form ref={form}  onSubmit={sendEmail}>
                <div className='form-group'>
                    
                    <input type="text" placeholder='Your Name' id="name" name="name"
                    required
                   

                    
                    />
                    

                </div>
                <div className='form-group'>
                    
                    <input type="email" placeholder='Your Email' id="email" name="email" 
                    required
             

                    
                    />
                    

                </div>
                <div className='form-group'>
                    
                    <textarea type="text" placeholder='Message' id="message" name="message"
                required

                    
                    />
                  

                </div>
                <div className='btn--container--contact--form'>

                <button type='submit' className='btn-submit'>Send</button>
                </div>
            </form>
        </div>
    )
}