import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'
import { ReactNode } from 'react'

import theme from '../../global/styles/theme'

type Props = LinearGradientProps & {
  children: ReactNode;
}


export default function Background({ children }: Props){
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