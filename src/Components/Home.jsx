import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Service from "./Service";

const Home = () => {
    return (
        <div >
         <Navbar/>
         <main className='max-w-7xl m-auto'>
               <Banner/>
           <About/>
            <Service/>
            <Education/>
          <Contact/>
         </main>
         <Footer/>
        </div>
    );
};

export default Home;