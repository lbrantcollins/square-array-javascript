class SquareArray {

	constructor(capacity) {
		this.capacity = capacity;
		this.array = [];
	}

	read() {
		if (this.array.length === 0) {
			throw "Square array is empty."
		}
	}

}

function squareArray(capacity) {

		const square = new SquareArray(capacity);

		return square;
	}

module.exports = squareArray;


