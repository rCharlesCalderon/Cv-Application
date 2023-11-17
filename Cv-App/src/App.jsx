import CvInputContainer from './CvInputContainer.jsx'
import CvOutputContainer from './CvOutputContainer.jsx'
import Footer from './Footer.jsx';
import './header.css'
import { useState } from 'react';
import Header from './Header.jsx';
import CvData from './CvData.jsx';

function App() {
  //Contact Info
const [inputName, setNameData] = useState(CvData.Name);
const [inputEmail, setEmailData] = useState(CvData.Email);
const [inputPhone, setPhoneData] = useState(CvData.PhoneNumber);
const [inputAddress, setAddressData] = useState(CvData.Address);
//Experience Info
const [expBtnCount, setExpBntCount] = useState(0);
const [inputJob, setJobData] = useState('');
const [inputEmployer,setEmployer] = useState('')
const [inputStart,setStartDate] = useState('')
const [inputEndDate,setEndDate] = useState('')
const[inputCity,setCity] = useState('')
const [inputDescription, setDescription] = useState("");

//

                                                                                                   //setJob, setEmployer, setEndDate, setCityInfo, setDescription;
  return (
    <>
       <Header/>
       <CvInputContainer setName = {setNameData} setEmail = {setEmailData} setNumber = {setPhoneData} setAddress = {setAddressData} setJob={setJobData} setEmployer={setEmployer} setStartDate = {setStartDate} setEndDate={setEndDate} setCity ={setCity} setDescription={setDescription} setExpBntCount={setExpBntCount} expBtnCount={expBtnCount}/>
       <CvOutputContainer nameData = {inputName} emailData = {inputEmail} phoneData = {inputPhone} addressData = {inputAddress} jobData={inputJob} employerData={inputEmployer} setStartDate = {inputStart} setEndDate = {inputEndDate} cityData = {inputCity} setDescription = {inputDescription} expBtnCount = {expBtnCount}/>
       <Footer/>
    </>
  );
}

export default App
