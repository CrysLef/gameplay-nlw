import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import theme from '../../global/styles/theme'

export const Container = styled(RectButton)`
    width: 100%;
    height: 56px;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.COLORS.PRIMARY};
    border-radius: 8px;
`

export const Title = styled.Text`
    flex: 1;
    font-size: 15px;
    font-family: ${theme.FONTS.TEXT_500};
    text-align: center;
    color: ${theme.COLORS.HEADING};
`