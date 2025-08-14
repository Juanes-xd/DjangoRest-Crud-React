import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { TaskFormPage } from './pages/TaskFormPage'
import { TaskPages } from './pages/TaskPages'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TaskPages />} />
          <Route path="/task-create" element={<TaskFormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
