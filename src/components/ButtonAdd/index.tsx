import { RectButtonProps } from "react-native-gesture-handler"
import { Container } from './styles'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import theme from "../../global/styles/theme"


export default function ButtonAdd({...rest}: RectButtonProps) {
    return (
        <Container {...rest}>
            <MaterialCommunityIcons 
                name='plus'
                color={theme.COLORS.HEADING}
                size={24}
            />
        </Container>
    )
}