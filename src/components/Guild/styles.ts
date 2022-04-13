import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
   width: 100%;
   flex-direction: row;
   align-items: center;
   padding: 0 24px;
`

export const Content = styled.View`
   flex: 1;
   justify-content: center;
`

export const Title = styled.Text`
   font-family: ${theme.FONTS.TITLE_700};
   color: ${theme.COLORS.HEADING};
   font-size: 18px;
   margin-bottom: 11px;
`

export const Type = styled.Text`
   font-family: ${theme.FONTS.TEXT_400};
   color: ${theme.COLORS.HIGHLIGHT};
   font-size: 13px;
   margin-bottom: 24px;
`