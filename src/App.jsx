import CvInputContainer from './CvInputContainer.jsx'
import CvOutputContainer from './CvOutputContainer.jsx'
import ButtonHeader from './ButtonHeader.jsx';
import Footer from './Footer.jsx';
import './header.css'
import { useState } from 'react';
import Header from './Header.jsx';

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

function App() {
    //Data Storage
    const [cData, setCvData] = useState({
        name: '',
        Email: '',
        PhoneNumber: '',
        Address: '',
        Experience: [],
        Education: [],
        CustomSkills: [],
    });

    const printRef = useRef();

    return (
        <>
            <Header />
            <ButtonHeader
                cData={cData}
                setCvData={setCvData}
                printRef={printRef}
            />
            <CvInputContainer cData={cData} setCvData={setCvData} />
            <CvOutputContainer cData={cData} ref={printRef} />
            <Footer />
        </>
    );
}

export default App
