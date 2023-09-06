import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types';
export const AuthProvider = ({ children }) => {
    // con la funcion del initializer (init) no es necesario manejar el initializer
    // const initialState = {
    //     logged: false,
    // };
    
    const init = () => {
     const user = JSON.parse(localStorage.getItem('user'));
      return {
        logged: !!user,
        user: user
      }
    };

    const [authState, dispatch] = useReducer(authReducer, {}, init)

 //Deseo hacer un login para identificar el usuario que esta ingresado en la pagina
   const login = (name = '') => {
      const user = {
        id: 'ABC',
        name: name
      };
      const action = {
          type: types.login,
          payload: user
      };
      
      localStorage.setItem('user', JSON.stringify( user ));
        
      dispatch(action)
   };
  
    const logout = () => {
      localStorage.removeItem('user');
      
      const action = {
        type: types.logout,
      };
      dispatch(action)
    }


    return (
    <AuthContext.Provider value={{
      ...authState,
      login: login,
      logout: logout         
    }}>
        {children}
    </AuthContext.Provider>
  )
}
