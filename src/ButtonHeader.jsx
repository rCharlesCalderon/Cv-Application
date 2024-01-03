import './ButtonHeader.css'
import { useReactToPrint } from 'react-to-print';
import CvOutputContainer from './CvOutputContainer';
import { func } from 'prop-types';
function ButtonHeader({ cData, setCvData }) {
    function handleSampleData() {
        const exp = {
            jobTitle: 'News Anchorman',
            company: 'KVWN Channel 4',
            employer: 'Edward Harken',
            startDate: '1974',
            city: 'San Deigo',
            endDate: '2013',
            description: `As the Lead Anchor for KVWN Channel 4 News Team,my role was at the forefront of one of San Diego's premier news broadcasts.Combining journalistic acumen with an unmistakable flair for entertainment, I led a dynamic team dedicated to delivering the latest and most compelling stories to our viewers.`,
            id: crypto.randomUUID(),
        };
        const edu = {
            school: 'Herald University of Broadcasting Excellence',
            degree: 'Bachelor of Arts in Journalism',
            startDate: '1960',
            endDate: '1964',
            city: 'San Deigo',
            description: 'BLOOD,SWEAT AND TEARS',
            id: crypto.randomUUID(),
        };
        setCvData({
            ...cData,
            name: 'Ron Burgundy',
            PhoneNumber: '(323) 461-0100',
            Email: 'RonAnchorman@gmail.com',
            Address: 'San Deigo,California',
            Experience: [exp],
            Education: [edu],
            CustomSkills: [],
        });
    }

    function handleClear() {
        setCvData({
            ...cData,
            name: '',
            Email: '',
            PhoneNumber: '',
            Address: '',
            Experience: [],
            Education: [],
            CustomSkills: [],
        });
    }

    function handlePrint() {
        prompt('Will make the print button work later sorry friend :,(');
    }
    return (
        <>
            <div className="btn-container">
                <button onClick={handleSampleData}>Load Sample</button>
                <button onClick={handleClear}>Clear</button>
                <button onClick={handlePrint}>Print</button>
            </div>
        </>
    );
}

export default ButtonHeader