# Project: Linked Lists

## Assignment

You will need two classes or factories:

1. `LinkedList` class / factory, which will represent the full list.

2. `Node` class / factory, containing a `value` property and a `nextNode` property, set both as `null` by default.

Build the following functions in your linked list class / factory:

1. `append(value)` adds a new node containing `value` to the end of the list
2. `prepend(value)` adds a new node containing `value` to the start of the list
3. `size` returns the total number of nodes in the list
4. `head` returns the first node in the list
5. `tail` returns the last node in the list
6. `at(index)` returns the node at the given `index`
7. `pop` removes the last element from the list
8. `contains(value)` returns true if the passed in value is in the list and otherwise returns false.
9. `find(value)` returns the index of the node containing value, or null if not found.
10. `toString` represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: `( value ) -> ( value ) -> ( value ) -> null`.

Extra credit

1. `insertAt(value, index)` that inserts a new node with the provided `value` at the given `index`.
2. `removeAt(index)` that removes the node at the given `index`.

## Test it out

Let’s test out the Linked List you made!

1. Create a `main.js` file and make sure it imports your `LinkedList` class or factory. This is where we’ll test the list.
2. Create an instance of your `LinkedList` and populate it with nodes:

```JavaScript
// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
```

3. Add `console.log(list.toString());` to the end of the file and run it.
4. If everything is working, the output should be:

```terminal
( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
```

Feel free to use different values to test if you like.
