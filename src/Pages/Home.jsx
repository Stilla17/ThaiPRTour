import React from 'react'
import Header from '../Components/Header/Header'
import Section from '../Components/Sections/Section'
import FooterList from '../Components/Footer/Footer'
import Categories from '../Components/Center/Categories/Categories'
import SwiperComponent from '../Components/Center/SwiperComponent/SwiperComponent'
import './../App.css';


const Home = () => {
    return (
        <div>
        
            <SwiperComponent />
            <Categories />
            <Section />
 
        </div>
    )
}

export default Home