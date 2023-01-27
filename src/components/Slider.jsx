// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';

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
      modules={[Navigation, Pagination, A11y]}
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
