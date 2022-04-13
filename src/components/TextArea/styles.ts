import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Input = styled.TextInput`
   width: 100%;
   height: 95px;
   background-color: ${theme.COLORS.SECONDARY_40};
   color: ${theme.COLORS.HEADING};
   border-radius: 8px;
   font-family: ${theme.FONTS.TEXT_400};
   font-size: 13px;
   margin-right: 4px;
`