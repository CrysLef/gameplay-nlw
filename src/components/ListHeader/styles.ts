import styled from 'styled-components/native'
import theme from '../../global/styles/theme'

export const Container = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   padding: 0 24px;
`

export const Subtitle = styled.Text`
    font-family: ${theme.FONTS.TEXT_400};
    font-size: 13px;
    color: ${theme.COLORS.HIGHLIGHT};
`

export const Title = styled.Text`
    font-family: ${theme.FONTS.TITLE_700};
    font-size: 18px;
    color: ${theme.COLORS.HEADING};
`