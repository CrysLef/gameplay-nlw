import { 
    Container,
    Username,
    Status,
    NameStatus,
    BulletStatus
} from './styles';

import {
  View,
  Text
} from 'react-native';

import Avatar from '../Avatar';
import theme from '../../global/styles/theme';

export type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type Props = {
    data: MemberProps;
}

export default function Members({ data }: Props){
    const { ON, PRIMARY } = theme.COLORS
    const isOnline = data.status === 'online';
  return (
    <Container>
        <Avatar urlImage={data.avatar_url} />
        <View>
            <Username>{ data.username }</Username>
            <Status>
                <BulletStatus
                    style={{
                        backgroundColor: isOnline ? ON : PRIMARY
                    }}
                />
                <NameStatus>
                    { isOnline ? 'Disponível' : 'Ocupado' }
                </NameStatus>
            </Status>
        </View>
    </Container>
  );
}