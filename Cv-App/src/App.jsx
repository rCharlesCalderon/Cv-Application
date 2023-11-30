import CvInputContainer from './CvInputContainer.jsx'
import CvOutputContainer from './CvOutputContainer.jsx'
import ButtonHeader from './ButtonHeader.jsx';
import Footer from './Footer.jsx';
import './header.css'
import { useState } from 'react';
import Header from './Header.jsx';

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
          <ButtonHeader cData={cData} setCvData={setCvData} />
          <CvInputContainer cData={cData} setCvData={setCvData} />
          <CvOutputContainer cData={cData} setCvData={setCvData} />
          <Footer />
      </>
  );
}

export default App
