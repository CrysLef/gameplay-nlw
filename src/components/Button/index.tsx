import {
    styles,
    Title,
} from './styles';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

type Props = RectButtonProps & {
    title: string;
}


export default function ButtonIcon({ title, ...rest } : Props){
  return (
    <RectButton
        style={styles.container}
        {...rest}
    >
        <Title>
            { title }
        </Title>
    </RectButton>
  )
}