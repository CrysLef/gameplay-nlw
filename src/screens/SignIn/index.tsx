import { 
  Container,
  Content,
  Illustration,
  Subtitle,
  Title,
} from './styles'

import Background from "../../components/Background"
import ButtonIcon from '../../components/ButtonIcon'

import { useNavigation } from '@react-navigation/native'

import illustrationImage from '../../assets/illustration.png' 
import theme from '../../global/styles/theme'

export default function SignIn(){
  const navigation = useNavigation()
  const { SECONDARY_80, SECONDARY_100 } = theme.COLORS
  
  function handleSignIn() {
    navigation.navigate('Home')  
  }

  
  return (
    <Background colors={[SECONDARY_80, SECONDARY_100]}>

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
    </Background>
  )
}