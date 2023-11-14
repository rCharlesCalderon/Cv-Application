import { useState } from "react";
import './CvInputContainer.css'
import CvData from "./CvData";
import Input from "./Input";
import ExperienceForm from "./ExperienceForm";
function CvInputContainer({setName,setEmail,setPhone,setAddress}){
   
 
 
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
        <ExperienceForm key={data.id}/>
      })}
    </div>
  </>
);
}

export default CvInputContainer