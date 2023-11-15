import { useState } from "react";
import './CvInputContainer.css'
import CvData from "./CvData";
import Input from "./Input";
import trashImg from "./assets/trash.svg"
import ExperienceForm from "./ExperienceForm";
function CvInputContainer({setName,setEmail,setPhone,setAddress,setJob}){
   
 
 
 function handleNameInfo(e){
      setName(e.target.value)
      CvData.Name = e.target.value;
 }
 function handleEmailInfo(e) {
   setEmail(e.target.value);
   CvData.Email = e.target.value;
 }
function handlePhoneInfo(e) {
  setPhone(e.target.value);
  CvData.PhoneNumber = e.target.value;
}
function handleAddressInfo(e) {
  setAddress(e.target.value);
  CvData.Address = e.target.value;
  console.log(CvData);
}
const [btnCount,setBntCount] = useState(0)



function handleExperienceInfo(){
  setBntCount(btnCount + 1)
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
function handleJobInfo(event,data){
   data.job = event.target.value
   setJob(event.target.value)
}
function handleEmployerInfo(event,data){
    data.employer = event.target.value
}
function handleStartDateInfo(event,data){
data.startDate = event.target.value
}
function handleEndDateInfo(event,data){
    data.endDate = event.target.value
}
function handleCityInfo(event,data){
data.city = event.target.value
}
function handleDescriptionInfo(event,data){
data.description = event.target.value

}
function handleDeletion(data){
//USE FILTER
let dataIndex = CvData.Experience.indexOf(data)
setJob(CvData.Experience.splice(dataIndex,1))
}
return (
  <>
    <div className="CvInputContainer">
      <Input label="Name" onChange={handleNameInfo} />
      <Input label="Email" onChange={handleEmailInfo} />
      <Input label="Phone Number" onChange={handlePhoneInfo} />
      <Input label="Address" onChange={handleAddressInfo} />

      <button onClick={handleExperienceInfo}>+Add Experience</button>
      {btnCount !== 0 && CvData.Experience.map((data) =>{
        //MAKE INTO A COMPONENT WHEN FIGURED OUT
       return (
         <div key={data.id}>
           <Input
             label={"Job title"}
             onChange={() => {
               handleJobInfo(event, data);
             }}
           />
           <Input
             label={"Employer"}
             onChange={() => {
               handleEmployerInfo(event, data);
             }}
           />
           <Input
             label={"Start Date"}
             onChange={() => {
               handleStartDateInfo(event, data);
             }}
           />
           <Input
             label={"End Date"}
             onChange={() => {
               handleEndDateInfo(event, data);
             }}
           />
           <Input
             label={"City"}
             onChange={() => {
               handleCityInfo(event, data);
             }}
           />
           <Input
             label={"Description"}
             onChange={() => {
               handleDescriptionInfo(event, data);
             }}
           />
           <img src={trashImg} onClick={()=>{
            return handleDeletion(data)
           }}/>
         </div>
       );
       
      })}
    </div>
  </>
);
}
//on button click create an obj to store the experience input obj data and push it to main obj
//now I want to loop through the Experience obj and create a bunch of input forms to take in the data 
//create html elements in output container to show data

export default CvInputContainer