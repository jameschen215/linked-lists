import { Node } from './node.js';

export class LinkedList {
	#head = null;
	#tail = null;

	// Return the first node in the list.
	get head() {
		return this.#head;
	}

	// Set the first node in the list.
	set head(node) {
		this.#head = node;

		if (node === null) {
			this.#tail = null;
		}
	}

	// Return the last node in the list.
	get tail() {
		return this.#tail;
	}

	// Set the last node in the list.
	set tail(node) {
		this.#tail = node;
	}

	// Add a new node containing value to the end of the list.
	append(value) {
		const newNode = new Node();
		newNode.value = value;

		if (this.head === null) {
			this.head = newNode;
		} else {
			this.tail.nextNode = newNode;
		}

		// set private tail property
		this.tail = newNode;
	}

	// Add a new node containing value to the start of the list.
	prepend(value) {
		const newNode = new Node();
		newNode.value = value;

		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			const tmp = this.head;
			this.head = newNode;
			this.head.nextNode = tmp;
		}
	}

	// Return the total number of nodes in the list.
	size() {
		let count = 0;
		let tmp = this.head;

		while (tmp !== null) {
			count += 1;
			tmp = tmp.nextNode;
		}

		return count;
	}

	// Return the node at the given index.
	at(index) {
		if (index >= this.size() || index < 0) return null;

		let count = 0;
		let tmp = this.head;

		while (tmp !== null) {
			if (index === count) return tmp;

			tmp = tmp.nextNode;
			count += 1;
		}
	}

	// Remove and return the last element from the list.
	pop() {
		if (this.tail === null) return null;

		const last = this.tail;
		const secondToLastIndex = this.size() - 2;

		let count = 0;
		let tmp = this.head;

		if (this.size() === 1) {
			this.head = null;
		} else {
			while (tmp !== null) {
				if (count === secondToLastIndex) {
					tmp.nextNode = null;
				}

				tmp = tmp.nextNode;
				count += 1;
			}
		}

		return last;
	}

	// Return true if the passed in value is in the list
	// and otherwise returns false.
	contains(value) {
		if (this.head === null) return false;

		let tmp = this.head;
		while (tmp !== null) {
			if (tmp.value === value) return true;
			tmp = tmp.nextNode;
		}

		return false;
	}

	// Return the index of the node containing value, or null if not found.
	find(value) {
		if (this.head === null) return null;

		let tmp = this.head;
		let index = 0;

		while (tmp !== null) {
			if (tmp.value === value) return index;
			tmp = tmp.nextNode;
			index += 1;
		}

		return null;
	}

	// Extra credit
	// Insert a new node with the provided value at the given index.
	insertAt(value, index) {
		if (index < 0 || index > this.size()) return;

		const newNode = new Node();
		newNode.value = value;

		if (index === 0) {
			newNode.nextNode = this.head;
			this.head = newNode;
		}

		let count = 0;
		let tmp = this.head;

		while (tmp !== null) {
			if (count === index - 1) {
				newNode.nextNode = tmp.nextNode;
				tmp.nextNode = newNode;
			}

			tmp = tmp.nextNode;
			count += 1;
		}
	}

	// Remove the node at the given index.
	removeAt(index) {
		if (this.head === null || index < 0 || index >= this.size()) {
			return 'Out of range.';
		}

		let count = 0;
		let tmp = this.head;

		if (index === 0) {
			this.head = this.head.nextNode;
		} else {
			while (tmp !== null) {
				if (count === index - 1) {
					tmp.nextNode = tmp.nextNode.nextNode;
				}
				tmp = tmp.nextNode;
				count += 1;
			}
		}
	}

	toString() {
		let str = '';
		let tmp = this.head;

		while (tmp !== null) {
			str += `( ${tmp.value} ) -> `;
			tmp = tmp.nextNode;
		}

		return str !== '' ? (str += 'null') : 'Empty list.';
	}
}
