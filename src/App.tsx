import React, {useState} from 'react';
import './App.css';
import StateButton from "./components/StateButton";
import InjectCheckbox from "./components/InjectCheckbox";
import ContextCheckbox from "./components/ContextCheckbox";
import PeopleList from "./components/RenderPropsList";
import {MagneticButton} from "./components/MagneticButton";

function App() {
    const [state, setState] = useState({
        counter:0,
        counter2:1
    })
    
    return (
        // <div>
        //     <StateButton/>
        //     <InjectCheckbox/>
        //     <ContextCheckbox/>
        //     <PeopleList/>
        //    
        //     <h1 onClick={()=> {
        //         setState((oldState)=> {
        //             return {
        //                 ...oldState,
        //                 counter: oldState.counter +1
        //             }
        //
        //         })
        //     }}>{state.counter} {state.counter2}</h1>
        // </div>
        <div style={{height:100, width:100}}>
            <MagneticButton ></MagneticButton>
        </div>
    );
}

export default App;
