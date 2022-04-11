import {
    liststyle,
    Title,
    Subtitle,
    Banner,
    BannerContent,
    Footer
} from './styles';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons'
import Background from '../../components/Background';
import theme from '../../global/styles/theme';
import Header from '../../components/Header'
import BannerImg from '../../assets/banner.png'
import ListHeader from '../../components/ListHeader'
import { FlatList } from 'react-native';
import Members from '../../components/Members'
import ListDivider from '../../components/ListDivider'
import ButtonIcon from '../../components/ButtonIcon';

export default function AppointmentDetails(){
    const { SECONDARY_80, SECONDARY_100, PRIMARY } = theme.COLORS

    const members = [
        {
            id: '1',
            username: 'Crystian',
            avatar_url: 'https://github.com/CrysLef.png',
            status: 'online',
        },
        {
            id: '2',
            username: 'Crystian',
            avatar_url: 'https://github.com/rodrigorgtic.png',
            status: 'offline',
        },
    ]


    return (
        <Background colors={[SECONDARY_80, SECONDARY_100]}>
            <Header
                title='Detalhes'
                action={
                    <BorderlessButton>
                        <Fontisto
                            name='share'
                            size={24}
                            color={PRIMARY}
                        />
                    </BorderlessButton>
                }
            />
            <Banner source={BannerImg}>
                <BannerContent>
                    <Title>League of Legends</Title>
                    <Subtitle>É hoje que vamos chegar ao challenger sem perder uma partida da md10</Subtitle>
                </BannerContent>
            </Banner>
            <ListHeader 
                title="Jogadores"
                subtitle="Total 3"
            />
            <FlatList
                style={liststyle.membersList}
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Members data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDivider />}
            />
            <Footer>
                <ButtonIcon
                    title='Entrar no servidor do Discord'
                />
            </Footer>
        </Background>
    );
}