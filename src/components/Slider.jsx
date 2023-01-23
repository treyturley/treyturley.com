// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function Slider({ images }) {
  if (!images) {
    images = [];
  }

  // TODO: fix css for mobile devices

  return (
    <Swiper navigation={true} modules={[Navigation]}>
      {images.map((image) => (
        <SwiperSlide key={image.description}>
          <div className='swiper-slide-container'>
            <p className='swiper-slide-text'>{image.description}</p>
            <div
              style={{
                background: `url(${image.location}) center no-repeat`,
                // backgroundPositionY: '42px',
                backgroundSize: 'contain',
              }}
              className='swiper-slide-div'
            >
              <a href={image.location}></a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
