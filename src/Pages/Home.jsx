import React from 'react'
import Section from '../Components/Sections/Section/Section'
import SectionEmail from '../Components/Sections/SectionEmail/SectionEmail'
import Sectioninfo from './../Components/Sections/SectionInfo/SectionInfo.jsx';
import SwiperComponent from '../Components/Center/SwiperComponent/SwiperComponent.jsx';
import Categories from '../Components/Center/Categories/Categories.jsx';
import Villa from '../Components/Villa/Villa.jsx';

import FooterList from './../Components/Footer/Footer.jsx';
import Register from './Register.jsx';
const Home = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <SwiperComponent />
            <Categories />
            <Section />
            <Villa />
            <SectionEmail />
            {/* <SectionEma il/> */}
            <Sectioninfo />
        </div>
    )
}

export default Home