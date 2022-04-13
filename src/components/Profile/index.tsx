import {
    Container,
    Greetings,
    Message,
    User,
    Username,
} from './styles'
import { View, ViewProps } from 'react-native'

import Avatar from '../Avatar'


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