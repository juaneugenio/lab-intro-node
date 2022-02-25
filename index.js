/** @format */

class SortedList {
	constructor() {
		this.items = [];
		this.length = this.items.length;
		//this.length = 0;
	}

	add(item) {
		if (item) {
			this.items.push(item);
			this.length++;
			this.items.sort((a, b) => a - b);
		}
		return this.items;
	}

	get(pos) {
		if (pos > this.length) {
			throw new Error("OutOfBounds");
		}
		return pos;
	}

	max() {
		//if(this.items.length === 0)
		if (!this.length) {
			throw new Error("EmptySortedList");
		}
		//return this.items[this.length - 1];
		return Math.max(...this.items);
	}

	min() {
		if (!this.length) {
			throw new Error("EmptySortedList");
		}
		return Math.min(...this.items);
	}

	sum() {
		//return this.items.reduce((acc, val) => acc + val, 0);
		return !this.length ? 0 : this.items.reduce((acc, value) => acc + value);
	}

	avg() {
		if (!this.length) {
			throw new Error("EmptySortedList");
		}
		return this.sum() / this.length;
	}
}

module.exports = SortedList;
