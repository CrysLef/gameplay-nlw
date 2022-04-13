import styled from 'styled-components/native';
import theme from '../../global/styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: theme.COLORS.PRIMARY,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export const Title = styled.Text`
    flex: 1;
    color: ${theme.COLORS.HEADING};
    font-size: 15px;
    text-align: center;
    font-family: ${theme.FONTS.TEXT_500};
`

export const IconWrapper = styled.View`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    border-right-width: 1px;
    border-color: ${theme.COLORS.LINE};
`

export const Icon = styled.Image`
    width: 24px;
    height: 18px;
`