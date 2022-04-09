import { createStackNavigator } from "@react-navigation/stack"
import theme from "../global/styles/theme"

import Home from '../screens/Home'
import SignIn from '../screens/SignIn'


const { Navigator, Screen } = createStackNavigator()

export default function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.COLORS.SECONDARY_90,
                },
                headerShown: false,
            }}
        >
            <Screen 
                name='SignIn'
                component={SignIn}
            />
            <Screen 
                name='Home'
                component={Home}
            />
        </Navigator>
    )
}