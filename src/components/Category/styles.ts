import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';

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

export const Content = styled(LinearGradient)`
   width: 100px;
   height: 116px;
   border-radius: 8px;
   justify-content: space-between;
   align-items: center;
   padding: 20px 0px;
`
export const Unchecked = styled.View`
   position: absolute;
   top: 7px;
   right: 7px;
   width: 12px;
   height: 12px;
   background-color: ${theme.COLORS.SECONDARY_100};
   border-color: ${theme.COLORS.SECONDARY_50};
   border-width: 2px;
   border-radius: 3px;
`

export const Checked = styled.View`
   position: absolute;
   top: 7px;
   right: 7px;
   width: 10px;
   height: 10px;
   background-color: ${theme.COLORS.PRIMARY};
   border-radius: 3px;
`

export const Title = styled.Text`
   font-family: ${theme.FONTS.TITLE_700};
   color: ${theme.COLORS.HEADING};
   font-size: 15px;
   margin-top: 15px;
`