import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import './App.css'

function App() {
 return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
 );
}
export default App;