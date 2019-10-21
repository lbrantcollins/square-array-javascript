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

    it('should read/write elements to the square', ()=>{
        let square = squareArray(2);
        square.write('1');
        square.write('2');
        expect(square.read()).to.equal('1');
        expect(square.read()).to.equal('2');
    });

     it('should throw an error when writing to a full square', ()=>{
        let square = squareArray(2);
        square.write('1');
        square.write('2');
        expect(square.read()).to.equal('1');
        square.write('3');
        expect(function() {square.write('4');}).to.throw("Square array is full.");
    });

    it('can forcewrite onto a full array (overwrite the most recent entry)', ()=>{
        let square = squareArray(2);
        square.write('1');
        square.write('2');
        expect(square.read()).to.equal('1');
        square.write('3');
        square.forceWrite('4');
        expect(square.read()).to.equal('2');
        expect(square.read()).to.equal('4');
    });



})

