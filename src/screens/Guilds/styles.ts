import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
   flex: 1;
   align-items: center;
   padding-top: 24px;
`

export const GuildList = (styled.FlatList`
   width: 100%;

` as unknown) as typeof FlatList