import { Container } from './styles'
import { ViewProps } from 'react-native'

type Props = ViewProps & {
  isCentered?: boolean;
}


export default function ListDivider({ isCentered, ...rest }: Props){
  return (
    <Container 
      {...rest}
      style={[
        isCentered ? {
          marginVertical: 12,
        } : {
          marginTop: 2,
          marginBottom: 31,
        }
      ]}
    />
  );
}