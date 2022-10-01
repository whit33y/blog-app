import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact';
import ItCategory from './pages/ItCategory';
import TechnologyCategory from './pages/TechnologyCategory';
import LifestyleCategory from './pages/LifestyleCategory';
import HealthCategory from './pages/HealthCategory';
import AddPost from './pages/AddPost';
import PostDetails from './pages/PostDetails';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/it' element={<ItCategory />} />
        <Route path='/tech' element={<TechnologyCategory />} />
        <Route path='/lifestyle' element={<LifestyleCategory />} />
        <Route path='/health' element={<HealthCategory />} />
        <Route path='/add' element={<AddPost />} />
        <Route path='/post/:id' element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
