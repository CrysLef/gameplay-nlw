import { Bar, Container, Overlay } from './styles';
import { Modal, ModalProps, TouchableWithoutFeedback } from 'react-native'

import Background from '../Background'
import { ReactNode } from 'react'
import theme from '../../global/styles/theme'

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}


export default function ModalView({ children, closeModal, ...rest }: Props){
    const { SECONDARY_80, SECONDARY_100 } = theme.COLORS

    return (
        <Modal
            transparent
            animationType='slide'
            statusBarTranslucent
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <Overlay>
                    <Container>
                        <Background colors={[SECONDARY_80, SECONDARY_100]}>
                            <Bar />
                            { children }
                        </Background>
                    </Container>
                </Overlay>
            </TouchableWithoutFeedback>

        </Modal>
    )
}