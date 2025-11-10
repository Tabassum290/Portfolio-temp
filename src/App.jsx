import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <main >
       <Home/>
      </main>
      <Footer/>
    </div>
  );
};

export default App;