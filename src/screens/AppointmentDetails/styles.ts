import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
   
`

export const Banner = styled.ImageBackground`
   width: 100%;
   height: 234px;
   margin-bottom: 30px;
`

export const BannerContent = styled.View`
   flex: 1;
   justify-content: flex-end;
   padding: 0 24px;
   margin-bottom: 30px;
`

export const Title = styled.Text`
   font-size: 28px;
   font-family: ${theme.FONTS.TITLE_700};
   color: ${theme.COLORS.HEADING};
`

export const Subtitle = styled.Text`
   font-size: 13px;
   font-family: ${theme.FONTS.TEXT_400};
   color: ${theme.COLORS.HEADING};
`

export const Footer = styled.View`
   padding: 20px 24px;
   margin-bottom: ${getBottomSpace()};
`

export const liststyle = StyleSheet.create({
   membersList: {
      marginLeft: 24,
      marginTop: 27,
   }
})