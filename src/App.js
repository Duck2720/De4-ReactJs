import Banner from './components/Banners/Banner';
import Brand from './components/Brand/Brand';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.js'
import Slick from './components/Slick/Slick';
import Slider from './components/Slider/Slider';
import TopsellerList from './components/Topseller/TopsellerList/TopsellerList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-content'>
          <Slider />
          <div className='page-main'>
            <div className='container'>
                <Banner/>
                <TopsellerList/>
                <Slick/>
                <Brand/>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
