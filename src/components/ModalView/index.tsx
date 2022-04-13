import { Container, Overlay, Bar } from './styles';

import { Modal, ModalProps } from 'react-native';

import Background from '../Background'
import theme from '../../global/styles/theme';
import { ReactNode } from 'react';

type Props = ModalProps & {
    children: ReactNode;
}


export default function ModalView({ children, ...rest }: Props){
    const { SECONDARY_80, SECONDARY_100 } = theme.COLORS


  return (
    <Modal
        transparent
        animationType='slide'
        {...rest}
    >
        <Overlay>
            <Container>
                <Background colors={[SECONDARY_80, SECONDARY_100]}>
                    <Bar />
                    { children }
                </Background>
            </Container>
        </Overlay>

    </Modal>
  );
}