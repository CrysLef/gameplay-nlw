import { createStackNavigator } from "@react-navigation/stack"
import theme from "../global/styles/theme"

import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import AppointmentDetails from '../screens/AppointmentDetails'


const { Navigator, Screen } = createStackNavigator()

export default function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: theme.COLORS.SECONDARY_90,
                },
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

             <Screen 
                name='AppointmentDetails'
                component={AppointmentDetails}
            />
        </Navigator>
    )
}