import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/page/Home'
import NasaPhoto from './components/page/NasaPhoto'
import NavBar from './components/page/NavBar'

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/nasaphoto' element={<NasaPhoto/>}/> 
        </Routes>     
      </div>
    </Router>
  );
}

export default App;
