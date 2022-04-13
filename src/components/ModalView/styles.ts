import styled from 'styled-components/native'
import theme from '../../global/styles/theme'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


export const Bar = styled.View`
   width: 39px;
   height: 2px;
   align-self: center;
   background-color: ${theme.COLORS.SECONDARY_40};
   margin-top: 13px;
   margin-bottom: 24px;
   border-radius: 2px;
`

export const Container = styled.View`
   flex: 1;
   margin-top: ${getStatusBarHeight() + 26}px;
`

export const Overlay = styled.View`
   flex: 1;
   background-color: ${theme.COLORS.OVERLAY};
`