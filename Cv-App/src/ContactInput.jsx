import Input from "./Input";
import CvData from "./CvData";
function ContactInput({cData,setCvData}){
    

   
    function handleNameInfo(e) {
       setCvData({ ...cData, name: e.target.value });
      console.log(cData)
    }
    function handleEmailInfo(e) {
     setCvData({ ...cData, Email: e.target.value });
      
    }
    function handlePhoneInfo(e) {
     setCvData({ ...cData, PhoneNumber: e.target.value });
      console.log(cData);
    }
    function handleAddressInfo(e) {
      setCvData({ ...cData, Address: e.target.value });
    
    }
    return (
      <>
        <div className="contact-inputs">
          <Input label="Full Name" onChange={ handleNameInfo} />
          <Input label="Email" onChange={handleEmailInfo} />
          <Input label="Phone Number" onChange={handlePhoneInfo} />
          <Input label="Address" onChange={handleAddressInfo} />
        </div>
      </>
    );
}
export default ContactInput