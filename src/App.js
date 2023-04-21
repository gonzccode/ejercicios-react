import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import TaskList from './components/PruebaReact/pruebaReact';
import Boostrap01 from './components/PruebaBootstrap/bootstrap01';
import Boostrap02 from './components/PruebaBootstrap/bootstrap02';
import Boostrap03 from './components/PruebaBootstrap/bootstrap03';
import Counter from './components/PruebaAlgoritmo/algoritmo01';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/prueba-react' element={<TaskList/>}/>
            <Route path='/prueba-bootstrap-01' element={<Boostrap01/>}/>
            <Route path='/prueba-bootstrap-02' element={<Boostrap02/>}/>
            <Route path='/prueba-bootstrap-03' element={<Boostrap03/>}/>
            <Route path='/prueba-algoritmo-01' element={<Counter/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
