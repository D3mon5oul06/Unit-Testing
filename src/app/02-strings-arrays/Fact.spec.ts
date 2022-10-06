import { Fact } from './Fact';

describe( 'getCurrencies', () => {
    it('Should return 1 if n is 0', () => {
    const result = Fact(0);
    expect(result).toBe(1);
    })

    it('Should return 0 if n is negative', () => {
    const result = Fact(-1);
    expect(result).toBe(0);
    })

    it('Should return 6 if n is 3', () => {
    const result = Fact(3);
    expect(result).toBe(6);
    })

    it('Should return 24 if n is 4', () => {
        const result = Fact(4);
        expect(result).toBe(24);
    })

    it('Should return 120 if n is 5', () => {
        const result = Fact(5);
        expect(result).toBe(120);
    })

    it('Should return 0 if n > 16', () => {
        const result = Fact(17);
        expect(result).toBe(0);
    });
});