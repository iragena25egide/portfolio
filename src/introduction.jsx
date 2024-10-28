import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


function Introduction(){

    const openGitHub = () => {
        window.open('https://github.com/iragena25egide', '_blank', 'noopener,noreferrer');
      };

      const openLinkedin = () => {
        window.open('https://www.linkedin.com/in/iragena-egide-75b758248/', '_blank', 'noopener,noreferrer');
      };

      const openIg = () => {
        window.open('https://www.instagram.com/egide_kid/', '_blank', 'noopener,noreferrer');
      };
    return(
        <div className="intro">
            <div className="left-intro">
                <p>THIS IS</p>
                <br />
                <h2>IRAGENA EGIDE</h2>
                <br />
                <small>
                I am junior full stack developer. I focus on building web applications using JavaScript language, and its technologies like NodeJs, React and Redux.
                i like coding and am very passionate about it.i always want to learn new skills and work on small project in order to boost my skills.
                </small>
                <br /><br />
                <h4 style={{fontFamily:'sans-serif',color:'#7899D4'}}>More About Me</h4>
                <div className="media">
                <FaGithub size={28} cursor={'pointer'} onClick={openGitHub}/>
                <FaLinkedin size={28} cursor={'pointer'} onClick={openLinkedin}/>
                <FaSquareInstagram size={28} cursor={'pointer'} onClick={openIg}/>
                </div>
            </div>
            <div className="right-intro">
                <img src="profile.png"  />
            </div>
        </div>
    )
}

export default Introduction