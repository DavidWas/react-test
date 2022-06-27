import React, {useState} from "react";

const Checkbox = ({children}:any) => {
    const [checked, setChecked] = useState(false);
    return React.Children.map(children, (child) => {
        return React.cloneElement(child, {checked, setChecked});
    });
}

const Label = ({checked, setChecked, children}:{checked:boolean, setChecked:Function, children:any}) => {
    return <label onClick={()=> setChecked(!checked)}>{children}</label>
}

const Input = ({checked, setChecked}:{checked:boolean, setChecked:Function}) => {
    return <input type={"checkbox"} checked={checked} onChange={(e)=>setChecked((state:boolean)=>!state)}/>
}

const InjectCheckbox = () => {
    const defaultValues = {
        checked:false,
        setChecked:() =>{}
    }
    return <Checkbox>
        <Label {...defaultValues}>Test Label</Label>
        <Input {...defaultValues}/>
    </Checkbox>
}

export default InjectCheckbox;