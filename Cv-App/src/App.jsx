import CvInputContainer from './CvInputContainer.jsx'
import CvOutputContainer from './CvOutputContainer.jsx'
import Footer from './Footer.jsx';
import './header.css'
import { useState } from 'react';
import Header from './Header.jsx';
import CvData from './CvData.jsx';

function App() {
  //Contact Info
const [cData,setCvData] = useState( {
  name: "",
  Email: "",
  PhoneNumber: "",
  Address: "",
  Experience: [],
  Education: [],
  CustomSkills: [],
})

//

                                                                                                   //setJob, setEmployer, setEndDate, setCityInfo, setDescription;
  return (
    <>
      <Header />
      <CvInputContainer cData={cData} setCvData={setCvData} />
      <CvOutputContainer cData={cData} setCvData={setCvData} />
      <Footer />
    </>
  );
}

export default App
