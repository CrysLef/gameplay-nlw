import styled from 'styled-components/native'
import theme from '../../global/styles/theme'
import { LinearGradient } from 'expo-linear-gradient'


export const Category = styled.Text`
    font-family: ${theme.FONTS.TEXT_400};
    font-size: 13px;
    color: ${theme.COLORS.HIGHLIGHT};
    margin-right: 24px;
`

export const Container = styled.View`
   width: 100%;
   flex-direction: row;
   align-self: center;
`

export const Content = styled.View`
    flex: 1;
`

export const Date = styled.Text`
    font-family: ${theme.FONTS.TEXT_500};
    font-size: 13px;
    color: ${theme.COLORS.HEADING};
    margin-left: 7px;
`

export const DateInfo = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Footer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const GuildIconContainer = styled(LinearGradient)`
    width: 64px;
    height: 68px;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    border-radius: 8px;
`

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;
`

export const PlayerInfo = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Player = styled.Text`
    font-family: ${theme.FONTS.TEXT_500};
    font-size: 13px;
    margin-left: 7px;
    margin-right: 24px;
`

export const Title = styled.Text`
    font-family: ${theme.FONTS.TITLE_700};
    color: ${theme.COLORS.HEADING};
`