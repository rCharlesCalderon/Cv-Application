import CvInputContainer from './CvInputContainer.jsx'
import CvOutputContainer from './CvOutputContainer.jsx'
import { useState } from 'react';
import CvData from './CvData.jsx';

function App() {
  //Contact Info
const [inputName, setNameData] = useState(CvData.Name);
const [inputEmail, setEmailData] = useState(CvData.Email);
const [inputPhone, setPhoneData] = useState(CvData.PhoneNumber);
const [inputAddress, setAddressData] = useState(CvData.Address);

const [inputJob, setJobData] = useState('');

//


  return (
   <>
   <CvInputContainer setName={setNameData} setEmail={setEmailData} setPhone={setPhoneData} setAddress={setAddressData} setJob={setJobData} />
   <CvOutputContainer nameData={inputName} emailData={inputEmail} phoneData={inputPhone} addressData={inputAddress} jobData={inputJob}/>
   </>
    
  )
}

export default App
