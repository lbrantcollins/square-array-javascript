const expect = require('chai').expect;
const squareArray = require('../app.js');

describe('squareArray', () => {

    it('should throw an error when reading empty square', ()=>{
        let square = squareArray(3);
        expect(function() {square.read();}).to.throw("Square array is empty.");
    });

    

})

