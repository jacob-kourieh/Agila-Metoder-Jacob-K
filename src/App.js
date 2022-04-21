import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Start from './pages/Start';
import AgilaTeam from './pages/AgilaTeam';
import ScrumCeremonier from './pages/ScrumCeremonier';
import ScrumConcept from './pages/ScrumConcept';

function App() {
  return (
    <Router>

      <Header />

      <main className="App">
        <Routes>
          <Route path="/" element={<Start />} > </Route>
          <Route path="/agila-team" element={<AgilaTeam />}> </Route>
          <Route path="/scrum-ceremonier" element={<ScrumCeremonier />}> </Route>
          <Route path="/scrum-concept" element={<ScrumConcept />}> </Route>
        </Routes>
      </main>

    </Router>
  );
}

export default App;
