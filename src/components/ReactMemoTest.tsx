import React, {useState} from "react";

const ReactMemoTest = () => {
    console.debug("rendering Parent")
    const [count,setCount] = useState(0);
    return(
        <div>
            <button onClick={()=>setCount(previousCount => previousCount +1)}>
                <Child></Child>
            </button>
        </div>
    )
}

const Child = React.memo(() => {
    console.debug("rendering Child");
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Child</h1>
            <div onClick={()=>setCount(prevState => prevState+1)}>{count}</div>
        </>

    )
})

export default ReactMemoTest;