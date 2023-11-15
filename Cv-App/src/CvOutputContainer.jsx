import "./CvOutputContainer.css";
import CvData from "./CvData";
function CvOutputContainer({nameData,emailData,phoneData,addressData, jobData}){
    return (
      <>
        <div className="CvOutputContainer">
          {nameData !== '' && <p>{nameData}</p> }
          <p>Email: {emailData}</p>
          <p>Phone Number: {phoneData}</p>
          <p>Address: {addressData}</p>
          {jobData !== null && CvData.Experience.map((obj)=>{
            return <p key={obj.id}>Job Title: {obj.job}</p>
          })}
        </div>
      </>
    );
}

export default CvOutputContainer;