import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Home } from './pages/Home';
import { About } from './pages/About'
import { Contact } from './pages/Contact';
import { ItCategory } from './pages/ItCategory';
import { TechnologyCategory } from './pages/TechnologyCategory';
import { LifestyleCategory } from './pages/LifestyleCategory';
import { HealthCategory } from './pages/HealthCategory';
import { AddPost } from './pages/AddPost';
import { PostDetails } from './pages/PostDetails';
import { NotFound } from './pages/NotFound';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { AuthProvider } from './context/Auth';
import { ProtectedRoute } from './components/ProtectedRoute';
import { queryClient } from './utils/queryClient';
import { QueryClientProvider } from 'react-query';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/*' element={<NotFound />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/it' element={<ItCategory />} />
            <Route path='/tech' element={<TechnologyCategory />} />
            <Route path='/lifestyle' element={<LifestyleCategory />} />
            <Route path='/accesstools' element={<Login />} />
            <Route path='/signup' element={<ProtectedRoute><Signup /></ProtectedRoute>} />
            <Route path='/health' element={<HealthCategory />} />
            <Route path='/add' element={<ProtectedRoute><AddPost /></ProtectedRoute>} />
            <Route path='/post/:id' element={<PostDetails />} />
          </Routes>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
}

export { App };
