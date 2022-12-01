import {FaPlusCircle} from "react-icons/fa";
import "../styles/home.css";
const MyAbsenceCard = (props) => {
    const absence = props.absence;
    const teachersList = props.teachersList;
    
    return (
      <table className="card" border={0}>
        <tr>
            <td className="labels">Class :</td>
            <td className="values">DAW</td>
        </tr> 
        <tr>
            <td className="labels">Teacher :</td>
            <td className="values">Bouramoul AbdelKrim</td>
        </tr> 
        <tr>
            <td className="labels">Date :</td>
            <td className="values">22/11/2022</td>
        </tr> 
        <tr>
            <td className="labels">Nature :</td>
            <td className="values">Justified</td>
        </tr>
        <tr>
            <td className="btn"><button className="upload-justification-btn" ><FaPlusCircle size={18} className="fa-plus-btn"/>Upload Justification </button>
            </td>
        </tr>
         
         
          
        
        
            
          
          
        
      </table>
    );
  };
  
  export default MyAbsenceCard;
  