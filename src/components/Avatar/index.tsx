import { AvatarIcon, Gradient } from './styles'

import theme from '../../global/styles/theme'

type Props = {
    urlImage: string;
}

export default function Avatar({ urlImage }: Props){
    const { SECONDARY_50, SECONDARY_70 } = theme.COLORS

  return (
    <Gradient colors={[SECONDARY_50, SECONDARY_70]}>
        <AvatarIcon source={{ uri: urlImage }} />
    </Gradient>
  );
}