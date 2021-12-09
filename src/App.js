import './App.css';
/* pages */
import Homepage from './pages/Homepage';
import Dashboardpage from './pages/Dashboardpage';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/dashboard' element={<Dashboardpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
