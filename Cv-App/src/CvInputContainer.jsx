import { useState } from "react";
import './CvInputContainer.css'
import CvData from "./CvData";
import trashImg from "./assets/trash.svg"
import ExperienceForm from "./ExperienceForm";
import ContactInput from "./ContactInput.jsx";
import Menu from './Menu.jsx'
function CvInputContainer({setName,setEmail,setNumber,setAddress,setJob,setEmployer,setStartDate,setEndDate,setCity,setDescription,setExpBntCount,expBtnCount}){




function handleExperienceInfo(){
  setExpBntCount(expBtnCount + 1)
   CvData.Experience.push({

        job: '',
        employer: '',
        startDate: '',
        endDate: '',
        city: '',
        description:'',
        id:crypto.randomUUID()
   })
}

function handleDeletion(data){
//USE FILTER
let dataIndex = CvData.Experience.indexOf(data)
setJob(CvData.Experience.splice(dataIndex,1))
}
return (
  <>
    <div className="CvInputContainer">
      <div className="inputs">
        <span className="personal-title">Personal</span>
        <Menu title = 'Contact Info' inputForm = {<ContactInput setName = {setName} setEmail = {setEmail} setNumber = {setNumber} setAddress = {setAddress}/> }/>
        <span className="experience-title">Experience</span>
        {expBtnCount !== 0 && CvData.Experience.map((expObj,index) =>{ 
          return (<div key={expObj.id}> 
          <Menu title= {`Experience(${index})`} inputForm={<ExperienceForm setJob={setJob} setEmployer={setEmployer} setStartDate = {setStartDate }setEndDate={setEndDate} setCity={setCity} setDescription={setDescription} data = {expObj}/>}/>
           </div>)
        })}
        <button className="experience-btn" onClick={handleExperienceInfo}>Add Experience +</button>
      </div>
    </div>
  </>
);
}


export default CvInputContainer