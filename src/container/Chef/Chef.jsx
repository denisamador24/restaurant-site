import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <section className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <p>What we believe in</p>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="Quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <p className='p__opensans'>Voluptate ratione, hic, quo, dolorem ipsam magni dicta id odit nam culpa quam animi. Voluptate, ullam et laudantium blanditiis vero maiores deserunt.</p>
      </div>
      <div className='app__chef-sing'>
        <p>Kevin Luo</p>
        <p className='P__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="Sign" />
      </div>
    </div>
  </section>
);

export default Chef;
 