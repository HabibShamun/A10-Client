import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router';

const HeroCarousel = ({ featured }) => {
  return (
    <div className="w-full h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={featured.length > 3}
        className="h-full"
      >
        {featured && featured.length > 0 ? (
          featured.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="relative w-full h-full">
                {/* Responsive image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent z-10"></div>

                {/* Text content */}
                <div className="relative z-20 w-full max-w-3xl px-4 sm:px-8 md:px-16 h-full flex flex-col justify-center text-white">
                  <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight drop-shadow">
                    {item.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg mb-6 max-w-xl opacity-90 font-semibold">
                    {item.description}
                  </p>
                  <a href={`/challenges/${item._id}`} aria-label={`Join ${item.title} challenge`}>
                    <Link to={`/challengedetails/${item._id}`}
                      className="px-6 py-3 rounded-md font-semibold transition text-white"
                      style={{ backgroundColor: '#00A97E' }}
                    >
                      View
                    </Link>
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
