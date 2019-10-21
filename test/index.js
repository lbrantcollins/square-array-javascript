const expect = require('chai').expect;
const squareArray = require('../app.js');

describe('squareArray', () => {

    it('should throw an error when reading empty square', ()=>{
        let square = squareArray(3);
        expect(function() {square.read();}).to.throw("Square array is empty.");
    });

    it('should write elements to the square', ()=>{
        let square = squareArray(2);
        square.write('1');
        expect(square.read()).to.equal('1');
    });


})

