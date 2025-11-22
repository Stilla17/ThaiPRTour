import React from 'react'
import Header from '../Components/Header/Header'
import Section from '../Components/Sections/Section/Section'
// import SectionEmail from '../Components/Sections/SectionEmail/SectionEmail'
import Sectioninfo from './../Components/Sections/SectionInfo/SectionInfo.jsx';
import FooterList from './../Components/Footer/Footer.jsx';
import Register from '../Components/Register/Register.jsx';
const Home = () => {
    return (
        <div>
            <Header />
            <Section />
            {/* <SectionEmail/> */}
            <Sectioninfo />
            <FooterList />
            <Register/>
        </div>
    )
}

export default Home