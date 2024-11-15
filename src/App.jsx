import './App.css'
import Header from "./components/1-Header/Header";
import Hero from "./components/2-Hero/Hero";
import Companies from "./components/3-Companies/Companies";
import Residencies from "./components/4-Residencies/Residencies";
import Value from "./components/5-Value/Value";
import Contact from "./components/6-Contact/Contact";
import GetStarted from "./components/7-GetStarted/GetStarted";
import Footer from './components/8-Footer/Footer';

function App() {
  return (
    <div className="App">

    <div className="white-gradient"/>
      <Header />
      <Hero/>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
