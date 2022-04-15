import { AuthProvider } from './src/hooks/auth'
import AppLoading from 'expo-app-loading'
import { StatusBar, LogBox } from 'react-native'
import { useFonts } from 'expo-font'
import Routes from './src/routes'

import Background from './src/components/Background'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import theme from './src/global/styles/theme'

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.'])

export default function App() {
  const { SECONDARY_80, SECONDARY_100 } = theme.COLORS

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background colors={[SECONDARY_80, SECONDARY_100]}>
      <StatusBar
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  )
}
