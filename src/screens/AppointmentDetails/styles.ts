import styled from 'styled-components/native'
import theme from '../../global/styles/theme'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { FlatList, ImageBackground } from 'react-native'


export const Banner = (styled.ImageBackground`
   width: 100%;
   height: 234px;
` as unknown) as typeof ImageBackground

export const BannerContent = styled.View`
   flex: 1;
   justify-content: flex-end;
   padding: 0 24px;
   margin-bottom: 30px;
`

export const Footer = styled.View`
   padding: 20px 24px;
   margin-bottom: ${getBottomSpace()};
`

export const MembersList = (styled.FlatList`
   margin-left: 24px;
   margin-top: 27px;

` as unknown) as typeof FlatList

export const Title = styled.Text`
   font-size: 28px;
   font-family: ${theme.FONTS.TITLE_700};
   color: ${theme.COLORS.HEADING};
`

export const Subtitle = styled.Text`
   font-size: 13px;
   font-family: ${theme.FONTS.TEXT_400};
   color: ${theme.COLORS.HEADING};
   line-height: 21px;
`