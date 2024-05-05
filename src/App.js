import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Table from './components/Table';
import Soil from './components/Soil';
import Variety from './components/Variety';
import Land from './components/Land';
import Seeds from './components/Seeds';
import Sowing from './components/Sowing';
import Nursery from './components/Nursery';
import Fertilizer from './components/Fertilizer';
import Weed from './components/Weed';
import Irrigation from './components/Irrigation';
import Harvest from './components/Harvest';
import PostHarvest from './components/PostHarvest';

function App() {
  return (
    <div className="App">
      <Hero />
      <Table />
      <Soil/>
      <Variety/>
      <Land/>
      <Seeds/>
      <Sowing/>
      <Nursery/>
      <Fertilizer/>
      <Weed/>
      <Irrigation/>
      <Harvest/>
      <PostHarvest/>

      
      

      
    </div>
  );
}

export default App;
