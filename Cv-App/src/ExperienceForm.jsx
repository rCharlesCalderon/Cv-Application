import Input from "./Input"
function ExperienceForm({expObj,cData, setCvData}){
  function handleJobInfo(e) {

    const currentIndex = cData.Experience.findIndex((obj) => obj.id === expObj.id);
    const newExp = [...cData.Experience]
    newExp[currentIndex].jobTitle = e.target.value
    setCvData({...cData, Experience:newExp })
    console.log(cData)
  }
  function handleEmployerInfo(e) {
  const currentIndex = cData.Experience.findIndex((obj) => obj.id === expObj.id);
    const newExp = [...cData.Experience]
    newExp[currentIndex].employer = e.target.value
    setCvData({...cData, Experience:newExp })
    console.log
  
  }
  function handleStartDateInfo(e) {
     const currentIndex = cData.Experience.findIndex((obj) => obj.id === expObj.id);
     const newStartDate = [...cData.Experience]
     newStartDate[currentIndex].startDate = e.target.value
    setCvData({...cData,Experience:newStartDate})
 
  }
  function handleEndDateInfo(e) {
     const currentIndex = cData.Experience.findIndex((obj) => obj.id === expObj.id);
     const newEndDate = [...cData.Experience]
     newEndDate[currentIndex].endDate = e.target.value
    setCvData({...cData,Experience:newEndDate})
  }
  function handleCityInfo(e) {
      const currentIndex = cData.Experience.findIndex((obj) => obj.id === expObj.id);
    const newExp = [...cData.Experience]
    newExp[currentIndex].city = e.target.value
    setCvData({...cData, Experience:newExp })
  }
  function handleDescriptionInfo(e) {
      const currentIndex = cData.Experience.findIndex((obj) => obj.id === expObj.id);
    const newExp = [...cData.Experience]
    newExp[currentIndex].description = e.target.value
    setCvData({...cData, Experience:newExp })
  }
 
    return (
      <>
        <div className="experience-input-container">
          
         <div className="job-title">  <Input label={"Job title"} onChange={handleJobInfo} /> </div>
        <div className="employer-input"> <Input label={"Employer"} onChange={handleEmployerInfo} /> </div> 
        <div className="start-date-input">  <Input label={"Start Date"}  onChange={handleStartDateInfo}/> </div>
         <div className="end-date-input">  <Input label={"End Date"} onChange={handleEndDateInfo} /> </div>
         <div className="city-input"> <Input label={"City"} onChange={handleCityInfo}/> </div>
          <div className="description-input"> 
          <label>Description</label>
            <textarea onChange={handleDescriptionInfo} ></textarea>
           </div>
        </div>
      </>
    );
}
export default ExperienceForm