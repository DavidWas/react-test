import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {scalePoint} from "framer-motion/types/projection/geometry/delta-apply";

const MenuItem = styled(motion.div)`
  width: 200px;
  height: 45px;
  border-color: black;
  border-style: solid;
  border-radius: 10px;
  margin: 10px 10px 10px 10px;
  position: relative;
  box-shadow: 2px 2px 5px black;
`

const MenuText = styled.span`
  color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

interface IProps extends React.PropsWithChildren<any> {
    title:String;
    isSelected:Boolean;
}

const SidebarItem = ({title, isSelected, ...props}:IProps) => {
    return <MenuItem 
        animate={{
            boxShadow: isSelected ?  "0px 0px 0px black" : "2px 2px 5px black",
        }}
        whileHover={{
            scale: 1.05
        }}
        whileTap={{
            scale: 0.95
        }}
    >
        <MenuText>{title}</MenuText>
    </MenuItem>
}

export default SidebarItem