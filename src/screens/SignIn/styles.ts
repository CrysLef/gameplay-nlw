import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Illustration = styled.Image`
    width: 100%;
    height: 360px;
` 

export const Content = styled.View`
    margin-top: -40px;
    padding: 0 50px;
    width: 100%;
`

export const Title = styled.Text`
    color: ${theme.COLORS.HEADING};
    font-size: 40px;
    font-family: ${theme.FONTS.TITLE_700};
    text-align: center;
    line-height: 40px;
    margin-bottom: 16px;
`

export const Subtitle = styled.Text`
    color: ${theme.COLORS.HEADING};
    font-size: 15px;
    font-family: ${theme.FONTS.TEXT_400};
    text-align: center;
    line-height: 25px;
    margin-bottom: 64px;
`
