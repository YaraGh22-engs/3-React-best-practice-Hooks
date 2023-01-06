import "./App.css";
import Stateexample from "./component/Stateexample";
import {UseContextProvider} from "./component/UseContextProvider";
import UseCustomHookExample from "./component/UseCustomHookExample";
import UseEffectExample from "./component/useEffectExample";
import UseMemoExample from "./component/UseMemoExample";
import UseReduceExample from "./component/UseReduceExample";
import UseReffExample from "./component/UseReffExample";


function App() {
//5- build useContext hook to catch the context from {ColorContext} then print the {data} in return 
//7- update this 
// const data = useContext(ColorContext)
//to this
 // ChangeData('green')

  return (
    <div className="App">
    <h1>Hello from App</h1>
        <Stateexample/>
        <UseEffectExample />
        <UseReffExample/>
        <UseContextProvider/>
        <UseMemoExample />
        <UseReduceExample/>
        <UseCustomHookExample/>
         
    </div>
  );
}

export default App;
