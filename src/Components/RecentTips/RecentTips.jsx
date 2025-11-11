import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const RecentTips = ({ recentTips }) => {
  return (
    <div className="bg-[#00A97E] py-10 px-4">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Tips</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        modules={[Pagination, Autoplay]}
        className="max-w-2xl mx-auto"
      >
        {recentTips.map((tip, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white text-[#00A97E] p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2">{tip.title}</h3>
              <p className="text-sm mb-1 text-xl font-bold">By: <span className="font-black">{tip.authorName}</span></p>
              <p className="text font-bold mb-1">Content: {tip.content}</p>
              <p className="text font-bold mb-1">👍 {tip.upvotes} upvotes</p>
              <p className="text-sm mb-3 font-bold text-secondary">Posted On: {new Date(tip.createdAt).toLocaleDateString()}</p>
              <button className='btn mb-3 btn-primary'>Preview</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentTips;
