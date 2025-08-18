
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TaskFormPage } from './pages/TaskFormPage';
import { TaskPages } from './pages/TaskPages';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './auth/AuthContext';
import PrivateRoute from './auth/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className='container mx-auto'>
          <Navigation />
          <Routes>
            <Route path='/' element={<Navigate to="/tasks" />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/tasks" element={<PrivateRoute><TaskPages /></PrivateRoute>} />
            <Route path="/task-create" element={<PrivateRoute><TaskFormPage /></PrivateRoute>} />
            <Route path="/task/edit/:id" element={<PrivateRoute><TaskFormPage /></PrivateRoute>} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
