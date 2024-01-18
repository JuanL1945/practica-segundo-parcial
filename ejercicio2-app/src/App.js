import './App.css';
import BarraProgreso from './components/BarraProgeso';


function App() {

  return (
    <div className="App">
      <h1>BARRA DE PROGRESO</h1>
      <p>Cree una barra de progreso que debería llenarse según el valor del porcentaje de entrada.</p>
      <BarraProgreso />
    </div>
  );
}

export default App;
