import Top from './components/Top';
import Slick from './components/Slick';
import Main from './components/Main';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Top />
      <Slick />
      <span className='ml-[370px] text-4xl font-bold'>McDonald's LIVE</span>
      <Main />
      <div className='w-[1160px]  flex justify-center items-center mx-auto py-[80px]'>
        <div className=''>
          <img src='./images/circle.png' alt='더보기' />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
