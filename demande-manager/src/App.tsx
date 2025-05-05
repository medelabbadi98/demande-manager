import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdateDemandeForm from './components/UpdateDemandeForm';
import Home from './Home'; // affichage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update/:demandeId" element={<UpdateDemandeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
