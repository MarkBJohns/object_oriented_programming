const testObject={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    squareA(){
        return this.a*this.a
    },
    squareB(){
        return this.b*this.b
    },
    squareC(){
        return this.c*this.c
    },
    squareD(){
        return this.d*this.d
    }
}

describe('using methods and "this" inside an object',function(){
    it('should change function results based on the key/value pair being referenced',function(){
        expect(testObject.squareA()).toEqual(1);
        expect(testObject.squareB()).toEqual(4);
        expect(testObject.squareC()).toEqual(9);
        expect(testObject.squareD()).toEqual(16);
    })
})