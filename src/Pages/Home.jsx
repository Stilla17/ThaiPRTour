import React from 'react'
import Header from '../Components/Header/Header'
import Section from '../Components/Sections/Section/Section'
import SectionEmail from '../Components/Sections/SectionEmail/SectionEmail'
import Sectioninfo from './../Components/Sections/SectionInfo/SectionInfo.jsx';
const Home = () => {
    return (
        <div>
            <Header />
            <Section />
            {/* <SectionEmail/> */}
            <Sectioninfo/>
        </div>
    )
}

export default Home