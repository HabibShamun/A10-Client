import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLeaf, FaThumbsUp, FaCalendarAlt } from 'react-icons/fa';

const RecentTips = ({ recentTips }) => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="py-12 px-4 bg-gradient-to-b from-[#f0fdf4] via-[#e0f7ec] to-[#f9fafb]">
      <h2
        className="text-4xl font-bold text-center text-gray-800 mb-10 tracking-tight flex items-center justify-center gap-2"
        data-aos="fade-up"
      >
        <FaLeaf className="text-green-500" /> Recent Eco Tips
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Autoplay]}
        className="max-w-3xl mx-auto"
      >
        {recentTips.map((tip, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-500 mb-1">
                By <span className="font-medium text-gray-700">{tip.authorName}</span>
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">{tip.content}</p>

              <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
                <span className="flex items-center gap-1">
                  <FaThumbsUp className="text-green-500" /> {tip.upvotes}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-green-500" /> {new Date(tip.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentTips;
