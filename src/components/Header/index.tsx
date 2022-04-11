import { ReactNode } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { Container, Title } from './styles';

import {
  View,
  Text
} from 'react-native';
import theme from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string;
    action?: ReactNode;
}


export default function Header({ title, action }: Props){
  const { SECONDARY_80, SECONDARY_100, HEADING } = theme.COLORS
  const navigation = useNavigation()

  function handleGoBack(){
    navigation.goBack()
  }
  

  return (
    <Container colors={[SECONDARY_80, SECONDARY_100]}>
        <BorderlessButton onPress={handleGoBack}>
            <Feather
                name='arrow-left'
                size={24}
                color={HEADING}
            />
        </BorderlessButton>

        <Title>{ title }</Title>

        {
            action && <View>{ action }</View>
        }

    </Container>
  );
}