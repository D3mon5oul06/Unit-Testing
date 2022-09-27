import { compute } from './compute';

describe('compute test suite ', ()=> {
    it('Deberia regresar 0  si el input es negativo', () =>{
    const  x = compute (-1);
    expect(x).toBe(0);
    })

    it('Deberia de implementar el imput si it es positivo', () =>{
    const x = compute (1);
    expect(x).toBe(2);
    })
})