import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md"

function Contact(){


    return(
        <div className="contact">
            <h4>Contacts</h4>

            <div className="location">
            <FaLocationDot id="img" style={{color:'green',color:'#0a56d8'}}/>
            <small style={{fontFamily:'sans-serif',fontSize:'12px',color:'#0a56d8'}}>Ngororero - Rwanda</small>
            </div>
            <div className="phone">
            <MdOutlinePhoneAndroid id="img" style={{color:'green',color:'#0a56d8'}}/>
            <small style={{fontFamily:'sans-serif',fontSize:'12px',margin:'0px 0px 0px 13px',color:'#0a56d8'}}>0798555420</small>
            </div>
            <div className="email">
            <MdEmail id="img" style={{color:'green',color:'#0a56d8'}}/>
            <small style={{fontFamily:'sans-serif',fontSize:'12px',margin:'0px 0px 0px 13px',color:'#0a56d8'}}>iragenaegide205@gmail.com</small>
            </div>

            <div className="copy">

                <p>Copyright &copy; iragenaegide{new Date().getFullYear()} All rights reserved</p>
            </div>
        </div>
    )
}

export default Contact