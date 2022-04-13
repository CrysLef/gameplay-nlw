import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Input = styled.TextInput`
   width: 48px;
   height: 48px;
   background-color: ${theme.COLORS.SECONDARY_40};
   color: ${theme.COLORS.HEADING};
   border-radius: 8px;
   font-family: ${theme.FONTS.TEXT_400};
   font-size: 13px;
   margin-right: 4px;
   text-align: center;
`