import React, { useEffect, useState } from 'react';
import HeroCarousel from '../../Components/HeroCarousel/HeroCarousel';
import useAxios from '../../Hooks/useAxios';
import LiveStatistics from '../../Components/LiveStatistics/LiveStatistics';
import GoGreen from '../../Components/GoGreen/GoGreen';
import ActiveChallenges from '../../Components/ActiveChallenges/ActiveChallenges';
import RecentTips from '../../Components/RecentTips/RecentTips';
import UpcomingEvents from '../../Components/UpcomingEvents/UpcomingEvents';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';

const Home = () => {
    const axios=useAxios()
    const [featured,setFeatured]=useState([])
    useEffect(()=>{
        axios('/challenges?limit=3').then(data=>{
            setFeatured(data.data)
        })
    },[axios])
    const [activeChallenges,setActiveChallenges]=useState([])
    useEffect(()=>{
        axios('/challenges?limit=6&status=running').then(data=>{
            setActiveChallenges(data.data)
        })
    },[axios])

    const [recentTips,setRecentTips]=useState([])
    useEffect(()=>{
        axios('/tips?limit=5').then(data=>{
            setRecentTips(data.data)
        })
    },[axios])
      const [events,setEvents]=useState([])
    useEffect(()=>{
        axios('/events').then(data=>{
            setEvents(data.data)
        })
    },[axios])
    return (
        <div>
           
            <HeroCarousel featured={featured}></HeroCarousel>
            <LiveStatistics></LiveStatistics>
            <ActiveChallenges ActiveChallenges={activeChallenges}></ActiveChallenges>
            <RecentTips recentTips={recentTips}></RecentTips>
            <UpcomingEvents events={events}></UpcomingEvents>
            <GoGreen></GoGreen>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;