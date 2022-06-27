import React, {createContext, useContext, useState} from "react";

const CheckboxInterface = createContext<any>(null);

const Checkbox = ({children}:any) => {
    const [checked, setChecked] = useState(false);
    return <CheckboxInterface.Provider value={{checked, setChecked}}>
        {children}
    </CheckboxInterface.Provider>
}

const Label = ({children}:any) => {
    const context = useContext(CheckboxInterface);
    const {checked, setChecked} = context;
    return <label onClick={()=> setChecked(!checked)}>{children}</label>
}

const Input = () => {
    const {checked, setChecked} =useContext(CheckboxInterface);
    return <input type={"checkbox"} checked={checked} onChange={(e)=>setChecked((state:boolean)=>!state)}/>
}

const InjectCheckbox = () => {

    return <Checkbox>
        <Label>Test Label</Label>
        <Input/>
    </Checkbox>
}

export default InjectCheckbox;