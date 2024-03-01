import './App.css';
import {Routes,Route} from 'react-router-dom'
import Calculate from './components/Calculate/Calculate';

function App() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Calculate/>} />
      </Routes>
    </div>
  );
}

export default App;
