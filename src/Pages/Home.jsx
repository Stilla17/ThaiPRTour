import React from 'react'
import Section from '../Components/Sections/Section/Section'
import SectionEmail from '../Components/Sections/SectionEmail/SectionEmail'
import Sectioninfo from './../Components/Sections/SectionInfo/SectionInfo.jsx';
const Home = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Section />
            <SectionEmail />
            <Sectioninfo />
        </div>
    )
}

export default Home