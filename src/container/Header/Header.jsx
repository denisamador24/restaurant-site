import { SubHeading } from "../../components"
import { images } from "../../constants";
import './Header.css';

const Header = () => (
  <header id='home' className='app__header app__wrapper section__padding'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Sit Tellus Loborits Sed Senetus Vivamus Molestie. Condimentum Volutpat Morbi Facillisis Quam Scelerisque Sapiem. Et, Penatibus Aliquam Amet Tellus
      </p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="" />
    </div>
  </header>
);

export default Header;
