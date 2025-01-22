export function Node() {
	let _value = null;
	let _nextNode = null;

	return {
		get value() {
			return _value;
		},
		set value(newValue) {
			_value = newValue;
		},
		get nextNode() {
			return _nextNode;
		},
		set nextNode(node) {
			_nextNode = node;
		},
	};
}
