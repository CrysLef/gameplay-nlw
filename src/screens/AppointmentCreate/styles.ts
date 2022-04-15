import styled from 'styled-components/native'
import theme from '../../global/styles/theme'


export const CaracteresLimit = styled.Text`
   font-family: ${theme.FONTS.TEXT_400};
   font-size: 13px;
   color: ${theme.COLORS.HIGHLIGHT};
`

export const Column = styled.View`
   flex-direction: row;
   align-items: center;
`

export const Container = styled.KeyboardAvoidingView`
   flex: 1;  
`

export const Divider = styled.Text`
   font-size: 15px;
   font-family: ${theme.FONTS.TEXT_500};
   color: ${theme.COLORS.HIGHLIGHT};
   margin-right: 4px;
`

export const Field = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   margin-top: 30px;
`

export const Footer = styled.View`
   margin: 20px 0 56px 0;
`

export const Form = styled.View`
   padding: 0 24px;
   margin-top: 32px;
`

export const Img = styled.View`
   width: 64px;
   height: 68px;
   background-color: ${theme.COLORS.SECONDARY_40};
   border-color: ${theme.COLORS.SECONDARY_50};
   border-width: 1px;
   border-radius: 8px;
`

export const Label = styled.Text`
   font-size: 18px;
   font-family: ${theme.FONTS.TITLE_700};
   color: ${theme.COLORS.HEADING};
`

export const Select = styled.View`
   width: 100%;
   height: 68px;
   flex-direction: row;
   align-items: center;
   padding-right: 25px;
   border-color: ${theme.COLORS.SECONDARY_50};
   border-width: 1px;
   border-radius: 8px;
   overflow: hidden;
`

export const SelectBody = styled.View`
   flex: 1;
   align-items: center;
`