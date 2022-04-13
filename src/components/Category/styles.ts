import styled from 'styled-components/native'
import theme from '../../global/styles/theme'
import { LinearGradient } from 'expo-linear-gradient'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
   width: 104px;
   height: 120px;
   justify-content: center;
   align-items: center;
   margin-right: 8px;
   border-radius: 8px;
`

export const Content = styled(LinearGradient)`
   width: 100px;
   height: 116px;
   justify-content: space-between;
   align-items: center;
   padding: 20px 0px;
   border-radius: 8px;
`

export const Checked = styled.View`
   position: absolute;
   top: 7px;
   right: 7px;
   width: 10px;
   height: 10px;
   background-color: ${theme.COLORS.PRIMARY};
   border-radius: 3px;
`

export const Unchecked = styled.View`
   position: absolute;
   top: 7px;
   right: 7px;
   width: 12px;
   height: 12px;
   background-color: ${theme.COLORS.SECONDARY_100};
   border-color: ${theme.COLORS.SECONDARY_50};
   border-width: 2px;
   border-radius: 3px;
`

export const Title = styled.Text`
   font-family: ${theme.FONTS.TITLE_700};
   font-size: 15px;
   color: ${theme.COLORS.HEADING};
   margin-top: 15px;
`