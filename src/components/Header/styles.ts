import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import theme from '../../global/styles/theme'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


export const Container = styled(LinearGradient)`
   width: 100%;
   height: 104px;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding-top: ${getStatusBarHeight()}px;
   padding-left: 24px;
   padding-right: 24px;
`

export const Title = styled.Text`
    flex: 1;
    text-align: center;
    font-family: ${theme.FONTS.TITLE_700};
    font-size:20px ;
    color: ${theme.COLORS.HEADING}
`