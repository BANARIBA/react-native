// import { BasicTypes } from './typescript/BasicTypes'
// import { Functions } from './typescript/Functions'
// import { LiteralObjects } from './typescript/LiteralObjects'
// import { Counter } from "./typescript/Counter"
// import { LoginPage } from "./components/LoginPage"
// import { UsersPage } from './components/UsersPage';
import { FormsPage } from "./components/FormsPage"
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-4xl mb-5">
          React - TS
        </h1>
        {/* <BasicTypes /> */}
        {/* <LiteralObjects /> */}
        {/* <Functions /> */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        {/* <UsersPage /> */}
        <FormsPage />
      </div>
    </AuthProvider>
  )
}

export default App
