import { render } from '@testing-library/react'
import {PublicRouter} from '../../src/router/PublicRouter'
describe('Pruebas del <PublicRouter />', () => {
    test('debe de mostrar el children si no está autorizado', () => {
    render(<PublicRouter />)
    })
})