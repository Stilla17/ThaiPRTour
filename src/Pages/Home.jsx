import React from 'react'
import Section from '../Components/Sections/Section/Section'
import SectionEmail from '../Components/Sections/SectionEmail/SectionEmail'
import Sectioninfo from './../Components/Sections/SectionInfo/SectionInfo.jsx';
import FooterList from './../Components/Footer/Footer.jsx';
const Home = () => {
    return (
        <div className=''>
            <Header />
            <Section />
            <SectionEmail/>
            <Sectioninfo />
        </div>
    )
}

export default Home