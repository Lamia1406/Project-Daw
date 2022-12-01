import {FaPlusCircle} from "react-icons/fa";
import "../styles/home.css";
const MyAbsenceCard = (props) => {
    const absence = props.absence;
    const teachersList = props.teachersList;
    const userId=props.userId;
    
    return (
      <div className="card">
        <div className="labels">
          <p>Class :</p>
          <p>Teacher :</p>
          <p>Date :</p>
          <p>Nature :</p>
        </div>
        
        {userId=="6373a0049c12e6630edecdc9"&&(
            <div className="values">
            <p> {
                teachersList.find((teacher) => teacher._id === absence.teacher_id)
                  .class_name
              }{" "}
              - {absence.class_type}</p>
              <p>
              {
                teachersList.find((teacher) => teacher._id === absence.teacher_id)
                  .last_name
              }{" "}
              {
                teachersList.find((teacher) => teacher._id === absence.teacher_id)
                  .first_name
              }
            </p>
              <p>
              {new Date(absence.date).getDate()}/{new Date(absence.date).getMonth()}
              /{new Date(absence.date).getFullYear()} -{" "}
              {absence.time}
            </p>
            <p id="nature">{absence.justified ? "Justified" : "Unjustified"}</p>
            </div>
        )}
          
          
        
        <button className="upload-justification-btn"><FaPlusCircle size={18} className="fa-plus-btn"/>Upload Justification </button>
      </div>
    );
  };
  
  export default MyAbsenceCard;
  