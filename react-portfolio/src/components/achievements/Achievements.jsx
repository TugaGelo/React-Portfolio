import React from 'react';
import "./achievement.css";
import { Data } from './Data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Achievements = () => {
  return (
    <section className="achievement container section" id="achievements">
        <h2 className="section__title">Achievements</h2>
        <span className="section__subtitle">What I'm Proudest of</span>

        <Swiper className="achievement__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination, Navigation]}
        >
            {Data.map(({id, image, title, description }) => {
                return (
                    <SwiperSlide className="achievement__card" key={id}>
                        <img src={image} alt="" className="achievement__img" />
                        <h3 className="achievement__name">{title}</h3>
                        <p className="achievement__description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  );
};

export default Achievements;