
import './App.css';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';
import Comp0 from './Comp0';
import Square from './Shapes/Square';
import Shapes from './Shapes/Shapes';
import Comp5 from './Comp5';

function App() {
  return (
    <div className="App">
      {/* <Comp0/> */}
      <Shapes/>
      {/* <Comp1/>
      <Comp3/>
      <Comp2/>
      <Square/> */}
      <Comp5/>
    </div>
  );
}

export default App;
