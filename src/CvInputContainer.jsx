import { useState } from 'react';
import './CvInputContainer.css';

import EducationForm from './EducationForm.jsx';
import trashImg from './assets/trash.svg';
import ExperienceForm from './ExperienceForm';
import ContactInput from './ContactInput.jsx';
import Menu from './Menu.jsx';
import SkillForm from './SkillForm.jsx';
function CvInputContainer({ cData, setCvData }) {
const [customSkill, setCustomSkill] = useState('');
const [customTitle, setCustomTitle] = useState('');
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
        const skill = {
          title: customTitle,
            description:customSkill,

             id: crypto.randomUUID()
        }
        setCvData({...cData,CustomSkills:[...cData.CustomSkills,skill]})

        
        setCustomTitle('');
       
     }

    const handleExpDelete = (expObj) =>{
        const deleteExp = cData.Experience.filter((obj) => obj.id !== expObj.id);
       
        setCvData({...cData,Experience:deleteExp})
       
    }
     const handleEduDelete = (eduObj) =>{
        const deleteExp = cData.Education.filter((obj) => obj.id !== eduObj.id);
       
        setCvData({...cData,Education:deleteExp})
       
    }

    const handleCustomDelete = (customObj) =>{
    const deleteExp = cData.CustomSkills.filter((obj) => obj.id !== customObj.id);

    setCvData({ ...cData, CustomSkills: deleteExp });
    }
  
   
    return (
        <>
            <div className="CvInputContainer">
                <div className="inputs">
                    <h1>Personal</h1>
                    <Menu title="Contact Info" inputForm={ <ContactInput cData={cData} setCvData={setCvData} />}
                       
                    />
                    <h1>Experience</h1>

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
                   <h1>Education</h1>
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

                      <h1>Custom</h1>
                      {cData.CustomSkills.map((skillObj)=>{
                        return(
                        <div className='input-img-container' key={skillObj.id}> 
                        <Menu title = {skillObj.title} inputForm={<SkillForm skillObj={skillObj} cData={cData} setCvData={setCvData}/>}></Menu>
                        <img src={trashImg} className='trash-img' onClick={()=>{
                              handleCustomDelete(skillObj);
                            }}></img>
                      </div>
                       
                        )
                      })}
                      <span>Add your own section</span>
                      <textarea className='custom-input'  placeholder = {'e.g. Technical Skills'} value={customTitle} onChange={(e) =>setCustomTitle(e.target.value)}></textarea>
                    <button className='btn' onClick={handleCustomInfo}>+Add Custom Skill</button>
                </div>
            </div>
        </>
    );
}

export default CvInputContainer;
