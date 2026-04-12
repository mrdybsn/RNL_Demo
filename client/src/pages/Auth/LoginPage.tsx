import AuthPageLayout from "./AuthPageLayout"
import { LoginForm } from "./components/LoginForm"

const LoginPage = () => {
  return (
    <>
        <AuthPageLayout>
            <LoginForm />   
        </AuthPageLayout> 
    </>
  )
}

export default LoginPage