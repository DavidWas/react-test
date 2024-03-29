import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {scalePoint} from "framer-motion/types/projection/geometry/delta-apply";

const MenuItem = styled(motion.div)`
  width: 120px;
  height: 45px;
  border-color: black;
  border-style: solid;
  border-radius: 10px;
  margin: 10px 10px 10px 10px;
  position: relative;
  box-shadow: 2px 2px 5px black;
`

const MenuText = styled.span`
  color: #00222d;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 1.2rem;
`

interface IProps extends React.PropsWithChildren<any> {
    title:String;
    isSelected:Boolean;
}

const SidebarItem = ({title, isSelected}:IProps) => {
    return <MenuItem 
        animate={{
            boxShadow: isSelected ?  "0px 0px 0px #005b6a" : "2px 2px 5px #005b6a",
            backgroundColor: isSelected ? "#19c2d1FF":"#19c2d100"
        }}
        whileHover={{
            scale: isSelected ? 1.0 : 1.05
        }}
    >
        <MenuText>{title}</MenuText>
    </MenuItem>
}

export default SidebarItem