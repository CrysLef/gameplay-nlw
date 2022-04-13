import { Container, Title, Subtitle } from './styles'

import { ViewProps } from 'react-native'

type Props = ViewProps & {
    title: string;
    subtitle: string;
}


export default function ListHeader({ title, subtitle, ...rest }: Props){
  return (
    <Container {...rest}>
        <Title>{ title }</Title>
        <Subtitle>{ subtitle }</Subtitle>
    </Container>
  )
}