import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'

import { StatusBar } from 'react-native'
import Background from "./src/components/Background";
import Routes from "./src/routes";
import theme from "./src/global/styles/theme";

export default function App() {
  const { SECONDARY_80, SECONDARY_100 } = theme.COLORS

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

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
      
      <Routes />
    </Background>
  );
}
