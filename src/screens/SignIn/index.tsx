import { 
  Container,
  Content,
  Illustration,
  Subtitle,
  Title,
} from './styles'

import { Alert, ActivityIndicator } from 'react-native'

import Background from "../../components/Background"
import ButtonIcon from '../../components/ButtonIcon'

import { useAuth } from '../../hooks/auth'

import illustrationImage from '../../assets/illustration.png' 
import theme from '../../global/styles/theme'

export default function SignIn(){
  const { loading, signIn } = useAuth()
  const { SECONDARY_80, SECONDARY_100 } = theme.COLORS
  
  async function handleSignIn() {
    try {
      await signIn()
    } catch (error) {
      Alert.alert(error)
    }
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

          {
            loading 
            ? <ActivityIndicator color={theme.COLORS.PRIMARY} />
            : <ButtonIcon title='Entrar com Discord' onPress={handleSignIn} />
          }
          
        </Content>

      </Container>
    </Background>
  )
}