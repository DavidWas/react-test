import React, {useEffect, useState} from "react";
import axios from "axios";

const FetchTest = () => {
    const [todos, setTodos] = useState([]);
    
    useEffect(():any => {
        let isSubscribed = true;
        const fetchTodos = async () => {
            const todoResponse = await axios.get("https://jsonplaceholder.typicode.com/todos");
            if (isSubscribed) {
                setTodos(todoResponse.data);
            }
        }
        fetchTodos().catch(console.error);
        return () => isSubscribed = false;
    }, []);
    
    return (
        <ul>
            {todos && todos.map((item:any) => 
                <li key={item.userId}>{item.title}</li>
            )}
        </ul>
    ) 
    
    
}

export default FetchTest;