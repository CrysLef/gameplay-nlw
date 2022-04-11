import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
   width: 100%;
   flex-direction: row;
   align-items: center;
`

export const Username = styled.Text`
   font-family: ${theme.FONTS.TITLE_700};
   color: ${theme.COLORS.HEADING};
   font-size: 18px;
`

export const Status = styled.View`
   flex-direction: row;
   align-items: center;
`

export const NameStatus = styled.Text`
   font-family: ${theme.FONTS.TEXT_400};
   color: ${theme.COLORS.HIGHLIGHT};
   font-size: 13px;
`

export const BulletStatus = styled.View`
   width: 8px;
   height: 8px;
   border-radius: 4px;
   margin-right: 9px;
`