import {
    CaracteresLimit,
    Column,
    Container,
    Divider,
    Field,
    Footer,
    Form,
    Label,
    Img,
    Select,
    SelectBody,
} from './styles'

import { RectButton } from 'react-native-gesture-handler'
import { ScrollView } from 'react-native-gesture-handler'
import { View, Platform } from 'react-native'
import { useState } from 'react'
import Guilds from '../Guilds'

import CategorySelect from '../../components/CategorySelect'
import SmallInput from '../../components/SmallInput'
import Background from '../../components/Background'
import { GuildProps } from '../../components/Guild'
import GuildIcon from '../../components/GuildIcon'
import ModalView from '../../components/ModalView'
import TextArea from '../../components/TextArea'
import Header from '../../components/Header'
import Button from '../../components/Button'

import { Feather } from '@expo/vector-icons'
import theme from '../../global/styles/theme'


export default function AppointmentCreate(){
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps)
    const [openGuildsModal, setOpenGuildsModal] = useState(false)
    const [category, setCategory] = useState('')
    const { SECONDARY_80, SECONDARY_100 } = theme.COLORS

    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId)
      }

    function handleOpenGuilds() {
        setOpenGuildsModal(true)
    }

    function handleCloseModal() {
        setOpenGuildsModal(false)
    }

    function handleGuildSelect(guildSelected: GuildProps) {
        setGuild(guildSelected)
        setOpenGuildsModal(false)
    }


    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height' }>
            <Background colors={[SECONDARY_80, SECONDARY_100]}>

                <ScrollView>
                    <Header title='Agendar partida' />

                    <Label
                        style={{ marginLeft: 24, marginTop: 36, marginBottom: 18}}
                    >
                        Categoria
                    </Label>

                    <CategorySelect 
                        hasCheckBox
                        setCategory={handleCategorySelect}
                        categorySelected={category}
                    />

                    <Form>
                        <RectButton onPress={handleOpenGuilds}>
                            <Select>
                                {
                                    guild.icon
                                    ? <GuildIcon />
                                    : <Img />
                                }

                                <SelectBody>
                                    <Label>
                                        {
                                            guild.name
                                            ? guild.name
                                            : 'Selecionar um servidor'
                                        }
                                    </Label>
                                </SelectBody>

                                <Feather
                                    name='chevron-right'
                                    color={theme.COLORS.HEADING}
                                    size={18}
                                />

                            </Select>
                        </RectButton>

                        <Field>
                            <View>
                                <Label style={{ marginBottom: 12 }}>Dia e mês</Label>
                            
                                <Column>
                                    <SmallInput maxLength={2} />
                                    <Divider>/</Divider>
                                    <SmallInput maxLength={2} />
                                </Column>
                            </View>
                            <View>
                                <Label style={{ marginBottom: 12 }}>Horário</Label>
                            
                                <Column>
                                    <SmallInput maxLength={2} />
                                    <Divider>:</Divider>
                                    <SmallInput maxLength={2} />
                                </Column>
                            </View>
                        </Field>

                        
                        <Field style={{ marginBottom: 12 }} >
                            <Label>Descrição</Label>
                            <CaracteresLimit>Max 100 caracteres</CaracteresLimit>
                        </Field>

                        <TextArea 
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                        />

                        <Footer>
                            <Button title="Agendar" />
                        </Footer>

                    </Form>
                </ScrollView>
            </Background>

            <ModalView visible={openGuildsModal} closeModal={handleCloseModal} >
                <Guilds handleGuildSelect={handleGuildSelect} />
            </ModalView>

        </Container>
    )
}