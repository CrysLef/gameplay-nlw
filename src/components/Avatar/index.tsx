import {
    AvatarIcon,
    styles
} from './styles';

import { LinearGradient } from 'expo-linear-gradient'

import theme from '../../global/styles/theme';

type Props = {
    urlImage: string;
}

export default function Avatar({ urlImage } : Props){
    const { SECONDARY_50, SECONDARY_70 } = theme.COLORS

  return (
    <LinearGradient
    style={styles.gradientStyle}
    colors={[SECONDARY_50, SECONDARY_70]}
    >
        <AvatarIcon source={{ uri: urlImage }} />
        
        
    </LinearGradient>
  );
}