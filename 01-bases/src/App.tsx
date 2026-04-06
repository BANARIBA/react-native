import { Counter } from './components/Counter'
import { FormsPage } from './components/FormsPage'
import { LoginPage } from './components/LoginPage'
import { UsersPage } from './components/UsersPage'
import { AuthProvider } from './provider/AuthProvider'
import { BasicTypes } from './typescript/BasicTypes'
import { Functions } from './typescript/Functions'
import { ObjectLiterals } from './typescript/ObjectLiterals'

export const App = () => {
  return (
    <div className='flex flex-col text-center mx-auto items-center h-screen flex-wrap gap-5'>
      <h1 className='text-3xl font-bold mb-5'>TypeScript with React</h1>
      <BasicTypes />
      <ObjectLiterals />
      <Functions />
      <Counter />

      {/* Solo desde aqui tengo acceso al contenido del auth login */}
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
      <UsersPage />
      <FormsPage />
    </div>
  )
}
