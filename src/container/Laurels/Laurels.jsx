import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const Laurels = () => {
  const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
    <div className='app__laurels_awards-card'>
      <img src={imgUrl} alt="" />
      <div className='app__laurels_awards-card_content'>
        <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>
        <p className='p__cormorant'>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <section id='awards' className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_info'>
        <SubHeading title="Awards & recognition" />
        <p className='headtext__cormorant'>Our Laurels</p>
        <div className='app__laurels_awards'>
          {data.awards.map((award, index) => (
            <AwardCard award={award} key={award.title+index} />
          ))}
        </div>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.laurels} alt="Laurels" />
      </div>
    </section>
  )
};

export default Laurels;
