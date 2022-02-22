import './App.css';
import './index.scss'
import circle1 from './img/circle1.png'
import circle2 from './img/circle2.png'
import Header from './components/Header';
import Footer from './components/Footer';
import Connect from './pages/Connect';
import About from './pages/About';
import Projects from './pages/Projects';
import Cursor from './components/Cursor';
import {Route, Switch} from "react-router-dom"

function App() {

  const URL = "https://damp-springs-44229.herokuapp.com/"

  return (
    <div className="App">
      <div className="background">
        <div className="circlebg">
          <div className="circlebg1"><img src={circle1} alt="" /></div>
          <div className="circlebg2"><img src={circle2} alt="" /></div>
        </div>
      </div>

      <Cursor />
      <Header />
      <Switch>
        <Route exact path="/">
          <About URL={URL} />
        </Route>

        <Route path="/projects">
          <Projects URL={URL} />
        </Route>

        <Route path="/connect">
          <Connect />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
