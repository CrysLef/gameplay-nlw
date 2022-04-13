import { Container, GuildList } from './styles'

import ListDivider from '../../components/ListDivider'
import { GuildProps } from '../../components/Guild'
import Guild from '../../components/Guild'

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}


export default function Guilds({ handleGuildSelect }: Props) {

  const guilds = [
    { 
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    { 
      id: '2',
      name: 'Cod dos cria',
      icon: 'image.png',
      owner: false
    }
  ]

  return (
    <Container>
      <GuildList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild 
            data={item}
            onPress={() => handleGuildSelect(item)}  
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 68 }}
      />
    </Container>
  )
}