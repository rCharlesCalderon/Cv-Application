
import './SkillForm.css'
function SkillForm({skillObj,cData, setCvData}){
    function handleSkillInfo(e){
        const skillIndex = cData.CustomSkills.findIndex((skill) => skill.id === skillObj.id);
       const skillData =  [...cData.CustomSkills]
       skillData[skillIndex].description = e.target.value
       setCvData({...cData, CustomSkills:skillData})
       console.log(cData)
    }
return (
    <>
    <div className='skill-form-container'>
        <span>Description</span>
        <textarea onChange={handleSkillInfo}></textarea>
        </div>
    </>
);
}

export default SkillForm