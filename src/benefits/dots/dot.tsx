import React from 'react'
import { Item } from './style'

interface DotProps {
  backgroundColor: boolean;
}

const Dot: React.FC<DotProps> = ({backgroundColor}) => {

  return (
    <Item toggle={backgroundColor}>
      Oiee
    </Item>

  )
}
export default Dot;