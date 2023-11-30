import "./EducationForm.css"
import Input from "./Input.jsx"
function EducationForm({eduObj,cData,setCvData}){
    function handleSchoolInfo(e){
        const schoolIndex = cData.Education.findIndex((obj) => obj.id === eduObj.id)
        const schoolData = [...cData.Education]
        schoolData[schoolIndex].school = e.target.value
        setCvData({...cData,Education:schoolData})
        console.log(cData)
      
    }

    function handleDegreeInfo(e){
        const degreeIndex = cData.Education.findIndex((obj) => obj.id === eduObj.id)
        const degreeData = [...cData.Education]
        degreeData[degreeIndex].degree = e.target.value
        setCvData({...cData,Education:degreeData})
        console.log(cData)
    }
    function handleStartDateInfo(e){
         const startDateIndex = cData.Education.findIndex((obj) => obj.id === eduObj.id)
        const startDateData = [...cData.Education]
        startDateData[startDateIndex].startDate = e.target.value
        setCvData({...cData,Education:startDateData})
         console.log(cData);
    }

    function handleEndDateInfo(e){
 const endDateIndex = cData.Education.findIndex((obj) => obj.id === eduObj.id)
        const endDateData = [...cData.Education]
        endDateData[endDateIndex].endDate = e.target.value
        setCvData({...cData,Education:endDateData})
         console.log(cData);
    }
    function handleCityInfoInfo(e){
         const cityIndex = cData.Education.findIndex((obj) => obj.id === eduObj.id)
        const cityData = [...cData.Education]
        cityData[cityIndex].city = e.target.value;
        setCvData({ ...cData, Education: cityData });
         console.log(cData);
    }

    function handledescriptionInfo(e){
        const descriptionIndex = cData.Education.findIndex((obj) => obj.id === eduObj.id)
        const descriptionData = [...cData.Education]
        descriptionData[descriptionIndex].description = e.target.value;
        setCvData({...cData,Education:descriptionData})
         console.log(cData);
    }
    return (
        <>
            <div className="education-container ">
                <Input label={'School'} onChange={handleSchoolInfo} value={eduObj.school}/>
                <Input label={'Degree'} onChange={handleDegreeInfo} value={eduObj.degree}/>
                <Input label={'Start Date'} onChange={handleStartDateInfo} value={eduObj.startDate} />
                <Input label={'End Date '} onChange={handleEndDateInfo} value={eduObj.endDate} />
                <Input label={'City'} onChange={handleCityInfoInfo} value={eduObj.city}/>
                <label>
                    Description<textarea onChange={handledescriptionInfo} value={eduObj.description}></textarea>
                </label>
            </div>
        </>
    );
}

export default EducationForm