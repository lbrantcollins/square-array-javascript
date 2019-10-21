class SquareArray {

	constructor(capacity) {
		this.capacity = capacity;
		this.array = [];
	}

	read() {
		if (this.array.length > 0) {
			// when reading, want to return the oldest item (FIFO)
			const oldestItem = this.array[0];
			// then remove the oldest item
			// shift the array so that the next oldest item is in the first spot
			this.array.shift();
			return oldestItem;
		} else {
			throw "Square array is empty."
		}
	}

	write(str) {
		// only write to the array if the capacity has not yet been reached
		if (this.array.length < this.capacity) {
			this.array.push(str);
		} else {
			throw "Square array is full."
		}
	}

	forceWrite(str) {
		// can forcewrite onto a full array (overwrite the most recent entry)
		// but, if capacity not yet reached, just write to the next spot, as usual
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


