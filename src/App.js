import useVisualMode from "hooks/useVisualMode";
import plate from "assets/plate.png";
import 'App.css';

export default function App() {
  const { mode, transition, back, history } = useVisualMode("START");

  const random = function() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').toUpperCase();
  };

  const add = function() {
    transition(random());
  };

  const replace = function() {
    transition(random(), true);
  };

  const modeList = history.map((item, i) => <li key={i}>{`${i}`} <img src={plate} alt="plate" width="80" height="14" /> {item} </li>).reverse();

  return (
    <div className="App">
      <div>
        <button onClick={back}>Back</button>
        <button onClick={add}>Transition</button>
        <button onClick={replace}>Replace</button>
      </div>
      <h4>{`${modeList.length - 1}: ${mode}`}</h4>
      <ul> {modeList} </ul>
    </div>
  );
}