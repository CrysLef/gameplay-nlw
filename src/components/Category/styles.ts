import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
   container: {
      width: 104,
      height: 120,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginRight: 8,
   }
})

export const Content = styled.View`
   width: 100px;
   height: 116px;
   background-color: ${theme.COLORS.SECONDARY_40};
   justify-content: space-between;
   align-items: center;
   padding: 7px 0;
`
export const Unchecked = styled.View`
   width: 12px;
   height: 12px;
   background-color: ${theme.COLORS.SECONDARY_100};
   align-self: flex-end;
   margin-right: 7px;
   border-color: ${theme.COLORS.SECONDARY_50};
   border-width: 2px;
   border-radius: 3px;
`

export const Checked = styled.View`
   width: 10px;
   height: 10px;
   background-color: ${theme.COLORS.PRIMARY};
   align-self: flex-end;
   margin-right: 7px;
   border-radius: 3px;
`

export const Title = styled.Text`
   font-family: ${theme.FONTS.TITLE_500};
   color: ${theme.COLORS.HEADING};
   font-size: 15px;
`