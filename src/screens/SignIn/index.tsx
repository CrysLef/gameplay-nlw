import { 
  Container,
  Illustration,
  Content,
  Title,
  Subtitle
} from './styles'

import ButtonIcon from '../../components/ButtonIcon'

import illustrationImage from '../../assets/illustration.png' 
import { useNavigation } from '@react-navigation/native'

export default function SignIn(){
  const navigation = useNavigation()
  
  function handleSignIn() {
    navigation.navigate('Home')  
  }

  
  return (
    <Container>
    
        <Illustration 
        source={illustrationImage}
        resizeMode='stretch' 
        />
      <Content>

        <Title>
        Conecte-se {'\n'}
        e organize suas {'\n'}
        jogatinas
        </Title>

        <Subtitle>
        Crie grupos para jogar seus games {`\n`}
        favoritos com seus amigos
        </Subtitle>

        <ButtonIcon 
        title='Entrar com Discord'
        onPress={handleSignIn}
        />

      </Content>

    </Container>
  );
}