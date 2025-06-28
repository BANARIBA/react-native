import { useAuthContext } from "../context/AuthContext"

export const LoginPage = (): JSX.Element => {
  const { isAuthenticated, loginwithemailpassword, user, logout } = useAuthContext();
  return (
    <div>
      <h3>Login</h3>
      {
        isAuthenticated 
          ? 
            <>
              <h1>Welcome: </h1>
              <pre>
                {
                  JSON.stringify(user, null, 2)
                }
              </pre>
              <button className="bg-blue-500 p-2 text-white rounded-xl mt-2" onClick={() => logout()}>Logout</button>
            </>
          :
            <>
              <h1>Sign in</h1>
              <button className="bg-blue-500 p-2 text-white rounded-xl mt-2" onClick={() => loginwithemailpassword('gohan@gmail.com', 'asd.456')}>Logint</button>
            </>
      }
    </div>
  )
}
