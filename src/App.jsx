import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './pages/home/Home';
import { About } from './pages/about/about';
import { WorkMain } from './pages/work/work';
import { ResearchWork } from './pages/research/research';
import { ProgrammingWork } from './pages/programming/programming';
import { WritingWork } from './pages/writing/writing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/work" element={<WorkMain />} />
        <Route path="/programming" element={<ProgrammingWork />} />
        <Route path="/research" element={<ResearchWork />} />
        <Route path="/writing" element={<WritingWork />} />
        <Route path="/about" element={<About />} />
        <Route path="/" index element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App
