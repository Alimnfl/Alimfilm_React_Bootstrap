import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';
import './style/landingPage.css';

function App() {
  return (
    <div>
      {/*Intro*/}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/*Akhir Intro*/}

      <div className="trending">
        <Trending />
      </div>

      <div className="superHero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
