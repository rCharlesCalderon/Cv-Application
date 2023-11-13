import CvOutputCon from "./CvOutputContainer.css";
import CvData from "./CvData";
function CvOutputContainer({nameData,emailData,phoneData,addressData}){
    return (
      <>
        <div className="CvOutputContainer">
          <p>Name: {nameData}</p>
          <p>Email: {emailData}</p>
          <p>Phone Number: {phoneData}</p>
          <p>Address: {addressData}</p>
        </div>
      </>
    );
}

export default CvOutputContainer;