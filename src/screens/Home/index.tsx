import { useState } from 'react';

import { Header, Content, flatstyle } from './styles';

import Profile from '../../components/Profile'
import ButtonAdd from '../../components/ButtonAdd'
import CategorySelect from '../../components/CategorySelect'
import ListHeader from '../../components/ListHeader'
import Background from "../../components/Background";
import ListDivider from '../../components/ListDivider'

import { View, FlatList } from 'react-native';
import Appointment from '../../components/Appointment';
import theme from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native'


export default function Home(){
  const { SECONDARY_80, SECONDARY_100 } = theme.COLORS
  const [category, setCategory] = useState('')
  const navigation = useNavigation()

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

        <Content>
          <ListHeader
            title='Partidas agendadas'
            subtitle='Total 6'
          />
        </Content>

        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          style={flatstyle.matches}
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