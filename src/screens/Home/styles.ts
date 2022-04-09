import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Header = styled.View`
   width: 100%;
   padding: 0 24px;
   flex-direction: row;
   justify-content: space-between;
   margin-top: ${getStatusBarHeight() + 26}px;
`

export const Content = styled.View`
   margin-top: 42px;
`
export const flatstyle = StyleSheet.create({
   matches: {
      marginTop: 24,
      marginLeft: 24,
   }
})
