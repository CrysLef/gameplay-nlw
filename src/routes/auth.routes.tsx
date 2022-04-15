import { createStackNavigator } from '@react-navigation/stack'
import theme from '../global/styles/theme'

import Home from '../screens/Home'
import AppointmentDetails from '../screens/AppointmentDetails'
import AppointmentCreate from '../screens/AppointmentCreate'
import SignIn from '../screens/SignIn'


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
                name='Home'
                component={Home}
            />

             <Screen 
                name='AppointmentDetails'
                component={AppointmentDetails}
            />

            <Screen 
                name='AppointmentCreate'
                component={AppointmentCreate}
            />
        </Navigator>
    )
}