import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import theme from '../../global/styles/theme'

export const Container = styled(RectButton)`
    width: 100%;
    height: 56px;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.COLORS.PRIMARY};
    border-radius: 8px;
`

export const Icon = styled.Image`
    width: 24px;
    height: 18px;
`

export const IconWrapper = styled.View`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    border-right-width: 1px;
    border-color: ${theme.COLORS.LINE};
`

export const Title = styled.Text`
    flex: 1;
    font-family: ${theme.FONTS.TEXT_500};
    font-size: 15px;
    text-align: center;
    color: ${theme.COLORS.HEADING};
`