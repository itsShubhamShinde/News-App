import './App.css';
import AddDetails from './Components/AddDetails';
import Display from './Components/Display';
import HomePage from './Components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}>
            <Route index element={<AddDetails/>}></Route>
            <Route path='display' element={<Display/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
