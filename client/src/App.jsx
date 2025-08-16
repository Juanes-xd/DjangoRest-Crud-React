import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { TaskFormPage } from './pages/TaskFormPage'
import { TaskPages } from './pages/TaskPages'
import { Navigation } from './components/Navigation'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='container mx-auto'>
          <Navigation />
          <Routes>
            <Route path='/' element={<Navigate to="/tasks" />} />
            <Route path="/tasks" element={<TaskPages />} />
            <Route path="/task-create" element={<TaskFormPage />} />
            <Route path="/task/edit/:id" element={<TaskFormPage />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
