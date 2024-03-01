import './App.css';
import {Routes,Route,useLocation} from 'react-router-dom'
import Calculate from './components/Calculate/Calculate';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import About from './components/About/About';

function App() {
  const {pathname} = useLocation()
  return (
    <div>
      {pathname==='/'||<Nav/>}
      <Routes>
        <Route path='' element={<Landing/>}/>
        <Route path='/calculate' element={<Calculate/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
