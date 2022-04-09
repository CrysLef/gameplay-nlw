import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
   flex-direction: row;
   align-items: center;
`

export const User = styled.View`
    flex-direction: row;
`

export const Greetings = styled.Text`
    font-family: ${theme.FONTS.TITLE_500};
    font-size: 24px;
    color: ${theme.COLORS.HEADING};
    margin-right: 5px;
`

export const Username = styled.Text`
    font-family: ${theme.FONTS.TITLE_700};
    font-size: 24px;
    color: ${theme.COLORS.HEADING}
`

export const Message = styled.Text`
    font-family: ${theme.FONTS.TEXT_400};
    color: ${theme.COLORS.HIGHLIGHT}
`