import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <section id='about' className='app__aboutus app__bg flex__center section__padding'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <p className='headtext__cormorant'>About Us</p>
        <img src={images.spoon} alt="about_spoon" />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia ea corrupti fugit dicta iste quidem minus. Repudiandae, quaerat voluptatem explicabo quia consectetur similique qui impedit aliquid laboriosam a id.</p>
        <button className='custom__button'>Know more</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <p className='headtext__cormorant'>About History</p>
        <img src={images.spoon} alt="about_spoon" />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia ea corrupti fugit dicta iste quidem minus. Repudiandae, quaerat voluptatem explicabo quia consectetur similique qui impedit aliquid laboriosam a id.</p>
        <button className='custom__button'>Know more</button>
      </div>
    </div>
  </section>
);

export default AboutUs;
