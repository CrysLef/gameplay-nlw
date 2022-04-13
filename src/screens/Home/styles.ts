import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';

export const Header = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   padding: 0 24px;
   margin-top: ${getStatusBarHeight() + 26}px;
`

export const Matches = (styled.FlatList`
   margin-top: 24px;
   margin-left: 24px;

` as unknown) as typeof FlatList
