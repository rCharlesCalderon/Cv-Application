import Input from "./Input";
import CvData from "./CvData";
function ContactInput({setName,setEmail,setNumber,setAddress}){
    

   
    function handleNameInfo(e) {
      setName(e.target.value);
      CvData.Name = e.target.value;
    }
    function handleEmailInfo(e) {
      setEmail(e.target.value);
      CvData.Email = e.target.value;
    }
    function handlePhoneInfo(e) {
      setNumber(e.target.value);
      CvData.PhoneNumber = e.target.value;
    }
    function handleAddressInfo(e) {
      setAddress(e.target.value);
      CvData.Address = e.target.value;
    }
    return (
      <>
        <div className="contact-inputs">
          <Input label="Full Name" onChange={handleNameInfo} />
          <Input label="Email" onChange={handleEmailInfo} />
          <Input label="Phone Number" onChange={handlePhoneInfo} />
          <Input label="Address" onChange={handleAddressInfo} />
        </div>
      </>
    );
}
export default ContactInput