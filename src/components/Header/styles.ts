import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';


export const Container = styled(LinearGradient)`
   width: 100%;
   height: 104px;
   padding-top: ${getStatusBarHeight()}px;
   padding-left: 24px;
   padding-right: 24px;
   justify-content: center;
   align-items: center;
   flex-direction: row;
`

export const Title = styled.Text`
    flex: 1;
    text-align: center;
    font-family: ${theme.FONTS.TITLE_700};
    font-size:20px ;
    color: ${theme.COLORS.HEADING}
`