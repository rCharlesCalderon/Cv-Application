import "./CvOutputContainer.css";
import mailImg from './assets/mail.svg'
import phoneImg from "./assets/phone.svg";
import locationImg from "./assets/location.svg";
import CvData from "./CvData";
function CvOutputContainer({ cData,setCvData }) {
  return (
      <>
          <div className="CvOutputContainer">
              <div className="output-data-container">
                  {cData.name && <div className="full-name">{cData.name}</div>}
                  <div className="contact-container">
                      {cData.Address && (
                          <span>
                              <img src={locationImg}></img>
                              {cData.Address}
                          </span>
                      )}
                      {cData.PhoneNumber && (
                          <span>
                              <img src={phoneImg}></img>
                              {cData.PhoneNumber}
                          </span>
                      )}
                      {cData.Email && (
                          <span>
                              <img src={mailImg}></img>
                              {cData.Email}
                          </span>
                      )}
                  </div>

                  {cData.Experience.length > 0 && (
                      <>
                          <span>Experience</span>

                          <hr></hr>
                      </>
                  )}

                  {cData.Experience.map((expObj) => {
                      return (
                          <div className="input-container" key={expObj.id}>
                              <div className="input-info">
                                  <ul>
                                      <li>{expObj.jobTitle}</li>
                                      <li>{expObj.employer}</li>
                                      {expObj.startDate && (
                                          <li>
                                              {expObj.startDate}-
                                              {expObj.endDate}
                                          </li>
                                      )}
                                  </ul>
                                  {expObj.city && (
                                      <p className="city-info">{expObj.city}</p>
                                  )}
                              </div>
                              {expObj.description && (
                                  <p className="description-info">
                                      -{expObj.description}
                                  </p>
                              )}
                          </div>
                      );
                  })}

                  {cData.Education.length > 0 && (
                      <>
                         <span>Education</span>
                          <hr></hr>
                      </>
                  )}
                  {cData.Education.map((eduObj) => {
                      return (
                          <div className="input-container" key={eduObj.id}>
                              <div className="input-info">
                                  <ul>
                                      <li>{eduObj.school}</li>
                                      <li>{eduObj.degree}</li>
                                      {eduObj.startDate && (
                                          <li>
                                              {eduObj.startDate}-
                                              {eduObj.endDate}
                                          </li>
                                      )}
                                  </ul>
                                  {eduObj.city && (
                                      <p className="city-info">{eduObj.city}</p>
                                  )}
                              </div>
                              {eduObj.description && (
                                  <p className="description-info">
                                      -{eduObj.description}
                                  </p>
                              )}
                          </div>
                      );
                  })}
              </div>
          </div>
      </>
  );
}

export default CvOutputContainer;