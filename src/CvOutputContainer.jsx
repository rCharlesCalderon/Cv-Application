import "./CvOutputContainer.css";
import mailImg from './assets/mail.svg'
import phoneImg from "./assets/phone.svg";
import geoImg from './assets/geo.svg';

function CvOutputContainer({ cData }) {
    return (
        <>
            <div className="CvOutputContainer">
                <div className="output-data-container">
                    {cData.name && (
                        <div className="full-name">{cData.name}</div>
                    )}
                    <div className="contact-container">
                        {cData.Address && (
                            <span>
                                <img src={geoImg}></img>
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
                            <h2>Experience</h2>

                            <hr></hr>
                        </>
                    )}

                    {cData.Experience.map((expObj) => {
                        return (
                            <div className="input-container" key={expObj.id}>
                                <div className="input-info">
                                    <ul>
                                        <li>
                                            <h5> {expObj.jobTitle} </h5>
                                        </li>
                                        <li>{expObj.employer}</li>
                                        {expObj.startDate && (
                                            <li>
                                                {expObj.startDate}-
                                                {expObj.endDate}
                                            </li>
                                        )}
                                    </ul>
                                    {expObj.city && (
                                        <p className="city-info">
                                            {expObj.city}
                                        </p>
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
                            <h2>Education</h2>
                            <hr></hr>
                        </>
                    )}
                    {cData.Education.map((eduObj) => {
                        return (
                            <div className="input-container" key={eduObj.id}>
                                <div className="input-info">
                                    <ul>
                                        <li>
                                            {' '}
                                            <h5> {eduObj.school}</h5>{' '}
                                        </li>
                                        <li>{eduObj.degree}</li>
                                        {eduObj.startDate && (
                                            <li>
                                                {eduObj.startDate}-
                                                {eduObj.endDate}
                                            </li>
                                        )}
                                    </ul>
                                    {eduObj.city && (
                                        <p className="city-info">
                                            {eduObj.city}
                                        </p>
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

                    {cData.CustomSkills.map((skill) => {
                        return (
                            <div className="input-container" key={skill.id}>
                                <div className="skill-title">
                                    {skill.title}{' '}
                                </div>
                                <hr></hr>
                                <div className="input-info">
                                    {skill.description}{' '}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default CvOutputContainer;