
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PatientManagement from './components/PatientManagement';
import PatientPortal from './components/PatientPortal';
import AppointmentManagement from './components/AppointmentManagement';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/patientManagement' element={<PatientManagement />} />
        <Route path='/patientPortal' element={<PatientPortal />} />
        <Route path='/appintmentMangement' element={<AppointmentManagement />} />

      </Routes>
    </Router>
  )
}