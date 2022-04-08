import { 
  Container,
  Illustration,
  Content,
  Title,
  Subtitle
} from './styles'

import ButtonIcon from '../../components/ButtonIcon'

import illustrationImage from '../../assets/illustration.png' 

export default function SignIn(){
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
        activeOpacity={0.7}
        />

      </Content>

    </Container>
  );
}