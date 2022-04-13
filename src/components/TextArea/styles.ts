import styled from 'styled-components/native'
import theme from '../../global/styles/theme'

export const Input = styled.TextInput`
   width: 100%;
   height: 95px;
   font-family: ${theme.FONTS.TEXT_400};
   font-size: 13px;
   color: ${theme.COLORS.HEADING};
   background-color: ${theme.COLORS.SECONDARY_40};
   padding: 16px 16px 0 16px ;
   margin-right: 4px;
   border-radius: 8px;
   border-width: 1px;
   border-color: ${theme.COLORS.SECONDARY_50};
`