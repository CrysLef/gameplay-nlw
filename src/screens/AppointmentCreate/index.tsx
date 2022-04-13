import {
    Container,
    Label,
    Form,
    Select,
    Img,
    SelectBody,
    Column,
    Divider,
    Field,
    CaracteresLimit,
    Footer
} from './styles';

import { Feather } from '@expo/vector-icons'
import { View, Platform } from 'react-native';
import theme from '../../global/styles/theme';
import Header from '../../components/Header'
import CategorySelect from '../../components/CategorySelect';
import { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import ModalView from '../../components/ModalView'
import Guilds from '../Guilds';
import GuildIcon from '../../components/GuildIcon'
import { ScrollView } from 'react-native-gesture-handler';
import SmallInput from '../../components/SmallInput'
import TextArea from '../../components/TextArea'
import Button from '../../components/Button'
import { GuildProps } from '../../components/Guild';


export default function AppointmentCreate(){
    const [category, setCategory] = useState('')
    const [openGuildsModal, setOpenGuildsModal] = useState(false)
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
      }

    function handleOpenGuilds() {
        setOpenGuildsModal(true)
    }

    function handleGuildSelect(guildSelected: GuildProps) {
        setGuild(guildSelected)
        setOpenGuildsModal(false)
    }


    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height' }>
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
                            <Label>Dia e mês</Label>
                        
                            <Column>
                                <SmallInput maxLength={2} />
                                <Divider>/</Divider>
                                <SmallInput maxLength={2} />
                            </Column>
                        </View>
                        <View>
                            <Label>Horário</Label>
                        
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

            <ModalView visible={openGuildsModal} >
                <Guilds handleGuildSelect={handleGuildSelect} />
            </ModalView>

        </Container>
    );
}