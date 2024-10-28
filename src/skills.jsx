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
                <h2>My Skills</h2>
            <div className="content">
            <FaHtml5 id="icon" title="HTML" style={{color:'#700548'}}/>
            <FaCss3Alt id="icon"  title="CSS" style={{color:'#0258ED'}}/>
            <IoLogoJavascript id="icon" title="JAVA SCRIPT"/>
            <RiTailwindCssFill id="icon" title="TAILWIND" style={{color:'#0258ED'}}/>
            <SiExpress id="icon" title="EXPRESS"/>
            <FaNodeJs id="icon" title="NODE" style={{color:'green'}}/>
            
            <FaReact id="icon" title="REACT" style={{color:'#012768'}}/>
            <TbBrandMysql id="icon" title="MYSQL"/>
            <BiLogoPostgresql id="icon" title="POSTGRESQL" style={{color:'#012768'}}/>
            <DiMongodb id="icon" title="MONGODB" style={{color:'green'}}/>
            <FaGitSquare id="icon" title="GIT" style={{color:'#A90101'}}/>

           
            </div>
        </div>
    )
}

export default Skills