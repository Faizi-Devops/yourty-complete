
import './App.css';
import Cards from './Cards';
import Button from './components/Button';
import Collection from './components/Collection';
import Discount from './components/Discount';
import Dropdown from './components/Dropdown';
import Eyescard from './components/Eyescard';
import Featured from './components/Features';
import Footer from './components/Footer';
import Logos from './components/Logos';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Section from './components/Section';
import Shop from './components/Shop';

function App() {
  return (
    <div className='container mx-auto'>
    <div>
      {/* <Newsletter /> */}
      
      
      {/* <Footer /> */}
      {/* <Logos /> */}
      
      {/* <Shop /> */}
      {/* <Navbar /> */}
     
      <Section />
      <Featured />
      <Eyescard />
      
      <Collection />
      <Cards />
      <Button />
      <Shop />
      <div className='pt-[3.5rem]'>
      <Discount />
      </div>
      <div className='pt-[4rem]'>
      <Logos />
      </div>
      <div>
        <Newsletter />

      </div>
      <div>
        <Footer />
      </div>
    
      
       

    </div>
    </div>
  );
}

export default App;
