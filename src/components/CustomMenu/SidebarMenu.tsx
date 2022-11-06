import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";

const SidebarContainer = styled.div`
  border-radius: 25px;
  background-color: #00fff1;
  display: flex;
  flex-direction: column;
`

const SidebarMenu = () => {
    const [selectedItem, setSelectedItem] = useState<null|number>(null);
    
    const menuItems = ["Home","Settings","Contact"]
    
    const handleClick = (index:number) => {
        setSelectedItem(index);
    }
    
    return( 
    <>
        <span style={{color:"black", textAlign:"center", fontSize:15}}>
            Selected Item: {selectedItem}
        </span>
        <SidebarContainer>

            {menuItems.map((title, index) => {
                return <SidebarItem onClick={() => handleClick(index)} title={title} key={index} isSelected={index == selectedItem}></SidebarItem>
            })}
        </SidebarContainer>
    </>

    )
}

export default SidebarMenu