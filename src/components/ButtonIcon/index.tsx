import { RectButtonProps } from 'react-native-gesture-handler'

import {
    Container,
    Icon,
    IconWrapper,
    Title,
} from './styles'

import discordImage from '../../assets/discord.png'

type Props = RectButtonProps & {
    title: string;
}


export default function ButtonIcon({ title, ...rest }: Props){
  return (
    <Container {...rest}>
        <IconWrapper>
            <Icon source={discordImage} />
        </IconWrapper>
        <Title>
            { title }
        </Title>
    </Container>
  )
}