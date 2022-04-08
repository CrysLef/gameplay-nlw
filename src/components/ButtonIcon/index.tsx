import {
    Container,
    Title,
    IconWrapper,
    Icon
} from './styles';

import { TouchableOpacityProps } from 'react-native';

import discordImage from '../../assets/discord.png'

type Props = TouchableOpacityProps & {
    title: string;
}


export default function ButtonIcon({ title, ...rest } : Props){
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