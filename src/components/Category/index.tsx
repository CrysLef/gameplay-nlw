import {
    styles,
    Content,
    Checked,
    Unchecked,
    Title
} from './styles';

import { SvgProps } from 'react-native-svg';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import theme from '../../global/styles/theme';


type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
}

export default function Category({
    title,
    icon: Icon,
    hasCheckBox = false,
    checked = false,
    ...rest
} : Props){
    const { SECONDARY_40, SECONDARY_50, SECONDARY_70, SECONDARY_85 } = theme.COLORS

    return (
    <RectButton {...rest}>
        <LinearGradient 
            style={styles.container}
            colors={[SECONDARY_50, SECONDARY_70]}>
            <Content 
                style={{ opacity: checked ? 1 : 0.5 }}
                colors={[checked ? SECONDARY_85 : SECONDARY_50, SECONDARY_40 ]}
                >
                { hasCheckBox && (checked ? <Checked /> : <Unchecked />) }
                <Icon 
                    width={48}
                    height={48}
                />
                <Title>{ title }</Title>
            </Content>
        </LinearGradient>
    </RectButton>
    );
}