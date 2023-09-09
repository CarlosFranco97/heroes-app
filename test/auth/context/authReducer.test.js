import { types, authReducer } from "../../../src/auth";



describe('Pruebas en el authReducer', () => {
    const initialState = {
        logged: false,
    }
    test('debe de mostrar el estado inicial', () => {
      const newState = authReducer(initialState, {});
      expect(newState).toBe(initialState)
    });

    test('debe de llamar al login autenticar y establecer el usuario', () => {
       const user = {
        id: 'ABC',
        name: 'Carlos Franco'
       }

       const action = {
        type: types.login,
        payload: user 
       }
      
        const newState = authReducer(initialState, action);
       
        expect(newState).toEqual({
            logged: true,
            user: action.payload
        }); 

   
    });

    test('debe de borrar el name del usuario y el logged en false', () => {
      const state ={
        logged: true, 
        user: {
            id: '123',
            name: 'Carlos Franco'
        }
      }
      const action = {
        type: types.logout
      };

      const newState = authReducer( state, action );
     
      expect(newState).toEqual({
        logged: false,
      })
    })
})