class SquareArray {

	constructor(capacity) {
		this.capacity = capacity;
		this.array = [];
	}

	read() {
		if (this.array.length > 0) {
			return this.array[0];
		} else {
			throw "Square array is empty."
		}
	}

	write(str) {
		this.array.push(str);
	}

}

function squareArray(capacity) {

		const square = new SquareArray(capacity);

		return square;
	}

module.exports = squareArray;


