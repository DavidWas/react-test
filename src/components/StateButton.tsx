import { useReducer } from 'react';

interface CountState {
    count: number
}

interface CountAction {
    type: string;
    payload: number
}

function reducer (state:CountState, action:CountAction) {
    const {type, payload} = action;
    switch (type) {
        case "increment":
            return {
                ...state,
                count:state.count+payload
            }
        default:
            return state;
    }
}

const initialState:CountState = {
    count:0
}

const StateButton =  () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return ( 
        <>
            <button onClick={()=>dispatch({type:'increment', payload:2 })}>Click Me</button>
            <h2>{state.count}</h2>
        </>
        
    )
}

export default StateButton;