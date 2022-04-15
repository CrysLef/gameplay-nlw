import { NavigationContainer } from "@react-navigation/native"

import AuthRoutes from "./auth.routes"

import SignIn from '../screens/SignIn'
import { useAuth } from "../hooks/auth"

export default function Routes() {
    const { user } = useAuth()

    return(
        <NavigationContainer>
            { user.id ? <AuthRoutes /> : <SignIn /> }
        </NavigationContainer>
    )
}