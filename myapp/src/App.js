import './App.css';
import {Routes,Route} from 'react-router-dom'
import Calculate from './components/Calculate/Calculate';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='' element={<Landing/>}/>
        <Route path='/calculate' element={<Calculate/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
