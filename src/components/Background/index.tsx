import { ReactNode } from 'react'

import { LinearGradient } from 'expo-linear-gradient'

import theme from '../../global/styles/theme'

type Props = {
    children: ReactNode;
}


export default function Background({ children } : Props){
    const { SECONDARY_80, SECONDARY_100 } = theme.COLORS
    
  return (
    
    <LinearGradient
    style={{ flex: 1 }}
    colors={[SECONDARY_80, SECONDARY_100]}
    >
        
      { children }
        
        
    </LinearGradient>
  )
}