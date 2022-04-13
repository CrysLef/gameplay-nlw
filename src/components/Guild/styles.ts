import styled from 'styled-components/native'
import theme from '../../global/styles/theme'


export const Container = styled.TouchableOpacity`
   width: 100%;
   flex-direction: row;
   align-items: center;
   padding: 0 24px;
`

export const Content = styled.View`
   flex: 1;
   justify-content: center;
   margin-left: 20px;
`

export const Title = styled.Text`
   font-family: ${theme.FONTS.TITLE_700};
   font-size: 18px;
   color: ${theme.COLORS.HEADING};
   margin-bottom: 4px;
`

export const Type = styled.Text`
   font-family: ${theme.FONTS.TEXT_400};
   font-size: 13px;
   color: ${theme.COLORS.HIGHLIGHT};
`