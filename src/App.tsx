import React, {useState} from 'react';
import './App.css';
import StateButton from "./components/StateButton";
import InjectCheckbox from "./components/InjectCheckbox";
import ContextCheckbox from "./components/ContextCheckbox";
import PeopleList from "./components/RenderPropsList";
import {MagneticButton} from "./components/MagneticButton";
import FetchTest from "./components/FetchTest";
import ReactMemoTest from "./components/ReactMemoTest";
import TiltTest from "./components/TiltTest";
import CounterReducer from "./components/CounterReducer";
import SidebarContainer from "./components/CustomMenu/SidebarContainer";

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
        // <div style={{height:100, width:100}} data-testid={"magnetic_button"}>
        //     <MagneticButton></MagneticButton>
        // </div>
        // <FetchTest></FetchTest>
        <>
            <SidebarContainer></SidebarContainer>
        </>
    );
}

export default App;
