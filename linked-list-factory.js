import { Node } from './node-factory.js';

export function LinkedList() {
	let _head = null;
	let _tail = null;

	return {
		get head() {
			return _head;
		},
		set head(node) {
			_head = node;
		},
		get tail() {
			return _tail;
		},
		set tail(node) {
			_tail = node;
		},
		append(value) {
			const newNode = Node();
			newNode.value = value;

			if (this.head === null) {
				this.head = newNode;
			} else {
				this.tail.nextNode = newNode;
			}

			this.tail = newNode;
		},
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
		},
		size() {
			let count = 0;
			let tmp = this.head;

			while (tmp !== null) {
				count += 1;
				tmp = tmp.nextNode;
			}

			return count;
		},
		at(index) {
			if (index >= this.size() || index < 0) return null;

			let count = 0;
			let tmp = this.head;

			while (tmp !== null) {
				if (index === count) return tmp;

				tmp = tmp.nextNode;
				count += 1;
			}
		},
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
		},
		contains(value) {
			if (this.head === null) return false;

			let tmp = this.head;
			while (tmp !== null) {
				if (tmp.value === value) return true;
				tmp = tmp.nextNode;
			}

			return false;
		},
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
		},
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
		},
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
		},
		toString() {
			let str = '';
			let tmp = this.head;

			while (tmp !== null) {
				str += `( ${tmp.value} ) -> `;
				tmp = tmp.nextNode;
			}

			return str !== '' ? (str += 'null') : 'Empty list.';
		},
	};
}
