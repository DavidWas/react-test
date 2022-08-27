import React, {useEffect, useRef, useState} from "react";
import axios from "axios";

const FetchTest = () => {
    const [todos, setTodos] = useState<any[]>([]);
    const isSubscribedRef = useRef(false);

    useEffect(():any => {
        isSubscribedRef.current = true;
        const fetchTodos = async () => {
            const todoResponse = await axios.get("https://jsonplaceholder.typicode.com/todos");
            if (isSubscribedRef.current) {
                setTodos(todoResponse.data);
            }
        }
        fetchTodos().catch(console.error);
        return () => isSubscribedRef.current = false;
    }, []);
    
    return (
        <ul>
            {todos && todos.map((item:any) => 
                <li key={item.id}>{item.id}: {item.title}</li>
            )}
        </ul>
    ) 
    
    
}

export default FetchTest;