import './App.css';
import "./styles/styles.css";
import ReactCh from './components/ReactCh';
import Arrays from './components/Arrays';

export default function App() {
  const reachedBottom = ReactCh();
  console.log("reachedBottom", reachedBottom);

  return (
    <div className="App">
      <h1>Bienvenido a los Desafios de React</h1>
      {Arrays.map((index) => (
        <h2 key={index}>{index}</h2>
      ))}
      <footer>&copy; 2022 React challenges.live</footer>
    </div>
  );
}

