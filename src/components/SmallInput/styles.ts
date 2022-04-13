import styled from 'styled-components/native'
import theme from '../../global/styles/theme'

export const Input = styled.TextInput`
   width: 48px;
   height: 48px;
   font-family: ${theme.FONTS.TEXT_400};
   font-size: 13px;
   text-align: center;
   color: ${theme.COLORS.HEADING};
   background-color: ${theme.COLORS.SECONDARY_40};
   margin-right: 4px;
   border-radius: 8px;
   border-width: 1px;
   border-color: ${theme.COLORS.SECONDARY_50};
`