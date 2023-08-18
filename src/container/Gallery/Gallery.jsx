import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';
import { useRef } from 'react';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <section className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <p className='headtext__cormorant'>Photo Galery</p>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est suscipit debitis, corporis velit aliquam, nulla dolor accusamus sed delectus nihil placeat culpa ullam assumenda blanditiis quisquam perferendis error explicabo ut!
        </p>
        <button className='custom__button'>View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map( (image, index) => (
            <div key={'gallery_image-' + index} className='app__gallery-images_card flex__center'>
              <img src={image} alt="gallery image" />
              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={ () => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={ () => scroll('rigth')}/>
        </div>
      </div>
    </section>
  )
};

export default Gallery;
