import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroCarousel from '../../Components/HeroCarousel/HeroCarousel';
import useAxios from '../../Hooks/useAxios';
import LiveStatistics from '../../Components/LiveStatistics/LiveStatistics';
import GoGreen from '../../Components/GoGreen/GoGreen';
import ActiveChallenges from '../../Components/ActiveChallenges/ActiveChallenges';
import RecentTips from '../../Components/RecentTips/RecentTips';
import UpcomingEvents from '../../Components/UpcomingEvents/UpcomingEvents';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';

const Home = () => {
  const axios = useAxios();

  const [featured, setFeatured] = useState([]);
  const [activeChallenges, setActiveChallenges] = useState([]);
  const [recentTips, setRecentTips] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const fetchAll = async () => {
      try {
        const [featuredRes, activeRes, tipsRes, eventsRes] = await Promise.all([
          axios('/challenges?limit=3'),
          axios('/challenges?limit=6&status=running'),
          axios('/tips?limit=5'),
          axios('/events'),
        ]);

        setFeatured(featuredRes.data);
        setActiveChallenges(activeRes.data);
        setRecentTips(tipsRes.data);
        setEvents(eventsRes.data);
      } catch (error) {
        console.error('Error loading homepage data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [axios]);

  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-medium text-gray-500">
        Loading homepage content...
      </div>
    );
  }

  return (
    <div>
      <div data-aos="fade-up">
        <HeroCarousel featured={featured} />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <LiveStatistics />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <ActiveChallenges ActiveChallenges={activeChallenges} />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <RecentTips recentTips={recentTips} />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <UpcomingEvents events={events} />
      </div>
      <div data-aos="fade-up" data-aos-delay="500">
        <GoGreen />
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        <HowItWorks />
      </div>
    </div>
  );
};

export default Home;
