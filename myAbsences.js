//import style
import "../styles/home.css";

//import partials
import Header from "../partials/header";
import SideMenu from "../partials/side-menu";

//import utilities
import { useState, useEffect } from "react";
import MyAbsenceCard from "../partials/MyAbsenceCard";

function MyAbsences() {
  const [myabsencesList, setMyAbsencesList] = useState([]);
  const [teachersList, setTeachersList] = useState([]);
  const accountType = window.localStorage.getItem("accountType");
  const [classFilter, setClassFilter] = useState("");
  const userId= window.localStorage.getItem("token");
  console.log(userId);
  

  return (
    <div className="home-page">
      <Header />
      <div className="home">
        <SideMenu type={accountType} page="MyAbsences" />
        <div className="main-page" id="students-page">
          <div className="myAbsences-setting">
            <h1>My Absences</h1>
            <form className="filters">
              <select
                name="filter-by-class"
                id="filter-by-class"
                defaultValue=""
                onChange={(e) => {
                  setClassFilter(e.target.value);
                }}
              >
                <option disabled value="">
                  Filter by class
                </option>
                <option value="DAW2">DAW</option>
                <option value="DAM">IPO</option>
                <option value="POO">POO</option>
                <option value="BDM">BDM</option>
              </select>
            </form>
            </div>
            <div className="cards">
              <MyAbsenceCard/>
              <MyAbsenceCard/>  
              <MyAbsenceCard/>
              <MyAbsenceCard/>  
              <MyAbsenceCard/>
              <MyAbsenceCard/>  
              
            </div>
          </div>
        </div>
        
      </div>
  
  );
}

export default MyAbsences;
