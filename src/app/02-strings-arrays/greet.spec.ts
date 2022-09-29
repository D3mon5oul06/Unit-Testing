import { greet } from './greet'

describe ('greet test suite', () => {
it('Deberia incluir el nombre en el mensaje', () =>{
expect(greet('Oz')).toBe('Bienvenido Oz')
})
})