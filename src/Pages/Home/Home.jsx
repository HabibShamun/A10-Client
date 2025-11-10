import React, { useEffect, useState } from 'react';
import HeroCarousel from '../../Components/HeroCarousel/HeroCarousel';
import useAxios from '../../Hooks/useAxios';
import LiveStatistics from '../../Components/LiveStatistics/LiveStatistics';

const Home = () => {
    const axios=useAxios()
    const [featured,setFeatured]=useState([])
    useEffect(()=>{
        axios('/challenges?limit=3').then(data=>{
            setFeatured(data.data)
        })
    },[axios])
    return (
        <div>
           
            <HeroCarousel featured={featured}></HeroCarousel>
            <LiveStatistics></LiveStatistics>
        </div>
    );
};

export default Home;