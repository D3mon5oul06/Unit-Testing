import { pow } from './getpow';

describe( 'pow test suite', () => {
    it('Dberia regresar 1 si n = 0', () => {
        const numero = pow(0, 0);
        expect(numero).toBe(1);
    })

    it('Dberia regresar 0 si n es negativo', () => {
        const numero = pow(1, -1);
        expect(numero).toBe(0);
    })

    it('Dberia regresar 8 si x=2, n=3', () => {
        const numero = pow(2, 3);
        expect(numero).toBe(8);
    })

    it('Dberia regresar 9 si x=3, n=2', () => {
        const numero = pow(3, 2);
        expect(numero).toBe(9);
    })
})
