import styled from "styled-components/native"
import theme from "../../global/styles/theme"

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Content = styled.View`
    width: 100%;
    padding: 0 50px;
    margin-top: -40px;
`

export const Illustration = styled.Image`
    width: 100%;
    height: 360px;
` 


export const Subtitle = styled.Text`
    font-family: ${theme.FONTS.TEXT_400};
    font-size: 15px;
    text-align: center;
    line-height: 25px;
    color: ${theme.COLORS.HEADING};
    margin-bottom: 64px;
`

export const Title = styled.Text`
    font-family: ${theme.FONTS.TITLE_700};
    font-size: 40px;
    text-align: center;
    line-height: 40px;
    color: ${theme.COLORS.HEADING};
    margin-bottom: 16px;
`