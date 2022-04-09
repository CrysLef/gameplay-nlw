import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
   width: 100%;
   flex-direction: row;
   align-self: center;
`
export const Content = styled.View`
    flex: 1;
`

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;
`

export const Title = styled.Text`
    font-family: ${theme.FONTS.TITLE_700};
    color: ${theme.COLORS.HEADING};
`

export const Category = styled.Text`
    font-family: ${theme.FONTS.TEXT_400};
    color: ${theme.COLORS.HIGHLIGHT};
    font-size: 13px;
    margin-right: 24px;
`

export const Footer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const DateInfo = styled.View`
    flex-direction: row;
    align-items: center;
`

export const PlayerInfo = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Date = styled.Text`
    font-family: ${theme.FONTS.TEXT_500};
    color: ${theme.COLORS.HEADING};
    font-size: 13px;
    margin-left: 7px;
`

export const Player = styled.Text`
    font-family: ${theme.FONTS.TEXT_500};
    font-size: 13px;
    margin-left: 7px;
    margin-right: 24px;
`