import React, {useState} from "react";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import {motion} from "framer-motion";

const SidebarContainer = styled.div`
  border-radius: 25px;
  background: rgb(7,153,210);
  background: linear-gradient(90deg, rgba(7,153,210,1) 0%, rgba(9,232,201,1) 100%);
  display: flex;
  flex-direction: column;
`

const Frame = styled(motion.div)`
    position: relative;
  top: 55px;
  left: 10px;
  width: 200px;
  height: 45px;
  border-style: solid;
  border-width: 2px;
  border-color: red;
`

const SidebarMenu = () => {
    const [selectedItem, setSelectedItem] = useState<null|number>(null);
    
    const menuItems = ["Home","Settings","Contact"]
    
    return( 
    <>
        <span style={{color:"black", textAlign:"center", fontSize:15}}>
            Selected Item: {selectedItem}
        </span>
        {/*<Frame animate={{y: (selectedItem ?? 0) * 65}}></Frame>*/}
        <SidebarContainer>
            {menuItems.map((title, index) => {
                return <div onClick={()=>setSelectedItem(index)}>
                    <SidebarItem
                        onClick={()=>setSelectedItem(index)}
                        title={title}
                        key={index}
                        isSelected={index == selectedItem}></SidebarItem>
                </div> 
      
            })}
        </SidebarContainer>
    </>

    )
}

export default SidebarMenu