import {
    styles,
    Title,
    IconWrapper,
    Icon
} from './styles';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';


import discordImage from '../../assets/discord.png'

type Props = RectButtonProps & {
    title: string;
}


export default function ButtonIcon({ title, ...rest } : Props){
  return (
    <RectButton
        style={styles.container}
        {...rest}>
        <IconWrapper>
            <Icon source={discordImage} />
        </IconWrapper>
        <Title>
            { title }
        </Title>
    </RectButton>
  )
}