import styled from 'styled-components/native'
import theme from '../../global/styles/theme'


export const BulletStatus = styled.View`
   width: 8px;
   height: 8px;
   margin-right: 9px;
   border-radius: 4px;
`

export const Container = styled.View`
   width: 100%;
   flex-direction: row;
   align-items: center;
`

export const NameStatus = styled.Text`
   font-family: ${theme.FONTS.TEXT_400};
   font-size: 13px;
   color: ${theme.COLORS.HIGHLIGHT};
`

export const Status = styled.View`
   flex-direction: row;
   align-items: center;
`

export const Username = styled.Text`
   font-family: ${theme.FONTS.TITLE_700};
   font-size: 18px;
   color: ${theme.COLORS.HEADING};
`