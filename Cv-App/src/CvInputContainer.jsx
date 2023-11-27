import { useState } from 'react';
import './CvInputContainer.css';
import CvData from './CvData';
import EducationForm from './EducationForm.jsx';
import trashImg from './assets/trash.svg';
import ExperienceForm from './ExperienceForm';
import ContactInput from './ContactInput.jsx';
import Menu from './Menu.jsx';
function CvInputContainer({ cData, setCvData }) {

    const handleExperienceInfo = () => {
        const newExperience = {
            jobTitle: '',
            company: '',
            employer: '',
            startDate: '',
            city: '',
            endDate: '',
            id: crypto.randomUUID(),
        };
        setCvData({...cData,Experience: [...cData.Experience, newExperience]});
       
    };


     const handleEducationInfo = () => {
         const newEducation = {
             school: '',
             degree: '',
             startDate: '',
             endDate: '',
             city: '',
             description: '',
             id: crypto.randomUUID(),
         };
         setCvData({ ...cData, Education: [...cData.Education, newEducation] });
         console.log(CvData);
     };

     const handleCustomInfo = ()=>{
        let customSkillInput = document.querySelector('.custom-input').value
        const skill = {
            description: customSkillInput,
             id: crypto.randomUUID()
        }

        setCvData({...cData,CustomSkills:[...cData.CustomSkills,skill]})
       
     }

    const handleExpDelete = (expObj) =>{
        const deleteExp = cData.Experience.filter((obj) => obj.id !== expObj.id);
       
        setCvData({...cData,Experience:deleteExp})
       
    }
     const handleEduDelete = (eduObj) =>{
        const deleteExp = cData.Education.filter((obj) => obj.id !== eduObj.id);
       
        setCvData({...cData,Education:deleteExp})
       
    }

   
    return (
        <>
            <div className="CvInputContainer">
                <div className="inputs">
                    <span>Personal</span>
                    <Menu
                        title="Contact Info"
                        inputForm={
                            <ContactInput cData={cData} setCvData={setCvData} />
                        }
                    />
                    <span>Experience</span>

                    {cData.Experience.map((expObj,index) => {
                        return (
                         
                          <div className='input-img-container' key={expObj.id}> 
                            <Menu title= {`Experience(${index})`} inputForm={<ExperienceForm expObj={expObj} cData={cData} setCvData={setCvData} /> }  /> 
                            <img src={trashImg} className='trash-img' onClick={()=>{
                              handleExpDelete(expObj)
                            }}></img>
                           
                           </div>
                            
                        );
                    })}
                    <button className="btn" onClick={handleExperienceInfo}>+ Add Experience </button>
                    <span>Education</span>
                      {cData.Education.map((eduObj,index) =>{
                      
                        return(
                        <div className='input-img-container' key={eduObj.id}> 
                        <Menu title = {`Education(${index})` } inputForm={<EducationForm eduObj={eduObj} cData={cData} setCvData={setCvData}/>}></Menu>
                        <img src={trashImg} className='trash-img' onClick={()=>{
                              handleEduDelete(eduObj);
                            }}></img>
                      </div>
                        )
                      })}
                    <button className='btn' onClick={handleEducationInfo}>+ Add Education</button>

                      <span>Custom</span>
                      <span>Add your own section</span>
                      <input className='custom-input'></input>
                    <button className='btn' onClick={handleCustomInfo}>+Add Custom Section</button>
                </div>
            </div>
        </>
    );
}

export default CvInputContainer;
