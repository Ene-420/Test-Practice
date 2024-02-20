


describe('reverseString', () => {

    test('Reversed String', () => {
         expect(reverseString("name").toBe("eman"));
    })
    expect(reverseString('name').toBe('eman'))
    
})


describe('Capitalize', () => {
    test('FirstCapital Letter', () => {
        expect(capitalize('Name')[0]).toBe('N')
    })
})

describe('Calcuator', () => {
    
    test('Add', () => {
        expect(sum(1,2)).toBe(3)
    })

    test('Divide', () => {
        expect(divide(4,2)).toBe(2)
    })

    test('Multiply', () => {
        expect(multiply(4,5)).toBe(20)
    })
})


describe('Caesar Cipher', () => {
    
    test('Cipher', () => {
        expect(caesarCipher("name", 2)).toBe("OBNF");
    })
})