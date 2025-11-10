import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const HeroCarousel = ({ featured }) => {
  return (
    <div className="w-full h-[80vh]">
      <Swiper
        modules={[Pagination, Autoplay]} // Removed Navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={featured.length > 3} // Avoid loop warning
        className="h-full"
      >
        {featured && featured.length > 0 ? (
          featured.map((item) => (
            <SwiperSlide key={item._id}>
              <div
                className="relative h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              >
                {/* Optional gradient overlay for readability */}
                <div className="absolute inset-0 bg-black/40 z-0"></div>
                <div className="relative z-10">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-4 drop-shadow-lg">
                    {item.title}
                  </h1>
                  <p className="text-sm sm:text-lg max-w-xl opacity-90">
                    {item.description}
                  </p>
                  <a href={`/challenges/${item._id}`} aria-label={`Join ${item.title} challenge`}>
                    <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md font-semibold transition">
                      Join now
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="h-full flex items-center justify-center text-white text-xl">
            No featured challenges available.
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
