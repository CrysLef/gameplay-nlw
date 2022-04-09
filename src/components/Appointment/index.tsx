import {
  Container,
  Content,
  Header,
  Title,
  PlayerInfo,
  Category,
  Player,
  Date,
  DateInfo,
  Footer
} from './styles';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import GuildIcon from '../GuildIcon'
import PlayersSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'

import { categories } from '../../utils/categories';
import theme from '../../global/styles/theme';

export type GuildProps = {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
}

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppointmentProps;
}


export default function Appointment({ data, ...rest }: Props){
  const [category] = categories.filter(item => item.id === data.category)
  const { PRIMARY, ON } = theme.COLORS
  const { owner } = data.guild

  return (
    <RectButton {...rest}>
        <Container>
            <GuildIcon />
            <Content>
              <Header>
                <Title>
                  { data.guild.name }
                </Title>
                <Category>
                  { category.title }
                </Category>
              </Header>
              <Footer>
                <DateInfo>
                  <CalendarSvg />
                  <Date>
                    {data.date}
                  </Date>
                </DateInfo>
                <PlayerInfo>
                  <PlayersSvg fill={ owner ? PRIMARY : ON } />
                  <Player style={{ color: owner ? PRIMARY : ON}}>
                    { owner ? 'Anfitrião' : 'Visitante' }
                  </Player>
                </PlayerInfo>
              </Footer>
            </Content>
        </Container>
    </RectButton>
  );
}