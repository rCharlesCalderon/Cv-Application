import Input from "./Input"
import CvData from "./CvData";
import './experienceForm.css'
//pass in a key maybe??????
function ExperienceForm({setJob,setEmployer,setStartDate,setEndDate,setCity,setDescription,data}){
  function handleJobInfo(event, data) {
  setJob(event.target.value);
  data.job = event.target.value;
  }
  function handleEmployerInfo(event, data) {
  setEmployer(event.target.value);
  data.employer = event.target.value;
  }
  function handleStartDateInfo(event, data) {
  setStartDate(event.target.value);
  data.startDate = event.target.value;
  }
  function handleEndDateInfo(event, data) {
  setEndDate(event.target.value);
  data.endDate = event.target.value;
  }
  function handleCityInfo(event, data) {
  setCity(event.target.value);
  data.city = event.target.value;
  }
  function handleDescriptionInfo(event, data) {
  setDescription(event.target.value);
  data.description = event.target.value;
  }
 
    return (
      <>
        <div className="experience-input-container">
          
         <div className="job-title">  <Input label={"Job title"} onChange={()=>{handleJobInfo(event,data)}} /> </div>
        <div className="employer-input"> <Input label={"Employer"} onChange={()=>{handleEmployerInfo(event,data)}} /> </div> 
        <div className="start-date-input">  <Input label={"Start Date"}  onChange={()=>{handleStartDateInfo(event,data)}}/> </div>
         <div className="end-date-input">  <Input label={"End Date"}  onChange={()=>{handleEndDateInfo(event,data)}}/> </div>
         <div className="city-input"> <Input label={"City"} onChange={()=>{handleCityInfo(event,data)}}/> </div>
          <div className="description-input"> 
          <label>Description</label>
          <textarea onChange={()=>{handleDescriptionInfo(event,data)}}></textarea>
           </div>
        </div>
      </>
    );
}
export default ExperienceForm