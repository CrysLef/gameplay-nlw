import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import {
  Category,
  Container,
  Content,
  Date,
  DateInfo,
  Footer,
  GuildIconContainer,
  Header,
  Title,
  Player,
  PlayerInfo,
} from './styles'

import { categories } from '../../utils/categories'
import { GuildProps } from '../Guild'

import CalendarSvg from '../../assets/calendar.svg'
import PlayersSvg from '../../assets/player.svg'
import theme from '../../global/styles/theme'
import GuildIcon from '../GuildIcon'

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
  const { PRIMARY, ON, SECONDARY_50, SECONDARY_70 } = theme.COLORS
  const { owner } = data.guild

  return (
    <RectButton {...rest}>
        <Container>
            <GuildIconContainer colors={[SECONDARY_50, SECONDARY_70]}>
              <GuildIcon />
            </GuildIconContainer>
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
                    { data.date }
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
  )
}