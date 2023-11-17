import "./CvOutputContainer.css";
import mailImg from './assets/mail.svg'
import phoneImg from "./assets/phone.svg";
import locationImg from "./assets/location.svg";
import CvData from "./CvData";
function CvOutputContainer({nameData,emailData,phoneData,addressData,jobData,employerData,startDateData,endDateData,cityData,expBtnCount}){
    return (
      <>
        <div className="CvOutputContainer">
          <div className="output-data-container">
            {nameData && <div className="full-name">{nameData}</div>}

            <div className="contact-container">
              {addressData && (
                <span>
                  <img src={locationImg}></img>
                  {addressData}
                </span>
              )}
              {phoneData && (
                <span>
                  <img src={phoneImg}></img>
                  {phoneData}
                </span>
              )}
              {emailData && (
                <span>
                  <img src={mailImg}></img>
                  {emailData}
                </span>
              )}
            </div>

            {expBtnCount !== 0 && (
              <div className="experience-container">
                <span>Experience</span>
                <hr></hr>
                <div className="experience-info">
                  <li className="job-info">{jobData}</li>
                  <p className="city-info"> {cityData}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
}

export default CvOutputContainer;