import {
    Container,
    User,
    Greetings,
    Username,
    Message
} from './styles';

import Avatar from '../Avatar';

import { View, ViewProps } from 'react-native';

export default function Profile({...rest}: ViewProps){
  return (
    <Container {...rest}>
        <Avatar urlImage='https://github.com/CrysLef.png'/>
        <View>
            <User>
                <Greetings>Olá, </Greetings>
                <Username>Crystian</Username>
            </User>
            <Message>Hoje é dia de vitória</Message>
        </View>
    </Container>
  );
}