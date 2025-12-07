import React from 'react'
import Section from '../Components/Sections/Section/Section'
import SectionEmail from '../Components/Sections/SectionEmail/SectionEmail'
import Sectioninfo from './../Components/Sections/SectionInfo/SectionInfo.jsx';
import SwiperComponent from '../Components/Center/SwiperComponent/SwiperComponent.jsx';
import Categories from '../Components/Center/Categories/Categories.jsx';

import FooterList from './../Components/Footer/Footer.jsx';
import Register from './Register.jsx';
const Home = () => {
    return (
        <div className='max-w-[1300px] mx-auto'>
            {/* <Categories /> */}
            <SwiperComponent />
            <Section />
            <SectionEmail />
            <Sectioninfo />
            {/* <SectionEma il/> */}
        </div>
    )
}

export default Home