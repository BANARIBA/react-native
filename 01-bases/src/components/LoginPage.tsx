import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { isChecking, isAuthenticated, user, handleLogin, handleLogout } = useAuthContext();

  if (isChecking) return <p>Checking authentication status...</p>;
  return (
    <>
      {isAuthenticated ? (
        <>
          <p>Bienvenido {user!.email}</p>
          <button 
            className="bg-blue-500 p-2 text-white rounded-xl mt-2"
            onClick={handleLogout}
          >
            Salir
          </button>
        </>
      ) : (
        <>
          <p>Ingresar a la aplicacion</p>
          <button 
            className="bg-blue-500 p-2 text-white rounded-xl mt-2"
            onClick={() => handleLogin('goku@gmail.com', 'asd.456')}  
          >
            Entrar
          </button>
        </>
      )}
    </>
  );
};
