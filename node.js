export class Node {
	#value = null;
	#nextNode = null;

	get value() {
		return this.#value;
	}

	set value(newValue) {
		this.#value = newValue;
	}

	get nextNode() {
		return this.#nextNode;
	}

	set nextNode(node) {
		this.#nextNode = node;
	}
}
