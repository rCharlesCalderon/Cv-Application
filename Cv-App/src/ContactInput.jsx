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
          <Input label="Full Name" onChange={ handleNameInfo} value={cData.name}/>
          <Input label="Email" onChange={handleEmailInfo} value={cData.Email}/>
          <Input label="Phone Number" onChange={handlePhoneInfo} value={cData.PhoneNumber}/>
          <Input label="Address" onChange={handleAddressInfo} value={cData.Address}/>
        </div>
      </>
    );
}
export default ContactInput