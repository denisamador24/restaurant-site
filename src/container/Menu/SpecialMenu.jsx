import { data, images} from '../../constants'
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <section id='menu' className='app__specialMenu flex__center section__padding'>
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits your Palatte" />
      <p className="headtext__cormorant">Today's Special</p>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine'>
        <p className='app__specialMenu-menu_heading'>Winw & Bear</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map( (wine, index) => (
            <MenuItem 
              key={wine.title+index}
              title={wine.title}
              tags={wine.tags}
              price={wine.price}
            />
          ))}
        </div>
      </div>
      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="menu" />
      </div>
      <div className='app__specialMenu-menu_coktails'>
        <p className='app__specialMenu-menu_heading'>Coktails</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map( (coktail, index) => (
            <MenuItem 
            key={coktail.title+index}
            title={coktail.title}
            tags={coktail.tags}
            price={coktail.price}
          />
          ))}
        </div>
      </div>
    </div>
    <div className='' style={{ marginTop: '15px' }}>
      <button className='custom__button'>View More</button>
    </div>
  </section>
);

export default SpecialMenu;
