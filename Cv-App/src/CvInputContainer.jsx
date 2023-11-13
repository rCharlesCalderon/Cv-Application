import { useState } from "react";
import CvData from "./CvData";
import Input from "./Input";
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
function handleExperienceInfo(){
}
//experiecen button will create an obj 
//display a container with the info 
//
return (
  <>
    <div className="CvInputContainer">
      <Input label="Name" onChange={handleNameInfo} />
      <Input label="Email" onChange={handleEmailInfo} />
      <Input label="Phone Number" onChange={handlePhoneInfo} />
      <Input label="Address" onChange={handleAddressInfo} />

      <button onClick={handleExperienceInfo}>+Add Experience</button>
    </div>
  </>
);
}

export default CvInputContainer