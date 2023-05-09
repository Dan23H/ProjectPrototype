import { Loginform } from "../components"
import { UserProvider } from "../context/UserProvider"

export const Login = () => {
    return (
        <UserProvider>
            <Loginform />
        </UserProvider>
    )
}