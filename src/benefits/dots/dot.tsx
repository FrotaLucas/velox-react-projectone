import React from 'react'
import { Item } from './style'

interface DotProps {
  DotToggle: boolean;
  onClick: () => void;
  children: React.ReactNode
}

const Dot: React.FC<DotProps> = ({DotToggle,onClick,children}) => {

  return (
    <Item toggle={DotToggle} onClick={onClick}>
      {children}
    </Item>

  )
}
export default Dot;