import { Img } from './styles'


export default function GuildIcon(){
  const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ck5k0kovUsCvEoH35qK6L5tmCim2Y-AylA&usqp=CAU'

    return (
    <Img
        source={{ uri }}
        resizeMode='cover'
    />

  )
}