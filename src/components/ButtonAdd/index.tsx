import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import theme from "../../global/styles/theme";
import { styles } from './styles'



export default function ButtonAdd({...rest}: RectButtonProps) {
    return (
        <RectButton 
            style={styles.container}
            {...rest}
        >
            <MaterialCommunityIcons 
                name='plus'
                color={theme.COLORS.HEADING}
                size={24}
            />
        </RectButton>
    )
}