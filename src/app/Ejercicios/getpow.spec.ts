import { getpow } from './getpow';

describe( 'Suite Pow', () => {
    it('Should return 1 if n = 0', () => {
        const result = getpow(0, 0);
        expect(result).toBe(1);
    })

    it('Should return 0 if n is negative', () => {
        const result = getpow(1, -1);
        expect(result).toBe(0);
    })

    it('Should return 8 if x=2, n=3', () => {
        const result = getpow(2, 3);
        expect(result).toBe(8);
    })

    it('Should return 9 if x=3, n=2', () => {
        const result = getpow(3, 2);
        expect(result).toBe(9);
    })
})