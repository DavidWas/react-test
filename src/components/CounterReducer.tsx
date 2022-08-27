import React, {useReducer} from "react";

const counterReducer = (state:StateType, action:ActionType):StateType => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + action.payload
            }
        case "DECREMENT":
            return {
                ...state,
                count: state.count - action.payload
            }
    }
    return state;
}

type StateType = {
    count: number
}

type ActionType = {
    type:string,
    payload:any
}


const CounterReducer = ({initialValue = 0, step = 1}:{initialValue:number, step:number}) => {
    const initialState:StateType = {
        count: initialValue
    }
    const [state, dispatch] = useReducer(counterReducer, initialState);
    return(
    <div>
        <button type={"button"} onClick={()=>dispatch({type:"INCREMENT", payload: step})}>Increment</button>
        <button type={"button"} onClick={()=>dispatch({type:"DECREMENT", payload: step})}>Decrement</button>
        <br/>
        <span>{state.count}</span>
    </div>
    )
}

export default CounterReducer;