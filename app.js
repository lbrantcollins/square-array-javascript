class SquareArray {

	constructor(capacity) {
		this.capacity = capacity;
		this.array = [];
	}

	read() {
		if (this.array.length > 0) {
			const oldestItem = this.array[0];
			this.array.shift();
			return oldestItem;
		} else {
			throw "Square array is empty."
		}
	}

	write(str) {
		if (this.array.length < this.capacity) {
			this.array.push(str);
		} else {
			throw "Square array is full."
		}
	}

	forceWrite(str) {
		if (this.array.length < this.capacity) {
			this.write(str);
		} else {
			this.array.pop();
			this.array.push(str);
		}
	}

}

function squareArray(capacity) {

		const square = new SquareArray(capacity);

		return square;
	}

module.exports = squareArray;


