import Input from "./Input"
import CvData from "./CvData";
//pass in a key maybe??????
function ExperienceForm(){
 
    return (
      <>
        <Input label={"Job title"}/>
        <Input label={"Employer"} />
        <Input label={"Start Date"} />
        <Input label={"End Date"} />
        <Input label={"City"} />
        <Input label={"Description"} />
      </>
    );
}
export default ExperienceForm