import {
    Container,
    Greetings,
    Message,
    User,
    Username,
} from './styles'
import { View, ViewProps } from 'react-native'

import Avatar from '../Avatar'
import { useAuth } from '../../hooks/auth'


export default function Profile({...rest}: ViewProps){
  const { user } = useAuth()

  return (
    <Container {...rest}>
        <Avatar urlImage={ user.avatar }/>
        <View>
            <User>
                <Greetings>Olá, </Greetings>
                <Username>{ user.firstName }</Username>
            </User>
            <Message>Hoje é dia de vitória</Message>
        </View>
    </Container>
  );
}