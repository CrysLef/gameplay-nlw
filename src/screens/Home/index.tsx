import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

import { Header, Matches } from './styles'
import { FlatList } from 'react-native'

import CategorySelect from '../../components/CategorySelect'
import Appointment from '../../components/Appointment'
import ListDivider from '../../components/ListDivider'
import Background from '../../components/Background'
import ListHeader from '../../components/ListHeader'
import ButtonAdd from '../../components/ButtonAdd'
import Profile from '../../components/Profile'

import theme from '../../global/styles/theme'


export default function Home(){
  const [category, setCategory] = useState('')
  const navigation = useNavigation()
  const { SECONDARY_80, SECONDARY_100 } = theme.COLORS

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendário',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 ás 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Lendário',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 ás 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]


  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleAppointmentDetails(){
    navigation.navigate('AppointmentDetails')
  }

  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate')
  }

  return (
    <Background colors={[SECONDARY_80, SECONDARY_100]}>
      <Header>
          <Profile style={{marginBottom: 40}} />
          <ButtonAdd onPress={handleAppointmentCreate} />
      </Header>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <ListHeader
          title='Partidas agendadas'
          subtitle='Total 6'
          style={{ marginTop: 40 }}
        />

        <Matches
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 69 }}
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment 
              data={item} 
              onPress={handleAppointmentDetails}
            />
          )}
        />
          
       
    </Background>
  );
}