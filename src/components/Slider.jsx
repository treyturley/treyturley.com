// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Slider({ images }) {
  if (!images) {
    images = [];
  }

  return (
    <Swiper
      navigation={true}
      pagination={{
        type: 'bullets',
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
    >
      {images.map((image) => (
        <SwiperSlide key={image.description}>
          <div className='swiper-slide-container'>
            <p className='swiper-slide-text'>{image.description}</p>
            <div className='swiper-slide-image-container'>
              <div
                style={{
                  background: `url(${image.imagePath}) center no-repeat`,
                  backgroundSize: 'contain',
                }}
                className='swiper-slide-img-div'
              ></div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
