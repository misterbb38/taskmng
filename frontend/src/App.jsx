import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/index';
import Register from './components/auth/register';
import Login from './components/auth/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </Router>
  );
};
 
export default App;
