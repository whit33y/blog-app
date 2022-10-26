import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import { Home } from './pages/home/Home'
import { About } from './pages/home/About'
import { Contact } from './pages/home/Contact'
import { AddPost } from './pages/post/AddPost'
import { PostDetails } from './pages/post/PostDetails'
import { NotFound } from './pages/NotFound'
import { Login } from './pages/auth/Login'
import { Signup } from './pages/auth/Signup'
import { AuthProvider } from './context/Auth'
import { ProtectedRoute } from './components/ProtectedRoute'
import { queryClient } from './utils/queryClient'
import { QueryClientProvider } from 'react-query'
import { RenderPostCategory } from './components/RenderPostCategory'

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
            <Route path='/it' element={<RenderPostCategory category='it' />} />
            <Route path='/tech' element={<RenderPostCategory category='tech' />} />
            <Route path='/lifestyle' element={<RenderPostCategory category='lifestyle' />} />
            <Route path='/health' element={<RenderPostCategory category='health' />} />
            <Route path='/accesstools' element={<Login />} />
            <Route
              path='/signup'
              element={
                <ProtectedRoute>
                  <Signup />
                </ProtectedRoute>
              }
            />
            <Route
              path='/add'
              element={
                <ProtectedRoute>
                  <AddPost />
                </ProtectedRoute>
              }
            />
            <Route path='/post/:id' element={<PostDetails />} />
          </Routes>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  )
}

export { App }
