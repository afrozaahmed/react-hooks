import logo from './logo.svg';
import './App.css';
import Counter from './useState/Counter';
import String from './useState/String';
import ReducerTutorial from './useReducer/ReducerTutorial';
import EffectTutorial from './useEffect/EffectTutorial';
import RefTutorial from './useRef/RefTutorial';
import LayoutEffectTutorial from './useLayoutEffect/LayoutEffectTutorial';
import ImperativeHandle from './UseImperativeHandle/ImperativeHandle';
import ContextTutorial from './UseContext/ContextTutorial';
import MemoTutorial from './UseMemo/MemoTutorial';
import CallBackTutorial from './UseCallback/CallbackTutorial';

function App() {
  return (
    <div className="App">
        <CallBackTutorial />
    </div>
  );
}

export default App;
