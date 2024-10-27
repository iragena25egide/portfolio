import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaGitSquare } from "react-icons/fa";


function Skills(){
    return(
        <div className="skills-container">
                <h2 style={{fontSize:'40px',fontFamily:'sans-serif',textAlign:'center'}}>My Skills</h2>
            <div className="content">
            <FaHtml5 size={100} title="HTML" style={{color:'#700548'}}/>
            <FaCss3Alt size={100}  title="CSS" style={{color:'#0258ED'}}/>
            <IoLogoJavascript size={100} title="JAVA SCRIPT"/>
            <RiTailwindCssFill size={100} title="TAILWIND" style={{color:'#0258ED'}}/>
            <SiExpress size={100} title="EXPRESS"/>
            <FaNodeJs size={100} title="NODE" style={{color:'green'}}/>
            
            <FaReact size={100} title="REACT" style={{color:'#012768'}}/>
            <TbBrandMysql size={100} title="MYSQL"/>
            <BiLogoPostgresql size={100} title="POSTGRESQL" style={{color:'#012768'}}/>
            <DiMongodb size={100} title="MONGODB" style={{color:'green'}}/>
            <FaGitSquare size={100} title="GIT" style={{color:'#A90101'}}/>

           
            </div>
        </div>
    )
}

export default Skills