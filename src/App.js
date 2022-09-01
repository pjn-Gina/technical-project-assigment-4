import './App.css';
import About from './pages/About/About';
import Portofolio from './pages/Portofolio/Portofolio';
import Blog from './pages/Blog/Blog';
import MyWebsite from './pages/MyWebsite/MyWebsite';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MyWebsite/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/portofolio' element={<Portofolio/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    </div>
  );
}

export default App;
