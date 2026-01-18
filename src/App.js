import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Toaster } from '@/components/ui/sonner';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/getmybima">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;