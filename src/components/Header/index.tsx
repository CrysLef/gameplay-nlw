import { BorderlessButton } from 'react-native-gesture-handler'
import { Container, Title } from './styles'
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { ReactNode } from 'react';

import { Feather } from '@expo/vector-icons'
import theme from '../../global/styles/theme';

type Props = {
    title: string;
    action?: ReactNode;
}


export default function Header({ title, action }: Props){
  const navigation = useNavigation()
  const { SECONDARY_80, SECONDARY_100, HEADING } = theme.COLORS

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
          action ? <View>{ action }</View> : <View style={{ width: 24 }} />
        }

    </Container>
  );
}