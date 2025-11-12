import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Service from "./Service";

const Home = () => {
    return (
        <div className='max-w-7xl m-auto'>
            <Banner/>
           <About/>
            <Service/>
            <Education/>
          <Contact/>
        </div>
    );
};

export default Home;